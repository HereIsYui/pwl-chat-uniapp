<template>
	<view>
		<view class="user-background" v-if="userInfo">
			<image :src="userInfo.cardBg" class="user-bg" mode="aspectFill"></image>
			<image :src="userInfo.userAvatarURL" class="user-avatar" mode="aspectFill"></image>
			<view class="user-name" v-if="userInfo.userNickname">{{userInfo.userNickname}}({{userInfo.userName}})</view>
			<view class="user-name" v-else>{{userInfo.userName}}</view>
		</view>
		<view class="bree-list-box" v-if="breeList">
			<view class="bree-item" v-for="(item,index) in breeList" :key="index">
				<view class="bree-avatar" @click="toUserInfo(item.breezemoonAuthorName)">
					<u-avatar shape="square" :src="item.breezemoonAuthorThumbnailURL48"></u-avatar>
				</view>
				<view class="bree-detail-box">
					<view class="bree-username" @click="toUserInfo(item.breezemoonAuthorName)">
						{{item.breezemoonAuthorName}}</view>
					<view class="bree-detail">
						<u-parse :content="item.breezemoonContent"></u-parse>
					</view>
					<view class="bree-addr-time">
						<view class="bree-addr" v-if="item.breezemoonCity">{{item.breezemoonCity}}</view>
						<view class="bree-time">{{item.timeAgo}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bree-nodata" v-else>- 没有更多内容 -</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import {
		getUserInfo,
		getBree,
		sendBree
	} from '../../../utils/api.js'
	export default {
		data() {
			return {
				userInfo: {},
				data: {},
				breeList: [],
				page: 1,
				size: 20,
				status: "loadmore"
			}
		},
		onLoad() {
			this.userInfo = this.$store.state.userInfo;
			this.data = getApp().globalData.data || uni.getStorageSync('userData');
			this.getInfo();
			this.getBreeList();
		},
		onNavigationBarButtonTap(obj) {
			console.log(obj)
			if (obj.type == "none") {
				// 去设置页
				uni.navigateTo({
					url: './addBree',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
		onReachBottom() {
			this.page = this.page + 1;
			this.getBreeList();
		},
		methods: {
			getBreeList() {
				let that = this;
				getBree({
					p: this.page,
					size: this.size
				}).then(res => {
					if (res.code == 0) {
						if (that.breeList.length == 0) {
							that.breeList = res.breezemoons;
						} else {
							that.breeList = that.breeList.concat(res.breezemoons);
						}
					}
				})
			},
			toUserInfo(user) {
				uni.navigateTo({
					url: "/pages/chat/userInfo??user=" + user,
					animationType: 'pop-in',
					animationDuration: 200
				})
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

	.bree-list-box {
		box-sizing: border-box;

		.bree-item {
			display: flex;
			justify-content: space-between;
			padding: 15px;
			border-bottom: 1px solid #f0f0f0;

			.bree-avatar {
				padding-top: 10px;
			}

			.bree-detail-box {
				width: 85%;

				.bree-username {
					font-weight: bold;
					margin-top: 10px;
					color: #50597a;
				}

				.bree-addr-time {
					display: flex;
					font-size: 12px;
				}

				.bree-addr {
					color: #4285f4;
					margin-right: 10px;
				}

				.bree-time {
					color: #888;
				}
			}
		}
	}

	.bree-nodata {
		padding: 15px;
		color: #666;
		text-align: center;
	}
</style>
