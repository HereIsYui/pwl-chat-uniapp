<template>
	<view class="userInfo-box">
		<u-toast ref="uToast"></u-toast>
		<view class="user-background">
			<image :src="userInfo.cardBg" class="user-bg" mode="aspectFill"></image>
			<image :src="userInfo.userAvatarURL" class="user-avatar" mode="aspectFill"></image>
			<view class="user-name" v-if="userInfo.userNickname">{{userInfo.userNickname}}({{userInfo.userName}})</view>
			<view class="user-name" v-else>{{userInfo.userName}}</view>
		</view>
		<view class="user-detail-box">
			<view class="user-cell">
				<view class="user-cell-label">摸鱼号：</view>
				<view>{{userInfo.userNo}}</view>
			</view>
			<view class="user-cell">
				<view class="user-cell-label">签名：</view>
				<view>{{userInfo.userIntro || "这个人很懒，什么都没写~"}}</view>
			</view>
			<view class="user-cell">
				<view class="user-cell-label">用户组：</view>
				<view>{{userInfo.userRole}}</view>
			</view>
			<view class="user-cell">
				<view class="user-cell-label">城市：</view>
				<view>{{userInfo.userCity}}</view>
			</view>
			<view class="user-cell">
				<view class="user-cell-label">角色：</view>
				<view>{{userInfo.userAppRole == 0 ? '黑客' : '画家'}}</view>
			</view>
			<view class="user-cell">
				<view class="user-cell-label">积分：</view>
				<view>{{userInfo.userPoint}}</view>
			</view>
			<view class="user-cell user-sysMetal" v-if="userInfo.sysMetal">
				<view class="user-cell-label">勋章：</view>
				<template v-for="(item,index) in userInfo.sysMetal.list">
					<image class="sysMetal"
						:src="'https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=' + item.name+'&' + item.attr"
						v-if="item.enabled" mode="heightFix"></image>
				</template>
			</view>
			<view class="btn" v-if="data.userName != user">
				<u-button type="error" text="屏蔽" @click="shieldUser()"></u-button>
			</view>
			<view class="btn" v-if="data.userName != user">
				<u-button type="warning" text="举报" @click="reportUser()"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		report
	} from '../../utils/api.js'
	const App = getApp();
	export default {
		data() {
			return {
				user: "",
				apiKey: "",
				data: {},
				userInfo: {},
				BBSType: 0
			}
		},
		onLoad(option) {
			console.log(option)
			this.apiKey = App.globalData.apiKey || uni.getStorageSync('apiKey');
			this.data = App.globalData.data || uni.getStorageSync('userData');
			this.user = option.user || "Yui";
			this.BBSType = option.BBSType || 0;
			uni.setNavigationBarTitle({
				title: this.user + "的个人信息"
			})
			this.getInfo()
		},
		methods: {
			shieldUser() {
				let shieldList = uni.getStorageSync("shieldList") || "[]";
				shieldList = JSON.parse(shieldList);
				if (shieldList) {
					shieldList.push(this.user)
				} else {
					shieldList = [this.user]
				}
				uni.setStorageSync("shieldList", JSON.stringify(shieldList));
				this.$refs.uToast.show({
					type: 'success',
					message: "加入黑名单成功！",
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
				})
				if(this.BBSType != 0){
					uni.navigateBack({
						delta: parseInt(this.BBSType)
					})
				}
			},
			reportUser() {
				report({
					apiKey: this.apiKey,
					reportDataId: this.userInfo.oId,
					reportDataType: 2,
					reportType: 49,
					reportMemo: ""
				}).then(res => {
					if (res.code == 0) {
						this.$refs.uToast.show({
							type: 'success',
							message: "一键举报成功，感谢你的帮助！",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
						})
					}
				})
			},
			getInfo() {
				getUserInfo(this.user).then(res => {
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
					// url=https://pwl.stackoverflow.wiki/2021/12/metaldev-db507262.png&backcolor=483d8b&fontcolor=f8f8ff
					// https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=开发&
					this.userInfo = res;
					console.log(this.userInfo)
				})
			}
		}
	}
</script>

<style scoped>
	.user-background {
		position: relative;
		overflow: hidden;
	}

	.user-background::after {
		content: "";
		position: absolute;
		z-index: 80;
		bottom: 0;
		right: 0;
		width: 750px;
		height: 100px;
		background: rgba(255, 255, 255, .6);
		transform: rotate(2deg) translateY(40px);
	}

	.user-background::before {
		content: "";
		position: absolute;
		z-index: 90;
		bottom: 0;
		right: 0;
		width: 750px;
		height: 60px;
		background: rgba(255, 255, 255, .8);
		transform: rotate(-10deg) translateY(60px);
	}

	.user-bg {
		width: 100%;
		height: 250px;
	}

	.user-avatar {
		position: absolute;
		right: 5vw;
		bottom: 5vw;
		z-index: 100;
		width: 80px;
		height: 80px;
	}

	.user-name {
		position: absolute;
		z-index: 100;
		right: calc(5vw + 90px);
		text-align: right;
		font-size: 14px;
		font-weight: bold;
		bottom: 5vw;
		padding: 5px 8px;
		background: rgba(0, 0, 0, .1);
	}

	.user-detail-box {
		padding: 15px;
	}

	.user-cell {
		display: flex;
		align-items: center;
		height: 30px;
		font-size: 14px;
		padding: 5px 15px;
		color: #666;
	}

	.user-cell-label {
		width: 80px;
	}

	.user-cell:not(:last-child) {
		border-bottom: 1px solid #f0f0f0;
	}

	.sysMetal {
		height: 30px;
	}

	.btn {
		margin-top: 10px;
	}
</style>
