<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="login-form-box" :class="{show : ShowLogin}">
			<input class="login-input" v-model="nameOrEmail" type="text" placeholder="摸鱼派账号" />
			<input class="login-input" v-model="userPassword" type="password" placeholder="摸鱼派密码" />
			<button type="default" class="login-btn" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	import APILIST from '../../utils/api.js'
	import UTIL from '../../utils/util.js'
	import SparkMD5 from 'spark-md5'
	export default {
		data() {
			return {
				ShowLogin: false,
				nameOrEmail: "",
				userPassword: ""
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			init() {
				let apiKey = uni.getStorageSync('apiKey');
				// let apiKey = "dsajdlksjd==";

				if (!apiKey) {
					// 你丫的登录信息没了，快去登录
					setTimeout(() => {
						this.ShowLogin = true;
					}, 100)
				} else {
					// 看看登录信息过期没有
					UTIL.flirt({
						url: APILIST.API.checkUser,
						data: {
							apiKey: apiKey
						}
					}).then(res => {
						if (res.code == 0) {
							// 没过期，继续用
							getApp().globalData.data = res.data;
							getApp().globalData.apiKey = apiKey;
							uni.redirectTo({
								url:'/pages/chat/chat'
							})
						} else {
							// 你丫的登录信息过期了，快去登录
							setTimeout(() => {
								this.ShowLogin = true;
							}, 100)
						}
					})
				}

			},
			login() {
				UTIL.flirt({
					url: APILIST.API.getKey,
					data: {
						nameOrEmail: this.nameOrEmail,
						userPassword: SparkMD5.hash(this.userPassword)
					},
					method: "POST"
				}).then(res => {
					if(res.code == 0){
						// 没问题，滚去聊天室
						getApp().globalData.data = res.Key;
						uni.setStorageSync('apiKey',res.Key);
						uni.redirectTo({
							url:'/pages/chat/chat'
						})
					}else{
						// 报错就是你的错
						uni.showToast({
						    title: '你丫的填错了！',
							icon:'error',
						    duration: 2000
						});
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100vh;
		padding: 5vw;
		box-sizing: border-box;
		background-color: #3b3e43;
	}

	.logo {
		width: 60px;
		height: 60px;
		margin: 15vh 25vw 2vh;
		animation: go 5s infinite;
	}

	.login-form-box {
		height: 0;
		overflow: hidden;
		opacity: 0;
		transition: .5s;
	}

	.login-form-box.show {
		height: 300px;
		opacity: 1;
	}

	.login-input {
		width: 80vw;
		height: 40px;
		padding: 0 15px;
		margin: 5vw auto;
		box-sizing: border-box;
		border-radius: 5px;
		background-color: #fff;
		box-shadow: 1px 1px 2px 2px #333;
	}

	.login-btn {
		width: 80vw;
		height: 40px;
		padding: 0 15px;
		margin: 5vw auto;
		line-height: 40px;
		background-color: #60b044;
		color: #fff;
		box-sizing: border-box;
	}

	@keyframes go {
		30% {
			-webkit-transform: translateX(10vw);
			transform: translateX(10vw);
		}

		50% {
			-webkit-transform: translateX(20vw);
			transform: translateX(20vw);
		}
	}
</style>
