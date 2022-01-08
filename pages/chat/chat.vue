<template>
	<view class="content">
		<!-- WebSocket断开提醒 -->
		<view class="SocketCloseMsg" v-if="isSocketClose">
			WebSocket已断开：{{JoinChatTime}}s后重新连接 <text class="textLink" @click="initChat()">点击重连</text>
		</view>
		<view class="contentBox" v-if="content.length > 0">
			<view class="msgInfo" v-for="(item,index) in content"
				:key="(item.type || 'msg') + '_' + item.oId + (item.whoGot || '')"
				:class="{isYou : (data.userName == item.userName ? true : false)}">
				<template v-if="item.type != 'redPacketStatus' && !item.hide">
					<image v-if="data.userName != item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar" @longpress="atThis(item.userName)" @click="toUser(item.userName)"></image>
					<view class="MsgDetailBox" @longpress="longpress" :data-oid="item.oId" :data-msg="item.content"
						:data-username="item.userName">
						<view class="msgBox">
							<template v-if="data.userName != item.userName">
								<view class="userName" v-if="item.userNickname">{{item.userNickname}}({{item.userName}})
								</view>
								<view class="userName" v-else>{{item.userName}}</view>
							</template>
							<view v-if="item.isMoney" @click="getMoney(item.oId)" :class="setting.rpSkin == 'WX' ? 'wx-rp' : 'qq-rp'">
								<view class="red-packet">
									<view class="rp-header"></view>
									<view class="rp-main">
										<view class="open">开</view>
										<view class="rp-msg">
											<view class="rp-msg-inner">
												<image class="rp-icon-wx" src="../../static/icon/hongbao.png"
													mode="widthFix"></image>
												<view>{{item.content.msg}}</view>
											</view>
											<view class="rp-type" style="font-weight: bold;">
												{{defaultTitle[item.content.type]}}
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="msgContent" v-else>
								<mp-html @load="scrollToBottom()" container-style="MessageBox" @ready="scrollToBottom()"
									:copy-link="false" :content="item.content" :show-img-menu="false"
									@linktap="showLink" />
							</view>
							<view class="db-users" v-if="item.dbUser.length">
								<view class="db-user" v-for="db in item.dbUser" :key="db.oId">
									<image class="db-avatar" :src="db.userAvatarURL"></image>
								</view>
								<view class="db-word">也这么说</view>
							</view>

						</view>
						<view class="humanNature"
							v-if="content.length > 2 && firstMsg.content == secondMsg.content && firstMsg.oId == item.oId && item.userName != data.userName"
							@click="SendMsg(item.content)">+1</view>
					</view>
					<image v-if="data.userName == item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar" @click="toUser(item.userName)"></image>
				</template>
				<template v-if="item.type == 'redPacketStatus'">
					<view class="redPacketinfo">{{item.whoGot}} 抢到了 {{item.whoGive}} 的 <view @click="getMoney(item.oId)"
							style="color:#f94151">红包</view>
						({{item.got}}/{{item.count}})</view>
				</template>
			</view>
			<view id="BottomView" style="height: 50px;"></view>
		</view>
		<!-- 发送栏 -->
		<view class="sendBox">
			<view class="livenessLine" :style="{width:liveness+'%'}"></view>
			<!-- 保留参数 等uniapp更新 -->
			<!-- confirm-type="send" confirm-hold="true" @confirm="SendMsg()"  -->
			<textarea type="text" v-model="msg" class="chat-input" :focus="isSend" @focus="onInputFocus()"
				@blur="noSend()" value="" placeholder="请输入" />
			<view class="menuBox">
				<view class="iconBtn" @click="toRedPacket()">
					<image src="../../static/icon/hongbao.png" mode="heightFix"></image>
				</view>
				<view class="iconBtn" @click="toggleFace()">
					<image :src="emojeSrc" mode="heightFix"></image>
				</view>
				<view class="iconBtn" @click="getImage()">
					<image src="../../static/icon/tupian.png" mode="heightFix"></image>
				</view>
				<view class="iconBtn" @click="toggleVoice()">
					<image src="../../static/icon/yuyin.png" mode="heightFix"></image>
				</view>
			</view>
			<!-- 表情包 -->
			<view class="faceBox" v-show="isShowFace">
				<view class="face-item" v-for="(item,index) in face" :key="index">
					<image class="face-item" :src="item.url" mode="aspectFit" @click="sendFace(item.preUrl)"></image>
				</view>
			</view>
			<!-- 语音 -->
			<view class="faceBox" v-show="isSendVoice">
				<view class="voice-btn">
					<view class="voice-time">{{voiceTime}}s</view>
					<image class="voice-img" src="../../static/icon/yuyinbtn.png" mode="aspectFit"
						@touchstart="toVoice(0)" @touchend="toVoice(1)"></image>
				</view>
			</view>
			<button type="default" class="sendBtn" @touchend.prevent="SendMsg()">发送</button>
		</view>
		<!-- 右键菜单 -->
		<view class="longTap-list" :style="{top:clientY + 'px',left:clientX + 'px'}">
			<view class="longTap-item" @click="longTapEvent(0)">复读机</view>
			<view class="longTap-item" @click="longTapEvent(1)" v-if="['纪律委员', 'OP','管理员'].indexOf(data.userRole) >= 0">
				撤回</view>
			<view class="longTap-item" @click="longTapEvent(1)" v-else-if="data.userName == longData.userName">撤回</view>
			<view class="longTap-item" @click="longTapEvent(2)">引用</view>
		</view>
		<!-- 红包 -->
		<view class="redPacketBg" v-show="showRedPacketData" @click.stop="showRedPacketData = false">
			<view class="redPacketbox">
				<view class="rpiInfo">
					<image class="rpi-user-img" :src="redpacketData.info.userAvatarURL" mode="aspectFill"></image>
					<view>
						<view class="rpi-user">{{redpacketData.info.userName}}'s的红包</view>
						<view class="rpi-recivers"
							v-if="redpacketData.recivers && redpacketData.recivers.length > 0 && redpacketData.recivers[0] != ''">
							这个红包属于：{{redpacketData.recivers.join(",")}}</view>
						<view class="rpi-recivers" v-else>{{redpacketData.info.msg}}</view>
						<view class="rpi-msg">{{redpacketData.msg}}</view>
					</view>
				</view>
				<view class="rpi-count">已领取：{{redpacketData.info.got}}/{{redpacketData.info.count}}个</view>
				<view class="redPacketList">
					<view class="rpl-item" v-for="(item,index) in redpacketData.who" :key="index">
						<image class="rpl-img" :src="item.avatar" mode="aspectFill"></image>
						<view class="rpl-info">
							<view class="rpl-name">{{item.userName}}</view>
							<view class="rpl-tag isMax" v-if="item.isMax">来自老王的认可</view>
							<view class="rpl-tag is0" v-if="item.is0">0溢事件</view>
							<view class="rpl-tag isNeg" v-if="item.isNeg">抢红包有风险</view>
							<view class="rpl-time">{{item.time}}</view>
						</view>
						<view class="rpl-money">{{item.userMoney}} 积分</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 回到最新消息 -->
		<view class="backTobottom" v-if="isShowToBottom"
			:style="{bottom:(isShowFace || isSendVoice) ? '302px' : '102px'}" @click="toBottom()">
			查看最新消息
		</view>

	</view>
