import UTIL from './util.js'
const baseURL = "https://pwl.icu"
const baaseWS = "wss://pwl.icu"
const API = {
	getKey: baseURL + "/api/getKey",
	checkUser: baseURL + "/api/user",
	getUserInfo: baseURL + "/user/",
	emotions: baseURL + "/users/emotions",
	liveness: baseURL + "user/liveness",
	more: baseURL + "/chat-room/more",
	send: baseURL + "/chat-room/send",
	delete: baseURL + "/chat-room/revoke/", ///chat-room/revoke/{消息oId}
	open: baseURL + "/chat-room/red-packet/open",
	getface: baseURL + "/api/cloud/get",
	upload: baseURL + "/upload"
}

export const WS = {
	channel: baaseWS + "/chat-room-channel",
}

export const getKey = params => {
	return UTIL.flirt({
		url: API.getKey,
		data: params,
		method: "POST"
	})
}

export const checkUser = params => {
	return UTIL.flirt({
		url: API.checkUser,
		data: params
	})
}

export const getMorePage = params => {
	return UTIL.flirt({
		url: API.more,
		data: params
	})
}

export const openRedPacket = params => {
	return UTIL.flirt({
		url: API.open,
		data: params,
		method: "POST"
	})
}

export const send = params => {
	return UTIL.flirt({
		url: API.send,
		data: params,
		method: "POST"
	})
}

export const faceList = params => {
	return UTIL.flirt({
		url: API.getface,
		data: params,
		method: "POST"
	})
}

export const getUserInfo = params => {
	return UTIL.flirt({
		url: API.getUserInfo + params,
	})
}
export const upload = params => {
	// let data = new FormData();
	// params.forEach(f => data.append('file[]', f));
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: API.upload, //仅为示例，非真实的接口地址
			filePath: params,
			name: 'file[]',
			header:{
				"Content-Type":"multipart/form-data"
			},
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		});
	})

}
