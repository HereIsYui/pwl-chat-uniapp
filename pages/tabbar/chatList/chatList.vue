<template>
	<view>
		<view class="MainBox">
			<u-cell-group>
				<u-cell title="摸鱼派聊天室" iconStyle="margin-right:20px" isLink url="/pages/chat/chat">
					<view slot="label" class="newInfo u-line-1">{{lastMsg}}</view>
					<u--image src="/static/logo_square.png" width="40px" height="40px" shape="square" radius="5"
						slot="icon"></u--image>
					<view slot="right-icon" class="newInfo">{{lastMsgTime}}</view>
					<!-- <u-badge value="99" :absolute="false" slot="right-icon"></u-badge> -->
				</u-cell>
				<u-cell title="小冰" label="[图片]" iconStyle="margin-right:20px" isLink url="/pages/xiaoice/xiaoice">
					<view slot="label" class="newInfo u-line-1">{{xiaoIceLastMsg}}</view>
					<u--image src="/static/avatar/xiaoIce.png" width="40px" height="40px" shape="square" radius="5"
						slot="icon"></u--image>
					<!-- <u-badge value="0" :absolute="false" slot="right-icon"></u-badge> -->
					<view slot="right-icon" class="newInfo">{{xiaoIceLastTime}}</view>
				</u-cell>
			</u-cell-group>
		</view>
		<u-notify :message="JoinChatMsg" :show="isSocketClose"></u-notify>
	</view>
</template>

