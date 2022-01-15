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
			console.log('关闭推送')
			// #endif
			console.log('App Show')
		},
		onHide: function() {
			// #ifdef APP-PLUS
			plus.push.setAutoNotification(true);
			console.log('打开推送')
			// #endif
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
