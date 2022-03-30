<template>
	<view class="MainBox">
		<view class="user-card" v-if="userInfo"  @click="toUserInfo(userInfo.userName)">
			<u-avatar :src="userInfo.userAvatarURL" shape="square" size="60"></u-avatar>
			<view class="user-detail-box">
				<view class="user-nickName">{{userInfo.userNickname || userInfo.userName}}</view>
				<view class="user-name">用户名：{{userInfo.userName}}</view>
			</view>
			<u-icon name="arrow-right"></u-icon>
		</view>
		<u-gap height="20" bgColor="#f0f0f0"></u-gap>
		<u-cell-group class="cell-group">
			<u-cell icon="setting-fill" title="个人设置" isLink url="/pages/chat/setting"></u-cell>
			<u-cell icon="integral-fill" title="会员等级" value="普通会员"></u-cell>
		</u-cell-group>
		<u-gap height="20" bgColor="#f0f0f0"></u-gap>
		<u-cell-group class="cell-group">
			<u-cell icon="info-circle" title="APP版本" :value="lvNum"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	import {
		getUserInfo
	} from '../../../utils/api.js'
	export default {
		data() {
			return {
				userInfo: {},
				lvNum:"114"
			}
		},
		onLoad(option) {
			this.userInfo = this.$store.state.userInfo;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			this.getInfo();
			// #ifdef APP-PLUS
			this.getVersion();
			// #endif
		},
		methods: {
			toUserInfo(user) {
				uni.navigateTo({
					url: "/pages/chat/userInfo??user=" + user,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			getVersion(){
				this.lvNum = plus.runtime.versionCode;
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
					this.userInfo = res;
					this.setUserInfo(userInfo)
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.MainBox{
		width: 100vw;
		height: 100vh;
		background-color: #f0f0f0;
		.cell-group{
			background-color: #fff;
		}
	}
	.user-card {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100px;
		padding: 20px 10px;
		box-sizing: border-box;
		background-color: #fff;
		.user-detail-box {
			width: 65%;
			.user-nickName {
				font-weight: bold;
				font-size: 20px;
			}

			.user-name {
				font-size: 14px;
				color: #999;
			}
		}
	}
</style>
