<template>
	<view class="content">
		<u-toast ref="uToast"></u-toast>
		<u-swipe-action v-if="shieldList.length > 0">
			<u-swipe-action-item v-for="(item,index) in shieldList" :key="index" :options="options1"
				@click="deleteShield" :name="index">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">{{item}}</text>
					</view>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
		<view v-else class="noMan">您的黑名单中暂无用户</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options1: [{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				shieldList: [],
			}
		},
		onLoad() {
			let shieldList = uni.getStorageSync("shieldList") || "[]";
			shieldList = JSON.parse(shieldList);
			this.shieldList = shieldList;
		},
		methods: {
			deleteShield(e) {
				let index = e.name;
				console.log(e);
				console.log(shieldList);
				let shieldList = this.shieldList;
				shieldList.splice(index, 1);
				console.log(shieldList);
				this.shieldList = shieldList;
				uni.setStorageSync("shieldList",JSON.stringify(shieldList))
				this.$refs.uToast.show({
					type: 'success',
					message: "移出黑名单成功！",
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-demo-block__title {
		padding: 10px 0 2px 15px;
	}

	.swipe-action {
		&__content {
			padding: 25rpx 0;

			&__text {
				font-size: 15px;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}
	.noMan{
		padding: 15px;
		box-sizing: border-box;
		text-align: center;
	}
</style>