<script>
	import {
		WS,
		getMorePage,
		getUserInfo
	} from '../../../utils/api.js';
	import {
		mapGetters,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				index: 0,
				apiKey: "",
				data: {},
				content: [],
				firstMsg: null,
				secondMsg: null,
				setting: {
					JoinChatTime: 30,
					ImageLoadHome: "https://pwl.yuis.cc/GetImage?url=",
					openAppPush: true,
					rpSkin: "WX"
				},
				lastMsg: null,
				lastMsgTime: "",
				isSocketClose: false,
				xiaoIceMsg: [],
				xiaoIceLastMsg: null,
				xiaoIceLastTime: null,
				JoinChat: null,
				JoinChatTime: 30,
				JoinChatMsg: "",
				defaultxiaoIceMessage: {
					content: "<p>有话快说,这里指令不用加小冰哦~</p>",
					dbUser: [],
					md: null,
					oId: 0,
					sysMetal: `{"list":[{"data":"","name":"小冰","description":"摸鱼派官方认证机器人（已备案）","attr":"url=https://www.lingmx.com/52pj/images/xiaoIce.jpg&backcolor=B9CDF6&fontcolor=ffffff","enabled":true}]}`,
					time: "2099-12-31 23:59:59",
					type: "msg",
					userAvatarURL: "https://pwl.stackoverflow.wiki/2021/12/blob-3ff70c59.png",
					userName: "xiaoIce",
					userNickname: "小冰工作号"
				}
			}
		},
		onLoad() {
			let apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');
			this.apiKey = apiKey;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			this.initChat();
			this.getPage(1);
			let setting = uni.getStorageSync('setting');
			let xiaoIceMsg = this.defaultxiaoIceMessage;
			xiaoIceMsg.oId = new Date().getTime();
			this.upDateXiaoIce(xiaoIceMsg);
			this.getInfo()
			try {
				setting = JSON.parse(setting);
				this.setting = setting;
				console.log(setting)
			} catch (e) {
				//TODO handle the exception
			}
			let that = this;
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
				that.isSocketClose = true;
				that.JoinChat = setInterval(() => {
					that.JoinChatTime--;
					that.JoinChatMsg = `网络已断开,${that.JoinChatTime}s后尝试重连`;
					console.log(`${that.JoinChatTime}s后尝试重连WebSocket`);
					if (that.JoinChatTime == 0) {
						that.initChat()
						that.JoinChatTime = that.setting.JoinChatTime || 30;
					}
				}, 1000)
			});
		},
		watch: {
			'$store.state.xiaoIce'(newVal, oldVal) {
				//对数据进行操作
				this.xiaoIceMsg = newVal;
				this.lastMsgInfo(newVal[newVal.length - 1], true);
			}
		},
		methods: {
			...mapMutations(['upDateXiaoIce', 'setContent', 'upDateContent', 'setFirstMsg', 'setSecondMsg',
				'setUserInfo'
			]),
			lastMsgInfo(msg, isXiaoIce) {
				let rule = msg.content.replace(/<img\/?.+?>/g, "[图片]");
				let rule2 = rule.replace(/<\/?.+?>/g, "");
				let lastMsg = rule2.replace(/ /g, "");
				if (isXiaoIce) {
					this.xiaoIceLastMsg = `${msg.userName}:${lastMsg}`;
					this.xiaoIceLastTime = this.fillterTime(msg.time);
				} else {
					this.lastMsg = `${msg.userName}:${lastMsg}`;
					this.lastMsgTime = this.fillterTime(msg.time);
				}
			},
			fillterTime(time) {
				let time1 = time.substr(-8, 5);
				return time1
			},
			initChat() {
				let that = this;
				var socketTask = uni.connectSocket({
					url: WS.channel + "?apiKey=" + that.apiKey,
					success: (res) => {
						that.isSocketClose = false;
						console.log("WebSocket 连接成功！")
						clearInterval(that.JoinChat);
					},
					fail: (err) => {
						console.log("WebSocket 连接失败！")
					}
				});
				socketTask.onMessage(function(res) {
					that.wsMessage(res)
				})
			},
			wsMessage(res) {
				let msg = JSON.parse(res.data)
				switch (msg.type) {
					case "online": //在线人数
						uni.setStorageSync('users', JSON.stringify(msg.users))
						// uni.setNavigationBarTitle({
						// 	title: `摸鱼派-聊天室(${msg.onlineChatCnt})`
						// })
						break;
					case "revoke": //撤回
						for (let i = 0; i < this.content.length; i++) {
							let c = this.content[i];
							if (c.oId != msg.oId) continue;
							this.content.splice(i, 1);
							this.setContent(this.content);
							break;
						}
						break;
					case "msg": //消息
						if (!this.scrollPower && !this.isShowToBottom) {
							this.isShowToBottom = true;
						}
						if (msg.userName == "xiaoIce") {
							console.log(msg)
						}
						// #ifdef H5
						let userAvatar = encodeURI(msg.userAvatarURL)
						userAvatar = btoa(userAvatar);
						msg.userAvatarURL = `${this.setting.ImageLoadHome+userAvatar}`
						// #endif
						console.log(msg)
						this.filterMsg(msg);
						// #ifdef APP-PLUS
						// 测试app推送@
						try {
							if (msg.content.indexOf(`aria-label="${this.data.userName}"`) >= 0 && !this.isAppShow && this
								.setting.openAppPush) {
								plus.push.createMessage(`${msg.userName}@你了`);
								plus.nativeUI.toast(`${msg.userName}@你了`, {
									verticalAlign: "top",
									align: "center",
									background: "#fff"
								});
							}
						} catch (e) {
							//TODO handle the exception
						}
						// #endif
						if (this.content.length > 500) {
							this.getPage(1)
						}

						break;
					case "redPacketStatus":
						this.content.push(msg);
						this.upDateContent(msg);
						break;
				}
			},
			getPage(page) {
				let that = this;
				if (page == 1) {
					this.content = [];
				}
				getMorePage({
					page: page,
					apiKey: this.apiKey
				}).then(res => {
					if (res.code == 0) {
						let info = res.data;
						info.reverse();
						info = this.mergeDoubleMsg(info);
						info.forEach(msg => {
							// #ifdef H5
							let userAvatar = encodeURI(msg.userAvatarURL)
							userAvatar = btoa(userAvatar);
							msg.userAvatarURL = `${this.setting.ImageLoadHome+userAvatar}`
							// #endif
							if (this.isJSON(msg.content)) {
								msg.content = JSON.parse(msg.content)
								msg.isMoney = true;
							}
							this.filterMsg(msg)
						})
					}
				})
			},
			mergeDoubleMsg(contents) {
				contents.forEach((c, i) => {
					contents[i].dbUser = []
					if (!contents[i - 1]) return;
					if (this.isJSON(contents[i])) return;
					if (c.content != contents[i - 1].content) return;
					contents[i - 1].hide = true;
					contents[i].dbUser = contents[i - 1].dbUser || [];
					contents[i - 1].dbUser = undefined;
					contents[i].dbUser.splice(0, 0, contents[i - 1])
				});
				return contents.filter(c => !c.hide);
			},
			filterMsg(msg) {
				let that = this;
				msg.dbUser = msg.dbUser || [];
				if (msg.type == 'msg' && !this.isJSON(msg) && this.content.length >= 2 && msg.content == this.content[this
						.content.length - 1].content) {
					this.content[this.content.length - 1].dbUser = this.content[this.content.length - 1].dbUser || []
					this.content[this.content.length - 1].dbUser.push(msg)
				} else if (this.isJSON(msg.content)) {
					if (!this.isAppShow && this.setting.openAppPush) {
						// #ifdef APP-PLUS
						plus.push.createMessage(`收到红包，请在APP中查看！`);
						plus.nativeUI.toast(`收到红包，请在APP中查看！`, {
							verticalAlign: "top",
							align: "center",
							background: "#fff"
						});
						// #endif
					}
					msg.content = JSON.parse(msg.content)
					msg.isMoney = true;
					this.content.push(msg);
					this.upDateContent(msg);
					this.lastMsg = `${msg.userName}:[红包]`;
					this.lastMsgTime = this.fillterTime(msg.time);

				} else if (/<img [^>]*src=['"]([^'"]+)[^>]*>/gi.test(msg.content)) {
					// #ifdef H5
					let newSrcList = [];
					msg.content = msg.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(match, capture) {
						let url = encodeURI(capture);
						url = btoa(url);
						let imgUrl = `${ that.setting.ImageLoadHome + url}`;
						return `<img src="${imgUrl}" alt="图片表情" />`
					});
					// #endif
					this.content.push(msg);
					this.upDateContent(msg);
					this.lastMsgInfo(msg);
				} else {
					this.content.push(msg);
					this.upDateContent(msg);
					this.lastMsgInfo(msg);
				}
				if (!msg.isMoney) {
					this.secondMsg = this.firstMsg;
					this.firstMsg = msg;
					this.setFirstMsg(this.firstMsg);
					this.setSecondMsg(this.secondMsg);
				}

			},
			isJSON(str) {
				if (typeof str == 'string') {
					try {
						var obj = JSON.parse(str);
						if (typeof obj == 'object' && obj) {
							return true;
						} else {
							return false;
						}

					} catch (e) {
						return false;
					}
				}
			},
			getInfo() {
				getUserInfo(this.data.userName).then(res => {
					if (res.cardBg == "") {
						res.cardBg = "https://pwl.stackoverflow.wiki/2021/11/32ceecb7798ea1fa-82bd6ec7.jpg"
					}
					// #ifdef H5
					let bg = encodeURI(res.cardBg)
					bg = btoa(bg)
					let avatar = encodeURI(res.userAvatarURL)
					avatar = btoa(avatar)
					res.cardBg = "https://pwl.yuis.cc/GetImage?url=" + bg
					res.userAvatarURL = "https://pwl.yuis.cc/GetImage?url=" + avatar
					// #endif
					if (res.sysMetal) {
						res.sysMetal = JSON.parse(res.sysMetal)
					}
					this.setUserInfo(userInfo)
				})
			},
		}
	}
</script>

<style lang="scss">
	.newInfo {
		font-size: 12px;
		color: #888;
	}
</style>
