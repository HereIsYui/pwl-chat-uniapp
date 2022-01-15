const flirt = function({
	url,
	method = "GET",
	data,
	header
}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: method,
			data: data,
			header: header,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

module.exports = {
	flirt
}