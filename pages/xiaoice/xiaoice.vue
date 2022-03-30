<template>
	<view class="content">
		<view class="contentBox" v-if="content.length > 0">
			<view class="msgInfo" v-for="(item,index) in content"
				:key="(item.type || 'msg') + '_' + item.oId + (item.whoGot || '')"
				:class="{isYou : (data.userName == item.userName ? true : false)}">
				<template v-if="item.type != 'redPacketStatus' && !item.hide">
					<image v-if="data.userName != item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar" @click="toUser(item.userName)"></image>
					<view class="MsgDetailBox" :data-oid="item.oId" :data-msg="item.content"
						:data-username="item.userName">
						<view class="msgBox">
							<template v-if="data.userName != item.userName">
								<view class="userName" v-if="item.userNickname">{{item.userNickname}}({{item.userName}})
								</view>
								<view class="userName" v-else>{{item.userName}}</view>
							</template>
							<view class="msgContent">
								<mp-html @load="scrollToBottom()" container-style="MessageBox" @ready="scrollToBottom()"
									:copy-link="false" :content="item.content" :show-img-menu="false"
									@linktap="showLink" />
							</view>
						</view>
					</view>
					<image v-if="data.userName == item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar" @click="toUser(item.userName)"></image>
				</template>
			</view>
			<view id="BottomView" style="height: 50px;"></view>
		</view>
		<!-- 发送栏 -->
		<view class="sendBox">
			<!-- 保留参数 等uniapp更新 -->
			<!-- confirm-type="send" confirm-hold="true" @confirm="SendMsg()"  -->
			<textarea type="text" v-model="msg" class="chat-input" value="" placeholder="请输入" />
			<button type="default" class="sendBtn" @touchend.prevent="SendMsg()">发送</button>
		</view>
	</view>
</template>

<script>
	import {
		xiaoIceApi
	} from '../../utils/api.js'
	import {
		mapGetters,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				content: [],
				msg: "",
				apiKey: "",
				data: {},
				isSend: false,
				defaultxiaoIceMessage: {
					content: "<p>有话快说</p>",
					dbUser: [],
					md: null,
					oId: 0,
					sysMetal: `{"list":[{"data":"","name":"小冰","description":"摸鱼派官方认证机器人（已备案）","attr":"url=https://www.lingmx.com/52pj/images/xiaoIce.jpg&backcolor=B9CDF6&fontcolor=ffffff","enabled":true}]}`,
					time: "2099-12-31 23:59:59",
					type: "msg",
					userAvatarURL: "https://pwl.stackoverflow.wiki/2021/12/blob-3ff70c59.png",
					userName: "xiaoIce",
					userNickname: "小冰工作号"
				},
			}
		},
		onLoad() {
			this.apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			this.content = this.$store.state.xiaoIce;
		},
		watch: {
			'$store.state.xiaoIce'(newVal, oldVal) {
				//对数据进行操作
				this.content = newVal;
			}
		},
		methods: {
			...mapMutations(['upDateXiaoIce']),
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
			longpress(e) {
				this.clientY = e.changedTouches[0].clientY - 50;
				this.clientX = e.changedTouches[0].clientX - 50;
				this.longData.msg = e.currentTarget.dataset.msg;
				this.longData.oId = e.currentTarget.dataset.oid;
				this.longData.userName = e.currentTarget.dataset.username;
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
				that.msg = "";
				that.isSending = false;
				let userMsg = JSON.parse(JSON.stringify(that.defaultxiaoIceMessage));
				userMsg.content = content;
				userMsg.sysMetal = that.data.sysMetal;
				userMsg.userName = that.data.userName;
				userMsg.userNickname = that.data.userNickname;
				userMsg.oId = new Date().getTime();
				userMsg.userAvatarURL = that.data.userAvatarURL;
				that.upDateXiaoIce(userMsg)
				xiaoIceApi({
					msg: "小冰" + content,
					user: that.data.userName,
					key: "xiaoIce"
				}).then(res => {
					console.log(res)
					let msg = JSON.parse(JSON.stringify(that.defaultxiaoIceMessage));
					msg.content = res.msg;
					msg.oId = new Date().getTime();
					that.upDateXiaoIce(msg);
					that.scrollToBottom();
				}).catch(err => {
					console.log(err)
					let msg = JSON.parse(JSON.stringify(that.defaultxiaoIceMessage));
					msg.content = "小冰API连接超时啦~";
					userMsg.oId = new Date().getTime();
					that.upDateXiaoIce(msg);
					that.scrollToBottom();
				})
			},
			scrollToBottom() {
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
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		height: 100%;
		min-height: 100vh;
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
		min-height: 50px;
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

	.chat-input {
		width: 100%;
		height: 50px;
		padding: 10px;
		padding-right: 60px;
		line-height: 30px;
		box-sizing: border-box;
		overflow-y: scroll;
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
</style>
