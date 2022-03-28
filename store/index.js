import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		apiKey: "",
		content: [],
		secondMsg:null,
		firstMsg:null,
		xiaoIce:[],
	},
	mutations: {
		setApiKey(state, val) {
			state.apiKey = val;
		},
		setContent(state, val) {
			state.content = val;
		},
		upDateContent(state, val) {
			state.content.push(val);
		},
		setXiaoIce(state, val) {
			state.xiaoIce = val;
		},
		upDateXiaoIce(state, val) {
			state.xiaoIce.push(val);
		},
		setFirstMsg(state, val) {
			state.firstMsg = val;
		},
		setSecondMsg(state, val) {
			state.secondMsg = val;
		},
	},
	actions: {},
	getters: {
		apiKey(state, getters) {
			return state.apiKey
		},
		content(state, getters) {
			return state.content
		},
	}
})
export default store
