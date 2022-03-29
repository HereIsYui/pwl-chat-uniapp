<template>
	<view class="userInfo-box" v-if="userInfo">
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
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo
	} from '../../../utils/api.js'
	export default {
		data() {
			return {
				index: 3,
				userInfo: {
					"userCity": "驻马店",
					"userOnlineFlag": true,
					"userPoint": 118581,
					"userAppRole": "1",
					"userIntro": "",
					"userNo": "8",
					"onlineMinute": 52462,
					"userAvatarURL": "https://pwl.stackoverflow.wiki/2022/02/blob-d135095b.png",
					"userNickname": "",
					"oId": "1630488635229",
					"userName": "Yui",
					"cardBg": "https://pwl.stackoverflow.wiki/2022/02/jjdbf-09d4334b.jpg",
					"followingUserCount": 0,
					"sysMetal": {
						"list": [{
							"data": "",
							"name": "摸鱼派忠粉",
							"description": "捐助摸鱼派达256RMB，勋章编号No.001",
							"attr": "url=https://pwl.stackoverflow.wiki/2021/12/ht2-bea67b29.jpg&backcolor=87cefa&fontcolor=efffff",
							"enabled": true
						}, {
							"data": "",
							"name": "摸鱼派1岁啦",
							"description": "一往无前",
							"attr": "url=https://pwl.stackoverflow.wiki/2022/02/奖牌-d667b38a.jpg&backcolor=db5a6b&fontcolor=ffffff",
							"enabled": true
						}, {
							"data": "",
							"name": "恋爱的味道",
							"description": "我希望是甜甜的",
							"attr": "url=https://pwl.stackoverflow.wiki/2022/03/恋爱御守-7aa6b0c4.jpg&backcolor=f47983&fontcolor=ffffff",
							"enabled": true
						}]
					},
					"canFollow": "hide",
					"userRole": "OP",
					"followerCount": 11,
					"userURL": ""
				}
			}
		},
		onLoad(option) {
			this.userInfo = this.$store.state.userInfo;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			this.getInfo();
		},
		methods: {
			change1(value) {
				this.index = value;
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
</style>
