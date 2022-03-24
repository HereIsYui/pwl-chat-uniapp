<script>
	export default {
		globalData: {
			apiKey: ""
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

