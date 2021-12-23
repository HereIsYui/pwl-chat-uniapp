<template>
	<view class="content">
		<view class="contentBox" v-if="content.length > 0">
			<view class="msgInfo" v-for="(item,index) in content" :key="index"
				:class="{isYou : (data.userName == item.userName ? true : false)}">
				<template v-if="item.type != 'redPacketStatus'">
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
							<view v-if="item.isMoney" @click="getMoney(item.oId)">
								<view class="red-packet">
									<view class="rp-header"></view>
									<view class="rp-main">
										<view class="open">开</view>
										<view class="rp-msg">
											<view>{{item.content.msg}}</view>
											<view style="font-weight: bold;">{{defaultTitle[item.content.type]}}</view>
										</view>
									</view>
								</view>
							</view>
							<view class="msgContent" v-else>
								<!-- <mp-html @load="scrollToBottom()" container-style="MessageBox" @ready="scrollToBottom()" :copy-link="false" :content="item.content" :show-img-menu="false" @linktap="showLink" /> -->
									<view v-html="item.content"></view>
							</view>

						</view>
						<view class="humanNature"
							v-if="content.length > 2 && firstMsg.content == secondMsg.content && firstMsg.oId == item.oId && item.userName != data.userName"
							@click="SendMsg(item.content)">+1</view>
					</view>
					<image v-if="data.userName == item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar"></image>
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
			</view>
			<view class="faceBox" v-show="isShowFace">
				<view class="face-item" v-for="(item,index) in face" :key="index">
					<image class="face-item" :src="item.url" mode="aspectFit" @click="sendFace(item.preUrl)"></image>
				</view>
			</view>
			<button type="default" class="sendBtn" @touchend.prevent="SendMsg()">发送</button>
		</view>
		<!-- 右键菜单 -->
		<view class="longTap-list" :style="{top:clientY + 'px',left:clientX + 'px'}">
			<view class="longTap-item" @click="longTapEvent(0)">复读机</view>
			<view class="longTap-item" @click="longTapEvent(1)"
				v-if="data.userRole =='协警' ||data.userRole =='OP' || data.userRole =='管理员'">撤回</view>
			<view class="longTap-item" @click="longTapEvent(1)" v-else-if="data.userName == item.userName">撤回</view>
			<view class="longTap-item" @click="longTapEvent(2)">引用</view>
		</view>
		<!-- 红包 -->
		<view class="redPacketBg" v-show="showRedPacketData" @click.stop="showRedPacketData = false">
			<view class="redPacketbox">
				<view class="redPacketInfo">
					<view class="rpi-user">
						<image class="rpi-user-img" :src="redpacketData.info.userAvatarURL" mode="aspectFill"></image>
						{{redpacketData.info.userName}}'s的红包
					</view>
					<view class="rpi-recivers" v-if="redpacketData.recivers && redpacketData.recivers.length > 0">
						这个红包属于：{{redpacketData.recivers.join(",")}}</view>
					<view class="rpi-recivers" v-else>{{redpacketData.info.msg}}</view>
					<view class="rpi-msg">{{redpacketData.msg}}</view>
					<view class="rpi-count">总计：{{redpacketData.info.got}}/{{redpacketData.info.count}}</view>
				</view>
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
	</view>
</template>

