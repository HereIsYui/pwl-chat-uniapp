<script>
	export default {
		globalData: {
			apiKey: "",
			content: [],
		},

		methods: {
			watch: function(method, istr) {
				var obj = this.globalData
				console.log(obj)
				Object.defineProperty(obj, istr, {
					configurable: true,
					enumerable: true,
					set: function(value) {
						this._consumerGoodsStatus = value
						method(value)
					},
					get: function(value) {
						return this._consumerGoodsStatus
					}
				})
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			// #ifdef APP-PLUS
			plus.push.setAutoNotification(false);
			// #endif
			console.log('App Show')
		},
		onHide: function() {
			// #ifdef APP-PLUS
			plus.push.setAutoNotification(true);
			// #endif
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	/*每个页面公共css */
	.MainBox {
		.u-cell__left-icon-wrap {
			margin-right: 10px !important;
		}
	}
</style>
