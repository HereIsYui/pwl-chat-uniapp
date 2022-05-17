<template>
	<view class="cell-list">
		<view class="cell-item flex">
			<view class="cell-label">WebSocket重连时间(秒):</view>
			<input class="cell-input" type="text" value="" v-model="setting.JoinChatTime" />
		</view>
		<view class="cell-item">
			<view class="cell-label">图片解析接口:</view>
			<input class="cell-input" type="text" value="" v-model="setting.ImageLoadHome" />
			<view class="msg">PS:请参考文档，切勿乱改。</view>
		</view>
		<view class="cell-item flex">
			<view class="cell-label">消息推送:</view>
		</view>
		<view class="cell-item flex">
			<view class="uni-list">
				<radio-group class="radio-list" @change="appPushChange">
					<label class="uni-list-cell">
						<view>
							<radio value="true" :checked="setting.openAppPush == true"/>
						</view>
						<view>打开</view>
					</label>
					<label class="uni-list-cell">
						<view>
							<radio value="false" :checked="setting.openAppPush == false" />
						</view>
						<view>关闭</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="cell-item flex">
			<view class="cell-label">红包皮肤:</view>
		</view>
		<view class="cell-item flex">
			<view class="uni-list">
				<radio-group class="radio-list" @change="rpSkinChange">
					<label class="uni-list-cell">
						<view>
							<radio value="QQ" :checked="setting.rpSkin == 'QQ'"/>
						</view>
						<view>QQ样式</view>
					</label>
					<label class="uni-list-cell">
						<view>
							<radio value="WX" :checked="setting.rpSkin == 'WX'" />
						</view>
						<view>WX样式</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="cell-item flex">
			<view class="cell-label">主题样式:</view>
		</view>
		<view class="cell-item flex" v-if="canGetLiveness">
			<view class="cell-btn btn-success" @click="getLiveness()">领取昨日活跃</view>
		</view>
		<view class="cell-item flex">
			<view class="cell-btn" @click="logout()">退出登录</view>
		</view>
	</view>
</template>

<script>
	import {
		getYesterdayLiveness,
		checkCollectedLiveness
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				setting: {
					JoinChatTime: 30,
					ImageLoadHome: "https://pwl.yuis.cc/GetImage?url=",
					openAppPush:true,
					rpSkin:"WX"
				},
				apiKey: null,
				canGetLiveness: false,
			}
		},
		onBackPress(e) {
			uni.setStorageSync("setting", JSON.stringify(this.setting))
		},
		onLoad(option) {
			this.apiKey = option.apiKey;
			if (!this.apiKey) return;
			checkCollectedLiveness({
				apiKey: this.apiKey
			}).then(res => {
				if (!res.isCollectedYesterdayLivenessReward) {
					this.canGetLiveness = true;
				}
			})
			let setting = uni.getStorageSync('setting');
			try {
				setting = JSON.parse(setting);
				if(!setting.openAppPush){
					setting.openAppPush = true;
				}
				if(!setting.rpSkin){
					setting.rpSkin = "WX";
				}
				this.setting = setting;
			} catch (e) {
				//TODO handle the exception
			}
		},
		methods: {
			appPushChange(e){
				this.setting.openAppPush = e.detail.value == 'true';
				console.log(this.setting.openAppPush)
			},
			rpSkinChange(e){
				this.setting.rpSkin = e.detail.value;
			},
			getLiveness() {
				getYesterdayLiveness({
					apiKey: this.apiKey
				}).then(res => {
					this.canGetLiveness = false;
					uni.showToast({
						title: `领取成功，积分:` + res.sum,
						icon: "none"
					})
				})
			},
			logout() {
				uni.removeStorageSync('apiKey');
				getApp().globalData.data = null;
				getApp().globalData.apiKey = "";
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell-list {
		width: 100vw;
		height: 100vh;
		background-color: #3b3e43;
		color: #fff;
		padding: 15px;
		box-sizing: border-box;

		.cell-item {
			font-size: 14px;
			padding: 10px 0;

			.cell-input {
				width: 200px;
			}

			.cell-input {
				width: 100%;
				height: 30px;
				font-size: 12px;
				padding: 5px 10px;
				border-bottom: 1px solid #666;
				box-sizing: border-box;
				color: #666;
				background: #F0F0F0;
				margin-top: 5px;
			}

			.msg {
				font-size: 12px;
				font-style: italic;
				color: #FFAAAA;
			}

			.cell-btn {
				width: 80%;
				height: 35px;
				text-align: center;
				line-height: 35px;
				margin: 0 auto;
				color: #fff;
				background: #f56c6c;
				border-radius: 5px;
				box-shadow: 0 0 2px #222;
			}

			.btn-success {
				background: #5CA941;
			}
		}

		.cell-item.flex {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.cell-input {
				width: calc(100% - 200px);
				text-align: center;
				margin-top: 0;
			}
		}

		.cell-item:not(:last-child) {
			border-bottom: 1px dotted #999;
		}
	}
	.uni-list-cell{
		display: flex;
		align-items: center;
		margin: 10px 0;
	}
	.uni-list{
		width: 100%;
	}
	.radio-list{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
</style>
