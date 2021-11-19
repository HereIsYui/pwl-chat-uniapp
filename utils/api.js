const baseURL =  "https://pwl.icu"
const baaseWS = "wss://pwl.icu"
const API = {
	getKey: baseURL + "/api/getKey",
	checkUser: baseURL + "/api/user",
	emotions:baseURL + "/users/emotions",
	liveness:baseURL + "user/liveness",
	more: baseURL + "/chat-room/more",
	send:baseURL + "/chat-room/send",
	delete:baseURL + "/chat-room/revoke/", ///chat-room/revoke/{消息oId}
	open : baseURL + "/chat-room/red-packet/open",
	
}
const WS = {
	channel: baaseWS + "/chat-room-channel",
}

module.exports = {
	API,
	WS
}