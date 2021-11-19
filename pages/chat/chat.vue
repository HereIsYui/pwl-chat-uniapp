<template>
	<view class="content">
		<view class="contentBox" v-if="content.length > 0">
			<view class="msgInfo" v-for="(item,index) in content" :key="index">
				<!-- <image :src="item.userAvatar" mode="widthFix" class="userAvatar"></image> -->
				<image src="../../static/logo.png" mode="widthFix" class="userAvatar"></image>
				<view class="msgBox">
					<view class="userName">{{item.userName}}</view>
					<view class="msgContent" v-if="item.isMony">收到红包，但是你领不了</view>
					<view class="msgContent" v-else v-html="item.content"></view>
				</view>
			</view>
			<view id="BottomView"></view>
		</view>
		<view class="sendBox">
			<editor id="editor" placeholder="请输入" @ready="onEditorReady"></editor>
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
			}
		},
		onLoad() {
			this.initChat();
		},
		methods: {
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
			},
			undo() {
				this.editorCtx.undo()
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
							// for (let i = 0; i < that.content.length; i++) {
							// let c = that.content[i];
							// if (c.oId != msg.oId) continue;
							// that.content.splice(i, 1);
							// break;
							// }
							break;
						case "msg": //消息
							// uni.downloadFile({
							//     url: msg.userAvatarURL, //仅为示例，并非真实的资源
							// 	header:{
							// 		Referer:'https://pwl.icu/'
							// 	},
							// 	dataType:'jsonp',
							//     success: (res) => {
							//         if (res.statusCode === 200) {
							//             console.log('下载成功');
							// 			uni.setStorageSync(msg.userName,tempFilePath);
							// 			msg.userAvatar = tempFilePath;
							//         }
							//     },
							// 	fail(err) {
							// 		console.log(err)
							// 	}
							// });

							
							try{
								if (JSON.parse(msg.content)) {
									msg.content = JSON.parse(msg.content)
									msg.isMony = true;
								}
							}catch(e){
								//TODO handle the exception
							}
							that.content.push(msg)
							// if (this.content.length > 10000) this.load(1);
							// ipcRenderer.send('sys-msg', msg);
							break;
					}
				})
			}
		},
	}
</script>

<style scoped>
	.content {
		min-width: 100vw;
		min-height: 80vh;
		background-color: #3b3e43;
	}

	.userAvatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 5px;
	}

	.msgInfo {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.contentBox {
		padding: 15px 10px 120px;
		box-sizing: border-box;
	}

	.msgBox {}

	.userName {
		color: #fff;
	}

	.msgContent {
		min-width: 10px;
		max-width: 70vw;
		margin: 5px 0;
		padding: 5px 10px;
		border-radius: 5px;
		background-color: #fff;
	}

	.msgContent p {
		min-width: 10px;
	}
	.sendBox{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 100px;
	}
	#editor {
		width: 100%;
		height: 100px;
		background-color: #fff;
	}
</style>