<script>
	import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
	import {
		upload,
		getMorePage,
		openRedPacket,
		WS,
		send,
		faceList,
		getUserInfo,
		deleteMsg
	} from '../../utils/api.js'
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
					"recivers": ["Yui"],
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
				scrollTimeout: null
			}
		},
		onPageScroll(e) {
			// 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
			// this.scrollTop = e.scrollTop;
			this.scrollPower = false;
			this.clientY = -999;
			if(e.scrollTop < 50){
				console.log("loadPage~~")
			}
			this.isShowFace = false;
			clearTimeout(this.scrollTimeout);
			this.scrollTimeout = setTimeout(() => {
				this.scrollPower = true;
			}, 1000)
		},
		onLoad() {
			this.initChat();
			this.apiKey = getApp().globalData.apiKey;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			console.log(this.data)
		},
		created() {
			this.getPage(1);
			this.getFaceList();
			// this.getUserEmotions();
			let that = this;
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
				that.JoinChat = setInterval(() => {
					console.log("尝试重连WebSocket");
					that.initChat()
				}, 30000)
			});
			setInterval(() => {
				this.changeHuaji()
			}, 5000)
		},
		methods: {
			deleteMessage(oId) {
				deleteMsg({
					oId: oId,
					apiKey: this.apiKey
				}).then(res => {
					console.log(res)
				})
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
			},
			onInputFocus() {
				this.clientY = -999;
			},
			changeHuaji() {
				this.emojeSrc = `../../static/icon/huaji${Math.ceil(Math.random()*6)}.png`
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
						upload(res.tempFilePaths[0]).then(result => {
							if (result.statusCode == 200) {
								let urlList = JSON.parse(result.data);
								urlList = urlList.data.succMap;
								// console.log(urlList)
								for (let key in urlList) {
									that.msg = that.msg + ` ![图片表情](${urlList[key]})`
								}
								that.isSend = true;
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
							// #ifdef H5
							this.face.push({
								url: `https://pwl.yuis.cc/GetImage?url=${items}`,
								preUrl: item
							})
							// #endif
							// #ifdef APP-PLUS
							this.face.push({
								url: `https://pwl.yuis.cc/GetImage?url=${items}`,
								preUrl: item
							})
							// #endif
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
				this.isSend = true;
			},
			toggleFace() {
				this.isShowFace = !this.isShowFace;
			},
			showLink(e) {
				if (e.class && e.class == "name-at") {
					this.toUser(e["aria-label"])
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
				getMorePage({
					page: page,
					apiKey: this.apiKey
				}).then(res => {
					if (res.code == 0) {
						let info = res.data;
						info.reverse();
						info.forEach(msg => {
							// #ifdef H5
							let userAvatar = encodeURI(msg.userAvatarURL)
							userAvatar = btoa(userAvatar);
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${userAvatar}`
							// #endif
							this.filterMsg(msg)
						})
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
					console.log(res)
					this.redpacketData = res;

					let money = this.redpacketData.who.find(w => w.userName == this.data.userName);

					let specify = (this.redpacketData.recivers && this.redpacketData.recivers.length && this
						.redpacketData.recivers.indexOf(this.data.userName) >= 0)
					let msg = "";
					if (this.redpacketData.recivers && this.redpacketData.recivers.length && !specify) {
						msg = "会错意了"
					} else if (!money) {
						msg = "错过一个亿";
					} else {
						msg =
							money.userMoney == 0 ?
							"抢了个寂寞" :
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
				let that = this;
				let content = that.msg || msg;
				this.isShowFace = false;
				if (content && content.trim() == "") {
					return;
				}

				send({
					content: content,
					apiKey: that.apiKey
				}).then(res => {
					that.msg = "";
				})
			},
			initChat() {
				let that = this;
				var socketTask = uni.connectSocket({
					url: WS.channel,
					success: (res) => {
						console.log("WebSocket 连接成功！")
						clearInterval(that.JoinChat);
					},
					fail: (err) => {
						console.log("WebSocket 连接失败！")
					}
				});
				socketTask.onMessage(function(res) {
					let msg = JSON.parse(res.data)
					switch (msg.type) {
						case "online": //在线人数
							uni.setStorageSync('users', JSON.stringify(msg.users))
							// uni.setNavigationBarTitle({
							// 	title: `摸鱼派-聊天室(${msg.onlineChatCnt})`
							// })
							break;
						case "revoke": //撤回
							for (let i = 0; i < that.content.length; i++) {
								let c = that.content[i];
								if (c.oId != msg.oId) continue;
								that.content.splice(i, 1);
								break;
							}
							break;
						case "msg": //消息
							// #ifdef H5
							let userAvatar = encodeURI(msg.userAvatarURL)
							userAvatar = btoa(userAvatar);
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${userAvatar}`
							// #endif
							that.filterMsg(msg)
							if (that.content.length > 500) {
								that.getPage(1)
							}
							break;
						case "redPacketStatus":
							that.content.push(msg);
							break;
					}
				})
			},
			filterMsg(msg) {
				let that = this;
				if (this.isJSON(msg.content)) {
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
						let imgUrl = `https://pwl.yuis.cc/GetImage?url=${url}`;
						return `<img src="${imgUrl}" alt="图片表情" />`
					});
					// #endif
					this.content.push(msg)
					this.scrollToBottom()
				} else {
					this.content.push(msg)
					this.scrollToBottom()
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
			scrollToBottom: function() {
				if (this.scrollPower) {
					let query = wx.createSelectorQuery()
					query.select('.contentBox').boundingClientRect()
					query.selectViewport().scrollOffset()
					query.exec(res => {
						if (res[0]) {
							setTimeout(() => {
								wx.pageScrollTo({
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
<style scoped>
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
		padding: 5px 10px;
		border-radius: 5px;
		background-color: #fff;
		/* overflow: hidden; */
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
		width: 100vw;
		min-height: 100px;
		padding: 0 15px;
		background: #fff;
		box-sizing: border-box;
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
		line-height: 30px;
		box-sizing: border-box;
	}

	.red-packet {
		/* position: relative; */
		color: #fff;
		height: 200px;
		margin: 10px auto 0;
		width: 160px;
		border-radius: 15px;
		background: #c61a2f;
		box-sizing: border-box;
		box-shadow: 0 0 2px 2px #333;
		overflow: hidden;
	}

	.rp-header {
		/* position: absolute; */
		width: 160px;
		height: 200px;
		margin-top: -120px;
		border-radius: 100%;
		background: #f94151;
	}

	.rp-main {
		width: 100%;
		height: 100%;
		text-align: center;
	}

	.rp-msg {
		padding: 0 10px;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 12px;
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
		background: #fdf7eb;
	}

	.redPacketInfo {
		width: 100%;
		height: 130px;
		text-align: center;
		background: #f94151;
		padding: 15px;
		box-sizing: border-box;
	}

	.rpi-user {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}

	.rpi-user-img {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}

	.rpi-recivers {
		font-size: 14px;
	}

	.rpi-msg {
		font-size: 24px;
	}

	.rpi-count {
		font-size: 12px;
	}

	.redPacketList {
		width: 100%;
		height: calc(100% - 130px);
		overflow-y: scroll;
		overflow-x: hidden;
		padding: 15px;
		box-sizing: border-box;
	}

	.rpl-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 5px 0;
		padding: 5px;
		background: #fff;
	}

	.rpl-item:not(:last-child) {
		border-bottom: 1px dotted #999;
	}

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
		display: inline-block;
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
		color: #faa;
	}

	.isNeg {
		border-color: #D5D5D5;
		color: #000;
	}

	.rpl-money {
		width: 25%;
		font-size: 12px;
		text-align: right;
	}

	.faceBox {
		display: flex;
		justify-content: flex-start;
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
</style>
