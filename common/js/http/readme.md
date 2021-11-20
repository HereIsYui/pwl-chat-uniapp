**使用说明**

1. 插件设置

- 下载后把 http 文件夹 copy 到项目 common/js/ 目录下

- 全局设置

> 在main.js添加以下代码

	import http from '@/common/js/http/'
	//设置baseUrl
	http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		//添加通用参数
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}

1. 插件使用

- 直接引用后使用

> 页面中使用

	<script>
		import http from '@/common/js/http/'

		export default {
			data() {
				return {}
			},
			onLoad(option) {
				this.test();
				this.test1);
			},
			methods: {
				test () {
					http.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.http.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>

- 全局挂载后使用

> 在 main.js 添加以下代码

	import http from '@/common/js/http/'
	Vue.prototype.$http = http

> 页面中使用

	<script>
		export default {
			data() {
				return {}
			},
			onLoad(option) {
				this.test();
				this.test1);
			},
			methods: {
				test () {
					this.$http.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.$http.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>