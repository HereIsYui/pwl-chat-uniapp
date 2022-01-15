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
	import {
		getKey,
		checkUser
	} from '../../utils/api.js'
	import SparkMD5 from 'spark-md5'
	import upApp from '../../uni_modules/uni-upgrade-center-app/utils/check-update.js'
	export default {
		data() {
			return {
				ShowLogin: false,
				nameOrEmail: "",
				userPassword: ""
			}
		},
		onLoad() {
			upApp()
			this.init();
		},
		methods: {
			init() {
				try{
					let apiKey = uni.getStorageSync('apiKey');
					let data = uni.getStorageSync('userData');
					
					if (!apiKey) {
						// 检查是否有保存的账号密码
						let nameOrEmail = uni.getStorageSync("nameOrEmail")
						let userPassword = uni.getStorageSync("userPassword")
						if (nameOrEmail && userPassword) {
							// 尝试登录
							getKey({
								nameOrEmail: nameOrEmail,
								userPassword: userPassword
							}).then(res => {
								if (res.code == 0) {
									// 先验证下,再滚去聊天室
									that.CheckUser(res.Key)
								} else {
									// 报错就是你的错
									// 你丫的登录信息错了，快去登录
									setTimeout(() => {
										this.ShowLogin = true;
									}, 100)
								}
							})
						} else {
							// 你丫的登录信息没了，快去登录
							setTimeout(() => {
								this.ShowLogin = true;
							}, 100)
						}
					} else {
						// 看看登录信息过期没有
						this.CheckUser(apiKey)
					}
				}catch(e){
					// 你丫的登录信息没了，快去登录
					setTimeout(() => {
						this.ShowLogin = true;
					}, 100)
				}

			},
			login() {
				let that = this;
				getKey({
					nameOrEmail: this.nameOrEmail,
					userPassword: SparkMD5.hash(this.userPassword)
				}).then(res => {
					if (res.code == 0) {
						console.log(res)
						// 没问题，保存下密码，下次免登录
						uni.setStorageSync("nameOrEmail", that.nameOrEmail)
						uni.setStorageSync("userPassword", SparkMD5.hash(that.userPassword))
						// 先验证下,再滚去聊天室
						that.CheckUser(res.Key)
					} else {
						// 报错就是你的错
						uni.showToast({
							title: '账号密码错误!',
							icon: 'error',
							duration: 2000
						});
					}
				})
			},
			CheckUser(apiKey) {
				checkUser({
					apiKey: apiKey
				}).then(res => {
					if (res.code == 0) {
						// 没过期，继续用
						uni.setStorageSync('userData', res.data)
						uni.setStorageSync('apiKey', apiKey)
						getApp().globalData.data = res.data;
						getApp().globalData.apiKey = apiKey;
						uni.reLaunch({
							url: '/pages/chat/chat'
						})
					} else {
						// 你丫的登录信息过期了，快去登录
						setTimeout(() => {
							this.ShowLogin = true;
						}, 100)
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
