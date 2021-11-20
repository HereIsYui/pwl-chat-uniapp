<template>
	<view class="content">
		<scroll-view class="contentBox" scroll-y v-if="content.length > 0" :scroll-top="scrollTop">
			<view class="msgInfo" v-for="(item,index) in content" :key="index"
				:class="{isYou : (data.userName == item.userName ? true : false)}">
				<image v-if="data.userName != item.userName" :src='item.userAvatarURL' mode="widthFix"
					class="userAvatar"></image>
				<!-- <image src="../../static/logo.png" mode="widthFix" class="userAvatar"></image> -->
				<view class="msgBox">
					<template v-if="data.userName != item.userName">
						<view class="userName" v-if="item.userNickname">{{item.userNickname}}({{item.userName}})</view>
						<view class="userName" v-else>{{item.userName}}</view>
					</template>
					<view class="msgContent" v-if="item.isMoney" :data-type="item.oId" @click="getMoney(item.oId)">
						收到红包，点我抢红包</view>
					<view class="msgContent" v-else-if="item.userName == 'taozhiyu'">涛涛发言，自动屏蔽[]</view>
					<view class="msgContent" v-else v-html="item.content"></view>
				</view>
				<image v-if="data.userName == item.userName" :src='item.userAvatarURL' mode="widthFix"
					class="userAvatar"></image>
			</view>
			<view id="BottomView"></view>
		</scroll-view>
		<view class="sendBox">
			<textarea type="text" v-model="msg" class="chat-input" value="" placeholder="请输入" />
			<button type="default" class="sendBtn" @click="SendMsg()">发送</button>
		</view>
	</view>
</template>

<script>
	import APILIST from '../../utils/api.js'
	import UTIL from '../../utils/util.js'
	export default {
		data() {
			return {
				content: [],
				apiKey: "",
				data: {},
				msg: "",
				scrollTop: 0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0
				},
			}
		},
		onLoad() {
			this.initChat();
			this.apiKey = getApp().globalData.apiKey;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
		},
		created() {
			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - 70;
			this.getPage(1)
		},
		methods: {
			getPage(page) {
				let that = this;
				UTIL.flirt({
					url: APILIST.API.more,
					method: "GET",
					data: {
						page: page,
						apiKey: that.apiKey
					}
				}).then(res => {
					if (res.code == 0) {
						let info = res.data;
						let info2 = [];
						info.forEach(msg => {
							info2.unshift(msg)
						})
						info2.forEach(msg => {
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${msg.userAvatarURL}`
							that.filterMsg(msg)
						})
						that.scrollToBottom()
					}
				})
			},
			getMoney(oId) {
				let that = this;
				UTIL.flirt({
					url: APILIST.API.open,
					method: "POST",
					data: {
						oId: oId,
						apiKey: that.apiKey
					}
				}).then(res => {
					console.log(res)
				})
			},
			SendMsg() {
				let that = this;
				UTIL.flirt({
					url: APILIST.API.send,
					method: "POST",
					data: {
						content: that.msg,
						apiKey: that.apiKey
					}
				}).then(res => {
					that.msg = "";
				})
			},
			initChat() {
				let that = this;
				var socketTask = uni.connectSocket({
					url: APILIST.WS.channel,
					success: (res) => {}
				});
				socketTask.onMessage(function(res) {
					let msg = JSON.parse(res.data)
					switch (msg.type) {
						case "online": //在线人数
							uni.setNavigationBarTitle({
								title: `摸鱼派-聊天室(${msg.onlineChatCnt})`
							})
							break;
						case "revoke": //撤回
							// 撤回啥，客户端防撤回
							break;
						case "msg": //消息
							// let userAvatar = uni.getStorageSync(msg.userName);
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${msg.userAvatarURL}`
							that.filterMsg(msg)
							break;
						default:
							console.log(msg)
							break;
					}
				})
			},
			filterMsg(msg) {
				let that = this;
				// if (msg.content.replace(/\n/g, '').match(/>[^<]+?</g)) {
				if (this.isJSON(msg.content)) {
					msg.content = JSON.parse(msg.content)
					msg.isMoney = true;
					this.content.push(msg)
				} else if (/<img [^>]*src=['"]([^'"]+)[^>]*>/gi.test(msg.content)) {
					let newSrcList = [];
					msg.content = msg.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(match, capture) {
						return `<img style="max-width:60vw" src="https://pwl.yuis.cc/GetImage?url=${capture}" alt="图片表情" />`
					});
					this.content.push(msg)
				} else {
					this.content.push(msg)
				}
				this.scrollToBottom(); //创建后调用回到底部方法
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
			DownImageFile(msg, type) {
				return new Promise((resolve, reject) => {
					let url = "";
					type == 0 ? url = msg.userAvatarURL : url = msg.imageURL
					uni.downloadFile({
						url: url, //仅为示例，并非真实的资源
						header: {
							Referer: 'https://pwl.icu/'
						},
						dataType: 'jsonp',
						success: (res) => {
							if (res.statusCode === 200) {
								console.log('下载成功');
								if (type == 0) {
									uni.setStorageSync(msg.userName, res.tempFilePath);
								} else {
									uni.setStorageSync(msg.imageName, res.tempFilePath);
								}
								resolve(res.tempFilePath)
							}
						},
						fail(err) {
							console.log(err)
							reject(err)
						}
					});
				})
			},
			scrollToBottom: function() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.msgInfo').boundingClientRect();
				query.select('.contentBox').boundingClientRect();
				query.exec((res) => {
					that.style.mitemHeight = 0;
					res[0].forEach((rect) => {
						that.style.mitemHeight = that.style.mitemHeight + rect.height + 100;
					}) 
					setTimeout(() => {
						that.scrollTop = that.style.mitemHeight;
						console.log("scrollTop:" + that.scrollTop)
					}, 100)
				})
			}
		},
	}
</script>

<style scoped>
	.content {
		width: 100vw;
		height: 100%;
		background-color: #3b3e43;
	}

	.contentBox {
		height: calc(100vh - 100px);
	}

	.userAvatar {
		width: 40px;
		height: 40px !important;
		border-radius: 50%;
		margin-right: 5px;
	}

	.msgInfo {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		margin-top: 10px;
	}

	.msgInfo.isYou {
		justify-content: flex-end;
	}

	.contentBox {
		padding: 15px 10px 50px;
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
		margin-left: 5px;
	}

	.userName {
		font-size: 12px;
		color: #fff;
	}

	.msgContent {
		min-width: 10px;
		max-width: 70vw;
		margin: 5px 0;
		padding: 5px 10px;
		border-radius: 5px;
		background-color: #fff;
		overflow: hidden;
	}

	.msgContent p {
		min-width: 10px;
	}

	.sendBox {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 60px;
		background: #fff;
	}

	.sendBtn {
		position: absolute;
		right: 5vw;
		top: 50%;
		z-index: 10;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		transform: translateY(-50%);
		background-color: #60b044;
		color: #fff;
	}

	.chat-input {
		width: 100%;
		height: 100%;
		padding: 10px;
		padding-right: 80px;
		line-height: 30px;
		box-sizing: border-box;
	}
</style>