</template>

<script>
	import mpHtml from '../../components/mp-html/mp-html'
	import permision from "../../utils/permission.js"
	import {
		upload,
		getMorePage,
		openRedPacket,
		WS,
		send,
		faceList,
		getUserInfo,
		deleteMsg,
		getLiveness
	} from '../../utils/api.js'
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		components: {
			mpHtml
		},
		data() {
			return {
				content: [],
				apiKey: "",
				data: {},
				msg: "",
				firstMsg: null,
				secondMsg: null,
				emojeSrc: '../../static/icon/huaji1.png',
				redpacketData: {
					"who": [],
					"info": {
						"msg": "试试看，这是给你的红包吗？",
						"userAvatarURL": "",
						"count": 1,
						"userName": "Yui",
						"got": 0
					}
				},
				redpacketTitle: "",
				showRedPacketData: false,
				JoinChat: null,
				JoinChatTime: 30,
				scrollPower: true,
				isShowFace: false,
				face: [],
				isSend: false,
				defaultTitle: {
					random: "拼手气红包",
					average: "普通红包",
					specify: "专属红包",
					heartbeat: "心跳红包"
				},
				clientY: -999,
				clientX: 0,
				longData: {
					msg: "",
					oId: "",
					userName: "",
				},
				nowPage: 1,
				isSending: false,
				isHistory: false,
				isSendVoice: false,
				isShowToBottom: false,
				isSocketClose: false,
				scrollTimeout: null,
				setting: {
					JoinChatTime: 30,
					ImageLoadHome: "https://pwl.yuis.cc/GetImage?url=",
					openAppPush:true,
					rpSkin:"WX"
				},
				scrollInfo: {
					oldTop: 99999
				},
				liveness: 0,
				voicePath: "",
				voiceTimeout: null,
				voiceTime: 0,
				isVoice: false,
				isAppShow:true,
			}
		},
		onPullDownRefresh() {
			console.log("loadPage~~")
			clearTimeout(this.scrollTimeout);
			this.scrollPower = false;
			this.getHistoryMsg()
		},
		onReachBottom() {
			this.scrollPower = true;
			this.isShowToBottom = false;
		},
		onNavigationBarButtonTap(obj) {
			if (obj.type == "menu") {
				// 去设置页
				uni.navigateTo({
					url: './setting?apiKey=' + this.apiKey,
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
		onPageScroll(e) {
			this.clientY = -999;
			this.isSend = false;
			if (e.scrollTop < this.scrollInfo.oldTop) {
				this.scrollPower = false;
			}
			this.scrollInfo.oldTop = e.scrollTop;
		},
		onShow(){
			// #ifdef APP-PLUS
			plus.push.clear();
			// #endif
			this.isAppShow = true;
			let setting = uni.getStorageSync('setting');
			try {
				setting = JSON.parse(setting);
				this.setting = setting
			} catch (e) {
				//TODO handle the exception
			}
		},
		onHide(){
			this.isAppShow = false;
		},
		onLoad() {
			this.apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			let setting = uni.getStorageSync('setting');
			try {
				setting = JSON.parse(setting);
				this.setting = setting;
				console.log(setting)
			} catch (e) {
				//TODO handle the exception
			}
			if (!this.apiKey || !this.data) {
				uni.reLaunch({
					url: '/pages/index/index'
				})
				return;
			}
			this.getPage(1);
			this.getFaceList();
			this.initChat();
			// this.getUserEmotions();
			let that = this;
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
				that.isSocketClose = true;
				that.JoinChat = setInterval(() => {
					that.JoinChatTime--;
					console.log(`${that.JoinChatTime}s后尝试重连WebSocket`);
					if (that.JoinChatTime == 0) {
						that.initChat()
						that.JoinChatTime = that.setting.JoinChatTime || 30;
					}
				}, 1000)
			});
			recorderManager.onStop(function(res) {
				that.voicePath = res.tempFilePath;
				that.voiceTime = 0;
				that.isVoice = false;
				uni.showLoading({
					title: '发送中...'
				})
				upload(res.tempFilePath).then(result => {
					uni.hideLoading()
					if (result.statusCode == 200) {
						let urlList = JSON.parse(result.data);
						urlList = urlList.data.succMap;
						console.log(urlList)
						for (let key in urlList) {
							that.msg =
								` <audio controls> <source src="${urlList[key]}?key=userVoice" type="audio/mpeg"></audio>`
						}
						that.isSend = true;
					} else {
						uni.showToast({
							title: "语音上传失败！",
							icon: "none"
						})
					}
				})
			});
			this.emojeSrc = `../../static/icon/huaji${Math.ceil(Math.random()*6)}.png`
			uni.onKeyboardHeightChange(res => {
				if (res.height == 0) {
					this.isShowFace = false;
					this.isSend = false;
					this.isSendVoice = false;
				}
			})
			setTimeout(() => {
				this.getUserLiveness();
			}, Math.random() * 30000 + 30000)
		},
		methods: {
			toVoice(index) {
				if (index == 0) {
					permision.requestAndroidPermission("android.permission.RECORD_AUDIO").then(viocePower => {
						if (viocePower == 1) {
							if (!this.isVoice) {
								console.log("录音开始")
								this.isVoice = true;
								recorderManager.start();
								this.voiceTimeout = setInterval(() => {
									this.voiceTime = this.voiceTime + 1;
									if (this.voiceTime > 14) {
										recorderManager.stop();
										clearInterval(this.voiceTimeout)
									}
								}, 1000)
							}
						} else {
							uni.showToast({
								title: "没有麦克风权限",
								icon: "none"
							})
						}
					})
				} else {
					console.log("录音结束")
					clearInterval(this.voiceTimeout)
					recorderManager.stop();
				}
			},
			getUserLiveness() {
				let liveness = uni.getStorageSync("liveness");
				if (liveness) {
					liveness = JSON.parse(liveness)
					if (new Date().getTime() - liveness.time < 1 * 60 * 1000) {
						this.liveness = liveness.liveness;
						return;
					}
				}
				getLiveness({
					apiKey: this.apiKey
				}).then(res => {
					this.liveness = res.liveness;
					uni.setStorageSync("liveness", JSON.stringify({
						liveness: res.liveness,
						time: new Date().getTime()
					}))
				})
			},
			deleteMessage(oId) {
				deleteMsg({
					oId: oId,
					apiKey: this.apiKey
				}).then(res => {
					console.log(res)
				})
			},
			getHistoryMsg() {
				if (this.isHistory) {
					return;
				}
				this.isHistory = true;
				this.nowPage = this.nowPage + 1;
				getMorePage({
					page: this.nowPage,
					apiKey: this.apiKey
				}).then(res => {
					this.isHistory = false;
					uni.stopPullDownRefresh()
					if (res.code == 0) {
						let info = res.data;
						info.reverse();
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
							this.content.forEach(items => {
								if (items.oId == msg.oId) {
									msg.hide = true
								}
							})

						})
						info = this.mergeDoubleMsg(info)
						this.content = info.concat(this.content)
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
			longTapEvent(index) {
				this.clientY = -999;
				if (index == 0) {
					this.SendMsg(this.longData.msg)
				} else if (index == 1) {
					this.deleteMessage(this.longData.oId)
				} else {
					this.msg = `##### 引用 @${this.longData.userName} \n  > ${this.longData.msg} \n\n` + this.msg;
					this.isSend = true;
				}
			},
			longpress(e) {
				this.clientY = e.changedTouches[0].clientY - 50;
				this.clientX = e.changedTouches[0].clientX - 50;
				this.longData.msg = e.currentTarget.dataset.msg;
				this.longData.oId = e.currentTarget.dataset.oid;
				this.longData.userName = e.currentTarget.dataset.username;
			},
			atThis(user) {
				this.msg = `@${user} :` + this.msg;
				setTimeout(() => {
					this.isSend = true;
				}, 100)
			},
			noSend() {
				this.isSend = false;
				this.isShowFace = false;
				this.isSendVoice = false;
			},
			onInputFocus() {
				this.clientY = -999;
				this.scrollPower = true;
				this.scrollToBottom()
			},
			keyboardChange(e) {
				if (e.detail.detail == 0) {
					this.isSend = false;
					this.isShowFace = false;
					this.isSendVoice = false;
				}
			},
			toRedPacket() {
				uni.navigateTo({
					url: './redpacket?apiKey=' + this.apiKey,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			getImage() {
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						uni.showLoading({
							title: '上传中...'
						})
						upload(res.tempFilePaths[0]).then(result => {
							uni.hideLoading()
							if (result.statusCode == 200) {
								let urlList = JSON.parse(result.data);
								urlList = urlList.data.succMap;
								// console.log(urlList)
								for (let key in urlList) {
									that.msg = that.msg + ` ![图片表情](${urlList[key]})`
								}
								that.isSend = true;
							} else {
								uni.showToast({
									title: "图片上传失败！",
									icon: "none"
								})
							}
						})
					}
				});

			},
			getFaceList() {
				faceList({
					gameId: 'emojis',
					apiKey: this.apiKey
				}).then(res => {
					if (res.code == 0) {
						let list = JSON.parse(res.data);
						list.forEach(item => {
							let items = encodeURI(item)
							items = btoa(items);
							this.face.push({
								url: `${this.setting.ImageLoadHome+items}`,
								preUrl: item
							})
						})
					} else {
						console.log("===:error:===")
						console.log(res)
					}
				})
			},
			sendFace(url) {
				this.msg = this.msg + ` ![图片表情](${url})`;
				this.isShowFace = false;
				this.isSendVoice = false;
				this.isSend = true;
			},
			toggleFace() {
				this.isShowFace = !this.isShowFace;
			},
			toggleVoice() {
				this.isSendVoice = !this.isSendVoice;
			},
			showLink(e) {
				let linkInfo = e;
				// console.log(linkInfo)
				if (linkInfo.class && linkInfo.class == "name-at") {
					this.toUser(e["aria-label"])
				}
				if (linkInfo.target && linkInfo.target == "_blank") {
					// #ifdef APP-PLUS 
					plus.runtime.openURL(linkInfo.href);
					// #endif
					// #ifdef H5
					window.open(linkInfo.href)
					// #endif
				}
			},
			toUser(userName) {
				uni.navigateTo({
					url: "./userInfo?user=" + userName,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			getPage(page) {
				let that = this;
				if (page == 1) {
					this.content = [];
				}
				this.scrollPower = false;
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
						this.scrollPower = true;
						this.scrollToBottom()
					}
				})
			},
			getMoney(oId) {
				let that = this;
				openRedPacket({
					oId: oId,
					apiKey: that.apiKey
				}).then(res => {
					// console.log(res)
					this.redpacketData = res;

					let money = this.redpacketData.who.find(w => w.userName == this.data.userName);

					let specify = (this.redpacketData.recivers && this.redpacketData.recivers.length && this
						.redpacketData.recivers.indexOf(this.data.userName) >= 0)
					let msg = "";
					if (this.redpacketData.recivers && this.redpacketData.recivers.length && !specify && this
						.redpacketData.recivers[0] != "") {
						msg = "会错意了"
					} else if (!money) {
						msg = "错过一个亿";
					} else {
						msg =
							money.userMoney == 0 ?
							"抢了个寂寞" :
							money.userMoney < 0 ?
							"被反抢了吧~" :
							`${money.userMoney} 积分`;
					}
					let moneyList = this.redpacketData.who;
					let max = 0;
					let maxIndex = 0;
					moneyList.forEach((item, index) => {
						if (item.userMoney >= max) {
							max = item.userMoney;
							maxIndex = index;
						}
						if (item.userMoney == 0) {
							moneyList[index].is0 = true;
						}
						if (item.userMoney < 0) {
							moneyList[index].isNeg = true;
						}
					})
					if (this.redpacketData.info.got == this.redpacketData.info.count) {
						moneyList[maxIndex].isMax = true;
					}
					this.redpacketData.who = moneyList;
					this.redpacketData.msg = msg;
					this.showRedPacketData = true;
				})
			},
			SendMsg(msg) {
				if (this.isSending) {
					return;
				}
				let that = this;
				let content = that.msg || msg;
				this.isShowFace = false;
				this.isSendVoice = false;
				this.isSending = true;
				if (content && content.trim() == "") {
					return;
				}
				send({
					content: content,
					apiKey: that.apiKey
				}).then(res => {
					that.msg = "";
					that.isSending = false;
					that.scrollPower = true;
				})
			},
			initChat() {
				let that = this;
				var socketTask = uni.connectSocket({
					url: WS.channel,
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
						uni.setNavigationBarTitle({
							title: `摸鱼派-聊天室(${msg.onlineChatCnt})`
						})
						break;
					case "revoke": //撤回
						for (let i = 0; i < this.content.length; i++) {
							let c = this.content[i];
							if (c.oId != msg.oId) continue;
							this.content.splice(i, 1);
							break;
						}
						break;
					case "msg": //消息
						if (!this.scrollPower && !this.isShowToBottom) {
							this.isShowToBottom = true;
						}
						// #ifdef H5
						let userAvatar = encodeURI(msg.userAvatarURL)
						userAvatar = btoa(userAvatar);
						msg.userAvatarURL = `${this.setting.ImageLoadHome+userAvatar}`
						// #endif
						this.filterMsg(msg)
						// #ifdef APP-PLUS
						// 测试app推送@
						if (msg.content.indexOf(`aria-label="${this.data.userName}"`) >= 0 && !this.isAppShow && this.setting.openAppPush) {
							plus.push.createMessage(`${msg.userName}@你了`);
							plus.nativeUI.toast(`${msg.userName}@你了`,{
								verticalAlign:"top",
								align:"center",
								background:"#fff"
							});
						}
						// #endif
						if (this.content.length > 500) {
							this.getPage(1)
						}

						break;
					case "redPacketStatus":
						this.content.push(msg);
						break;
				}
			},
			filterMsg(msg) {
				let that = this;
				msg.dbUser = msg.dbUser || [];
				// console.log(this.content.length >= 2 && msg.content == this.content[this.content.length - 1].content)
				if (msg.type == 'msg' && !this.isJSON(msg) && this.content.length >= 2 && msg.content == this.content[this
						.content.length - 1].content) {
					this.content[this.content.length - 1].dbUser = this.content[this.content.length - 1].dbUser || []
					this.content[this.content.length - 1].dbUser.push(msg)
				} else if (this.isJSON(msg.content)) {
					if (!this.isAppShow && this.setting.openAppPush) {
						plus.push.createMessage(`收到红包，请在APP中查看！`);
						plus.nativeUI.toast(`收到红包，请在APP中查看！`,{
							verticalAlign:"top",
							align:"center",
							background:"#fff"
						});
					}
					msg.content = JSON.parse(msg.content)
					msg.isMoney = true;
					this.content.push(msg)
					this.scrollToBottom()

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
					this.content.push(msg)
				} else {
					this.content.push(msg)
				}
				if (!msg.isMoney) {
					this.secondMsg = this.firstMsg;
					this.firstMsg = msg;
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
			toBottom() {
				this.scrollPower = true;
				this.isShowToBottom = false;
				this.scrollToBottom();
			},
			scrollToBottom() {
				if (this.scrollPower) {
					let query = uni.createSelectorQuery()
					query.select('.contentBox').boundingClientRect()
					query.selectViewport().scrollOffset()
					query.exec(res => {
						if (res[0]) {
							setTimeout(() => {
								uni.pageScrollTo({
									scrollTop: res[0].height,
									duration: 100
								})
							}, 100)
						}
					})
				}
			}
		},
	}
</script>
<style lang="scss" scoped>
	.content {
		width: 100vw;
		height: 100%;
		background-color: #3b3e43;
	}

	.userAvatar {
		width: 40px;
		height: 40px !important;
		border-radius: 50%;
		margin-right: 10px;
		margin-top: 10px;
	}

	.msgInfo {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		margin-top: 10px;
	}

	.msgInfo.isYou {
		justify-content: flex-end;
	}

	.MsgDetailBox {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.contentBox {
		min-height: 100%;
		padding: 15px 10px 80px;
		box-sizing: border-box;
	}

	.msgBox {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}

	.isYou .msgBox {
		align-items: flex-end;
	}

	.isYou .userAvatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 10px;
		margin-top: 0;
	}

	.userName {
		font-size: 12px;
		color: #fff;
	}

	.msgContent {
		position: relative;
		min-width: 10px;
		max-width: 60vw;
		min-height: 15px;
		margin: 5px 0;
		padding: 8px 10px;
		border-radius: 5px;
		background-color: #fff;
		word-break: break-word;
	}

	.msgContent::before {
		content: "";
		position: absolute;
		left: -10px;
		top: 5px;
		width: 0;
		height: 0;
		border-right: 5px solid #fff;
		border-top: 5px solid rgba(0, 0, 0, 0);
		border-bottom: 5px solid rgba(0, 0, 0, 0);
		border-left: 5px solid rgba(0, 0, 0, 0);
	}

	.isYou .msgContent {
		background: #9eea6a;
	}

	.isYou .msgContent::before {
		content: "";
		position: absolute;
		right: -10px;
		left: auto;
		top: 5px;
		width: 0;
		height: 0;
		border-right: 5px solid rgba(0, 0, 0, 0);
		border-top: 5px solid rgba(0, 0, 0, 0);
		border-bottom: 5px solid rgba(0, 0, 0, 0);
		border-left: 5px solid #9eea6a;
	}

	.msgContent p {
		min-width: 10px;
	}

	.sendBox {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1000;
		width: 100vw;
		min-height: 100px;
		padding: 0 15px;
		background: #fff;
		box-sizing: border-box;
	}

	.livenessLine {
		position: absolute;
		top: -1px;
		left: 0;
		width: 0;
		height: 2px;
		background: red;
	}

	.menuBox {
		display: flex;
		height: 42px;
		padding: 5px 0;
		border-top: 1px solid #F8F8F8;
		box-sizing: border-box;
	}

	.sendBtn {
		position: absolute;
		right: 5vw;
		top: 10px;
		z-index: 10;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		background-color: #60b044;
		color: #fff;
	}

	.iconBtn {
		margin: 0 5px;
	}

	.iconBtn image {
		height: 32px;
	}

	.chat-input {
		width: 100%;
		height: calc(100% - 42px);
		padding: 10px;
		padding-right: 60px;
		line-height: 30px;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.qq-rp {
		.red-packet {
			color: #fff;
			height: 200px;
			margin: 10px auto 0;
			width: 160px;
			border-radius: 15px;
			background: #eb4454;
			box-sizing: border-box;
			box-shadow: 0 0 2px 2px #333;
			overflow: hidden;
		}

		.rp-header {
			width: 160px;
			height: 200px;
			margin-top: -120px;
			border-radius: 100%;
			background: #d13c4a;
		}

		.rp-main {
			width: 100%;
			height: 100%;
			text-align: center;
		}

		.red-packet .open {
			width: 40px;
			height: 40px;
			color: #fff;
			line-height: 40px;
			font-size: 14px;
			margin: -20px auto 20px;
			background: #ffb03a;
			border-radius: 100%;
		}

		.rp-msg {
			padding: 0 10px;
			box-sizing: border-box;

			font-size: 12px;

			.rp-icon-wx {
				display: none;
			}

			.rp-msg-inner {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

	}

	.wx-rp {
		.red-packet {
			color: #fff;
			height: 92px;
			margin: 10px auto 0;
			width: 220px;
			border-radius: 5px;
			background: #fa9c3e;
			box-sizing: border-box;
			box-shadow: 0 0 2px 2px #333;
			// overflow: hidden;
		}

		.red-packet .open,
		.rp-header {
			display: none;
		}

		.rp-main {
			width: 100%;
			height: 100%;
		}

		.rp-msg {
			font-size: 12px;

			.rp-msg-inner {
				position: relative;
				display: flex;
				padding: 10px;
				height: 70px;
				font-size: 16px;
				box-sizing: border-box;
				border: 1px solid #fa9c3e;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;

				.rp-icon-wx {
					width: 30px;
				}
			}

			.rp-msg-inner::before {
				content: "";
				position: absolute;
				left: -10px;
				top: 10px;
				width: 0;
				height: 0;
				border-right: 5px solid #fa9c3e;
				border-top: 5px solid rgba(0, 0, 0, 0);
				border-bottom: 5px solid rgba(0, 0, 0, 0);
				border-left: 5px solid rgba(0, 0, 0, 0);
			}

			.rp-type {
				padding: 0 10px;
				height: 22px;
				line-height: 22px;
				color: #666;
				box-sizing: border-box;
				background-color: #fff;
				border: 1px solid #f8f8f8;
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 5px;
			}
		}

	}

	.isYou {
		.wx-rp {
			.rp-msg {
				.rp-msg-inner::before {
					content: "";
					position: absolute;
					left: auto;
					right: -10px;
					top: 10px;
					width: 0;
					height: 0;
					border-right: 5px solid rgba(0, 0, 0, 0);
					border-top: 5px solid rgba(0, 0, 0, 0);
					border-bottom: 5px solid rgba(0, 0, 0, 0);
					border-left: 5px solid #fa9c3e;
				}
			}
		}
	}

	.redPacketinfo {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 12px;
		width: 100%;
	}

	.humanNature {
		width: 35px;
		height: 35px;
		margin-left: 5px;
		text-align: center;
		line-height: 35px;
		font-size: 12px;
		font-weight: bold;
		color: #000;
		background: #fff;
		border-radius: 50%;
		transform: translateY(-20%);
	}

	.redPacketBg {
		position: fixed;
		z-index: 250;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}

	.redPacketbox {
		position: absolute;
		top: 8vh;
		left: 50%;
		width: 80vw;
		height: 70vh;
		box-sizing: border-box;
		transform: translateX(-50%);
		background: #fff;

		.rpiInfo {
			display: flex;
			width: 100%;
			height: 130px;
			background: #d13d4b;
			padding: 15px;
			box-sizing: border-box;

			.rpi-user-img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				margin-right: 10px;
			}

			.rpi-user {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 14px;
			}

			.rpi-recivers {
				font-size: 14px;
			}

			.rpi-msg {
				font-size: 24px;
			}
		}

		.rpi-count {
			position: relative;
			width: 100%;
			font-size: 14px;
			padding: 5px 10px;
			box-sizing: border-box;
			background-color: #ecedee;
		}

		.rpi-count::before {
			content: "";
			position: absolute;
			left: 20px;
			top: -20px;
			width: 0;
			height: 0;
			border-right: 10px solid rgba(0, 0, 0, 0);
			border-top: 10px solid rgba(0, 0, 0, 0);
			border-bottom: 10px solid #ecedee;
			border-left: 10px solid rgba(0, 0, 0, 0);
		}

		.redPacketList {
			width: 100%;
			height: calc(100% - 160px);
			overflow-y: scroll;
			overflow-x: hidden;
			padding: 15px;
			box-sizing: border-box;

			.rpl-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 5px 0;
				padding: 5px;
				background: #fff;

				.rpl-img {
					width: 38px;
					height: 38px;
					border-radius: 5px;
				}

				.rpl-time {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.38);
				}

				.rpl-info {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					width: 65%;
					text-align: left;
					margin-left: 5px;
				}

				.rpl-tag {
					display: inline-table;
					padding: 0 5px;
					line-height: 20px;
					height: 20px;
					max-width: 95px;
					text-align: center;
					font-size: 12px;
					border-radius: 5px;
					border: 1px solid #fff;
				}

				.isMax {
					background-color: #60b044;
					border-color: #5ca941;
					color: #fff;
				}

				.is0 {
					border-color: #D5D5D5;
					background-color: rgba(255, 255, 255, .2);
					color: #faa;
				}

				.isNeg {
					border-color: #D5D5D5;
					background-color: rgba(255, 255, 255, .2);
					color: #000;
				}

				.rpl-money {
					width: 25%;
					font-size: 12px;
					text-align: right;
				}
			}

			.rpl-item:not(:last-child) {
				border-bottom: 1px dotted #999;
			}
		}
	}



	.faceBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		height: 200px;
		overflow-y: scroll;
	}

	.face-item {
		min-width: 50px;
		max-width: 50px;
		min-height: 50px;
		max-height: 50px;
		margin: 5px;
	}

	.voice-btn {
		width: 70px;
		height: 100px;
		margin: 0 auto;
	}

	.voice-time {
		text-align: center;
	}

	.voice-img {
		width: 70px;
		height: 70px;

	}

	.longTap-list {
		position: fixed;
		left: 50%;
		top: -25vw;
		z-index: 100;
		display: flex;
		padding: 10px;
		min-width: 100px;
		height: 20px;
		font-size: 12px;
		background: #fff;
		box-shadow: 0 2px 2px #6c6c6c;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	.longTap-item {
		margin: 0 5px;
		height: 20px;
		line-height: 20px;
	}

	.backTobottom {
		position: fixed;
		z-index: 1001;
		bottom: 100px;
		right: 15px;
		width: 100px;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		color: #4CD964;
		background: #fff;
		border-bottom: 1px solid #333333;
	}

	.SocketCloseMsg {
		position: fixed;
		left: 0;
		z-index: 1001;
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		color: #FFFFFF;
		background: #f56c6c;
	}

	.textLink {
		text-decoration: underline;
		margin-left: 5px;
	}

	.db-users {
		padding: 5px 0 5px 10px;
		max-width: 70vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;

		.db-user {
			margin-left: -5px;
		}

		.db-avatar {
			width: 25px;
			height: 25px;
			border-radius: 50%;
		}

		.db-word {
			font-size: 10px;
			color: #fff;
			display: inline-block;
			padding-left: 5px;
		}
	}
</style>
<style>
	.contentBox>>>a {
		color: #6a737d;
		text-decoration: none !important;
		border-bottom: 1px dashed #6a737d;
	}

	.contentBox>>>img {
		max-width: 55vw;
	}

	.contentBox>>>blockquote {
		color: #6a737d;
		border-left: .25em solid #eaecef;
		padding-left: 1em;
		margin: 5px 0;
	}

	.contentBox>>>ol {
		padding-left: 20px;
	}
</style>
