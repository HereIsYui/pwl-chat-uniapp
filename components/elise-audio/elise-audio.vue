<template>
	<view v-if='url' class='flex audio' :class="{active:status}"
		:style="{width:getWith(durationS),  background:audioColor}" @click='play(audioId)'>
		<view class='mr-3'>
			<view class="wifi-symbol " :class="status?'active':''">
				<view class="wifi-circle first"></view>
				<view class="wifi-circle second"></view>
				<view class="wifi-circle third"></view>
			</view>
		</view>
		<view class='ml-3'>{{durationS ? durationS + 's' : ''}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				context: null,
				duration: 100,
				status: false,
			}
		},
		props: {
			url: {
				type: String,
				default: ''
			},
			audioColor: {
				type: String,
				default: '#fff'
			},
			durationS: [String, Number],
			audioId: [String, Number]
		},
		created() {
			this.context = uni.createInnerAudioContext();
			this.context.src = this.url;
			this.onEnded();
			uni.$on('stop', (id) => {
				if (id && id != this.audioId) {
					this.context.stop();
					this.status = false;
				} else if (!id) {
					this.context.stop();
					this.status = false;
				}
			})
		},
		methods: {
			play(id) { //点击播放
				if (this.status) {
					this.context.pause();
					this.status = !this.status;
				} else {
					uni.$emit('stop', id)
					this.context.play()
					this.status = !this.status;
				}
			},
			onEnded() { //播放结束
				this.context.onEnded(() => {
					this.status = false;
				})
			},
			getWith(s) {
				if (s) {
					const w = s * 10 + 150
					return w > 520 ? '520rpx' : (s * 10 + 150) + 'rpx'
				}
			},
		}
	}
</script>

<style lang="scss">
	.audio {
		background: rgba(0,0,0,0) !important;;
		height: 58rpx;
		border-radius: 50rpx;
		width: 200rpx;
		align-items: center;

		// padding: 20rpx;
		&.active {
			opacity: 0.8;
		}

	}
	.isYou .audio{
		transform: rotateY(180deg);
		background: rgba(0,0,0,0) !important;
	}

	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.flex-1 {
		flex: 1;
	}

	.ml-3 {
		margin-right: 30rpx;
		color: #000;
	}

	.mr-3 {
		margin-left: 30rpx;
	}

	.wifi-symbol {
		width: 50rpx;
		height: 50rpx;
		box-sizing: border-box;
		overflow: hidden;
		transform: rotate(135deg) translate3d(0, 0, 0);
		-webkit-transform: rotate(135deg) translate3d(0, 0, 0);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.wifi-circle {
		border: 5rpx solid #000;
		border-radius: 50%;
		position: absolute;
	}

	.first {
		width: 5rpx;
		height: 5rpx;
		background: #000;
		top: 45rpx;
		left: 45rpx;
	}

	.second {
		width: 25rpx;
		height: 25rpx;
		top: 35rpx;
		left: 35rpx;
	}

	.third {
		width: 40rpx;
		height: 40rpx;
		top: 25rpx;
		left: 25rpx;
	}

	.active {
		.second {
			animation: fadeInOut 1s infinite 0.2s;
			-webkit-animation: fadeInOut 1s infinite 0.2s;
		}

		.third {
			animation: fadeInOut 1s infinite 0.4s;
			-webkit-animation: fadeInOut 1s infinite 0.4s;
		}
	}

	@keyframes fadeInOut {
		0% {
			opacity: 0;
			/*初始状态 透明度为0*/
		}

		100% {
			opacity: 1;
			/*结尾状态 透明度为1*/
		}
	}
</style>
