<template>
	<view class="MainBox">
		<u--textarea v-model="value1" placeholder="请输入内容" count maxlength="512" height="100"></u--textarea>
		<u-button text="发布" type="success" style="margin-top: 20px;" @click="sendBreeEvent()"></u-button>
		<u-notify message="Hi uView" ref="uNotify"></u-notify>
	</view>
</template>

<script>
	import {
		sendBree
	} from '../../../utils/api.js'
	export default {
		data() {
			return {
				value1: '',
				apiKey: '',
				show: false
			}
		},
		onLoad() {
			let apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');
			this.apiKey = apiKey;
		},
		methods: {
			sendBreeEvent() {
				let value = this.value1;
				let that = this;
				if (!value) {
					this.$refs.uNotify.show({
						type: 'error',
						message: '请输入内容'
					})
					return;
				}
				console.log({
					apiKey: that.apiKey,
					breezemoonContent: value
				})
				sendBree({
					apiKey: that.apiKey,
					breezemoonContent: value
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.$refs.uNotify.show({
							type: 'success',
							message: '发布成功'
						})
						setTimeout(()=>{
							uni.navigateBack()
						},2000)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.MainBox {
		width: 100vw;
		height: 100vh;
		padding: 15px;
		box-sizing: border-box;
		background: #3b3e43;
	}
</style>
