import UTIL from './util.js'
const baseURL = "https://fishpi.cn"
const baaseWS = "wss://fishpi.cn"
const API = {
	getKey: baseURL + "/api/getKey",
	checkUser: baseURL + "/api/user",
	getUserInfo: baseURL + "/user/",
	emotions: baseURL + "/users/emotions",
	liveness: baseURL + "/user/liveness",
	more: baseURL + "/chat-room/more",
	send: baseURL + "/chat-room/send",
	delete: baseURL + "/chat-room/revoke/", ///chat-room/revoke/{消息oId}
	ylra: baseURL + "/activity/yesterday-liveness-reward-api",
	icl: baseURL + "/api/activity/is-collected-liveness",
	open: baseURL + "/chat-room/red-packet/open",
	getface: baseURL + "/api/cloud/get",
	upload: baseURL + "/upload",
	bree: baseURL + "/api/breezemoons",
	sendBree: baseURL + "/breezemoon",
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

export const deleteMsg = params => {
	return UTIL.flirt({
		url: API.delete + params.oId,
		data: {
			apiKey: params.apiKey
		},
		method: "DELETE"
	})
}

export const getUserInfo = params => {
	return UTIL.flirt({
		url: API.getUserInfo + params,
	})
}

export const getLiveness = params => {
	return UTIL.flirt({
		url: API.liveness,
		data: params
	})
}

export const getYesterdayLiveness = params => {
	return UTIL.flirt({
		url: API.ylra,
		data: params
	})
}

export const checkCollectedLiveness = params => {
	return UTIL.flirt({
		url: API.icl,
		data: params
	})
}

export const xiaoIceApi = params => {
	return UTIL.flirt({
		url: "https://pwl.yuis.cc/api",
		data: params
	})
}

export const xiaoIceVip = params => {
	return UTIL.flirt({
		url: "https://pwl.yuis.cc/VIP",
		data: params
	})
}

export const upload = params => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: API.upload,
			filePath: params,
			name: 'file[]',
			header: {
				"enctype": "multipart/form-data"
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

export const getBree = params => {
	return UTIL.flirt({
		url: API.bree,
		data: params
	})
}

export const sendBree = params => {
	return UTIL.flirt({
		url: API.sendBree,
		data: params,
		method: "POST"
	})
}
