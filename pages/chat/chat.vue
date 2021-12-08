<template>
	<view class="content">
		<view class="contentBox" v-if="content.length > 0">
			<view class="msgInfo" v-for="(item,index) in content" :key="index"
				:class="{isYou : (data.userName == item.userName ? true : false)}">
				<template v-if="item.type != 'redPacketStatus'">
					<image v-if="data.userName != item.userName" :src='item.userAvatarURL' mode="widthFix"
						class="userAvatar"></image>
					<view class="MsgDetailBox">
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
										<view class="rp-msg">{{item.content.msg}}</view>
									</view>
								</view>
							</view>
							<view class="msgContent" v-else-if="item.userName == 'taozhiyu'" @click="hideTaotao = false">
								<view v-if="hideTaotao">涛涛发言，自动屏蔽[点击解除]</view>
								<view v-else>
									<mp-html @load="scrollToBottom()" :content="item.content" />
								</view>
							</view>
							<view class="msgContent" v-else>
								<mp-html @load="scrollToBottom()" @ready="scrollToBottom()" :copy-link="false" :selectable="true" :content="item.content" />
							</view>
							
						</view>
						<view class="humanNature" v-if="content.length > 2 && firstMsg.content == secondMsg.content && firstMsg.oId == item.oId && item.userName != data.userName"  @click="SendMsg(item.content)">+1</view>
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
			<view class="menuBox">
				<view class="iconBtn">
					<image src="../../static/icon/hongbao.png" mode="heightFix"></image>
				</view>
				<view class="iconBtn">
					<image :src="emojeSrc" mode="heightFix"></image>
				</view>
				<view class="iconBtn">
					<image src="../../static/icon/tupian.png" mode="heightFix"></image>			
				</view>
			</view>
			<textarea type="text" v-model="msg" class="chat-input" value="" placeholder="请输入" />
			<button type="default" class="sendBtn" @touchend.prevent="SendMsg()">发送</button>
		</view>
		<!-- 红包 -->
		<view class="redPacketBg" v-if="showRedPacketData" @click.stop="showRedPacketData = false">
			<view class="redPacketbox">
				<view class="redPacketInfo">
					
				</view>
				<view class="redPacketList">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
	import APILIST from '../../utils/api.js'
	import UTIL from '../../utils/util.js'
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
				hideTaotao: true,
				redpacket: {
					money: 32,
					count: 2,
					msg: '摸鱼者，事竟成！'
				},
				firstMsg:null,
				secondMsg:null,
				emojeSrc:'../../static/icon/huaji1.png',
				redpacketData:{},
				redpacketTitle:"",
				showRedPacketData:true,
				JoinChat:null
			}
		},
		onLoad() {
			this.initChat();
			this.apiKey = getApp().globalData.apiKey;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
		},
		created() {
			this.getPage(1);
			// this.getUserEmotions();
			let that = this;
			// uni.onSocketClose(function (res) {
			//   console.log('WebSocket 已关闭！');
			//   that.JoinChat = setInterval(()=>{
			// 	  console.log("尝试重连WebSocket");
			// 	  that.initChat()
			//   },3000)
			  
			// });
			setInterval(()=>{
				this.changeHuaji()
			},5000)
		},
		methods: {
			changeHuaji(){
				this.emojeSrc = `../../static/icon/huaji${Math.ceil(Math.random()*6)}.png`
			},
			getPage(page) {
				let that = this;
				if (page = 1) {
					this.content = [];
				}
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
							let userAvatar = encodeURI(msg.userAvatarURL)
							userAvatar = btoa(userAvatar);
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${userAvatar}`
							// msg.userAvatarURL = `http://127.0.0.1:3002/GetImage?url=${userAvatar}`
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
					this.redpacketData = res;
					let money = this.redpacketData.who.find(w => w.userName == this.data.userName);
					if (!money){
						this.redpacketTitle =  '错过一个亿'
					}else{
						this.redpacketTitle =  money.userMoney == 0 ? '抢了个寂寞' : '抢到' + money.userMoney + '积分'
					}
					this.showRedPacketData = true;
				})
			},
			SendMsg(msg) {
				let that = this;
				let content = that.msg || msg;
				if(content && content.trim() == "") {
					return;
				}
				UTIL.flirt({
					url: APILIST.API.send,
					method: "POST",
					data: {
						content: content,
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
					success: (res) => {
						console.log("WebSocket 连接成功！")
						clearInterval(that.JoinChat);
					},
					fail:(err) => {
						console.log("WebSocket 连接失败！")
					}
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
							for (let i = 0; i < that.content.length; i++) {
								let c = that.content[i];
								if (c.oId != msg.oId) continue;
								that.content.splice(i, 1);
								break;
							}
							break;
						case "msg": //消息
							// let userAvatar = uni.getStorageSync(msg.userName);
							let userAvatar = encodeURI(msg.userAvatarURL)
							userAvatar = btoa(userAvatar);
							msg.userAvatarURL = `https://pwl.yuis.cc/GetImage?url=${userAvatar}`
							that.filterMsg(msg)
							break;
						case "redPacketStatus":
							that.content.push(msg);
							if(msg.got == 2){
								that.getMoney(msg.oId)
							}
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
					let newSrcList = [];
					msg.content = msg.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(match, capture) {
						let url = encodeURI(capture);
						url = btoa(url);
						let imgUrl = `https://pwl.yuis.cc/GetImage?url=${url}`;
						// let imgUrl = `http://127.0.0.1:3002/GetImage?url=${imgurl}`;
						return `<img src="${imgUrl}" alt="图片表情" />`
					});
					this.content.push(msg)
				} else {
					this.content.push(msg)					
				}
				if(!msg.isMoney){
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
				let query = wx.createSelectorQuery()
				// 通过节点获取位置信息
				query.select('.contentBox').boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(res => {
					if (res[0]) {
						setTimeout(()=>{
							wx.pageScrollTo({
								scrollTop: res[0].height + 0,
								duration: 100
							})
						},100)
					}
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
	.MsgDetailBox{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.contentBox {
		min-height: calc(100vh - 100px);
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
		height: 100px;
		background: #fff;
	}
	.menuBox{
		display: flex;
		height: 42px;
		padding: 5px 0;
		border-bottom: 1px solid #F8F8F8;
		box-sizing: border-box;
	}
	.iconBtn{
		margin: 0 5px;
	}
	.iconBtn image{
		height: 32px;
	}
	.sendBtn {
		position: absolute;
		right: 5vw;
		top: calc(50% + 20px);
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
	.humanNature{
		width: 35px;
		height: 35px;
		margin-left: 5px;
		text-align: center;
		line-height: 35px;
		font-size: 10px;
		color: #000;
		background: #fff;
		border-radius: 50%;
		transform: translateY(-50%);
	}
	.redPacketBg{
		position: fixed;
		z-index: 250;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	.redPacketbox{
		position: absolute;
		top: 8vh;
		left: 50%;
		width: 80vw;
		height: 70vh;
		transform: translateX(-50%);
		background: #fdf7eb;
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
