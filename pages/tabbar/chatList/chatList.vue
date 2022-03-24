<template>
	<view>
		<view class="MainBox" v-if="index == 0">
			<u-cell-group>
				<u-cell title="摸鱼派聊天室" label="最新消息" iconStyle="margin-right:20px" isLink url="/pages/chat/chat">
					<u--image src="/static/logo_square.png" width="40px" height="40px" shape="square" radius="5"
						slot="icon"></u--image>
					<u-badge value="99" :absolute="false" slot="right-icon"></u-badge>
				</u-cell>
				<u-cell title="小冰" label="[图片]" iconStyle="margin-right:20px">
					<u--image src="/static/avatar/xiaoIce.png" width="40px" height="40px" shape="square" radius="5"
						slot="icon"></u--image>
					<!-- <u-badge value="99" :absolute="false" slot="right-icon"></u-badge> -->
				</u-cell>
			</u-cell-group>
		</view>
		<u-tabbar :value="index" @change="change1" :fixed="true" :placeholder="false">
			<u-tabbar-item text="聊天" icon="chat" @click="click1"></u-tabbar-item>
			<u-tabbar-item text="社区" icon="file-text" @click="click1"></u-tabbar-item>
			<u-tabbar-item text="发现" icon="bookmark" @click="click1"></u-tabbar-item>
			<u-tabbar-item text="我" icon="account" @click="click1"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
			}
		},
		onLoad() {
			let apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');

		},
		methods: {
			click1(e) {
				console.log('click1', e);
			},
			change1(value) {
				this.index = value;
			}
		}
	}
</script>

<style lang="scss">
	
</style>
