<template>
	<view class="redpacketBox">
		<view class="rpTitle">
			<view class="borderLine" :style="{left:index * 20 + '%'}"></view>
			<view class="rpItem" @click="changeType(0,'random')" :class="index == 0 ? 'active' : ''">拼手气</view>
			<view class="rpItem" @click="changeType(1,'average')" :class="index == 1 ? 'active' : ''">普通红包</view>
			<view class="rpItem" @click="changeType(2,'specify')" :class="index == 2 ? 'active' : ''">专属红包</view>
			<view class="rpItem" @click="changeType(3,'heartbeat')" :class="index == 3 ? 'active' : ''">心跳红包</view>
			<view class="rpItem" @click="changeType(4,'rockPaperScissors')" :class="index == 4 ? 'active' : ''">猜拳红包</view>			
		</view>
		<view class="rpForm" :style="{left: -index * 100 + 'vw'}">
			<view class="rpFromItem">
				<view class="formItem">
					<view class="rpLabel">积分:</view>
					<input type="number" v-model="redpacket.money" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">个数:</view>
					<input type="number" v-model="redpacket.count" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">留言:</view>
					<input type="text" v-model="redpacket.msg" :placeholder="defaultRedpackWord['random']"
						class="rpInput" maxlength="12" />
				</view>
			</view>
			<view class="rpFromItem">
				<view class="formItem">
					<view class="rpLabel">积分:</view>
					<input type="number" v-model="redpacket.money" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">个数:</view>
					<input type="number" v-model="redpacket.count" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">留言:</view>
					<input type="text" v-model="redpacket.msg" :placeholder="defaultRedpackWord['average']"
						class="rpInput" maxlength="12" />
				</view>
			</view>
			<view class="rpFromItem">
				<view class="formItem">
					<view class="rpLabel">积分:</view>
					<input type="number" v-model="redpacket.money" class="rpInput" />
				</view>
				<view class="formItem no-flex">
					<view class="formItem">
						<view class="rpLabel">发给谁:</view>
						<view class="rpInput avatarItemBox">
							<view class="avatarItem" v-for="(item,index) in checkedUserAvatar" :key="index">
								<image :src="item" mode="aspectFill" class="avatarItem"></image>
							</view>
						</view>
					</view>
					<view class="userListBox">
						<checkbox-group @change="selectUser" class="userList">
							<label class="userItem" v-for="(item,index) in users" :key="index">
								<view>
									<checkbox :value="item.userName + ',' + item.userAvatarURL"
										:checked="item.checked" />
								</view>
								<view>{{item.userName}}</view>
							</label>
						</checkbox-group>
					</view>
				</view>
				<view class="formItem">
					<view class="rpLabel">个数:</view>
					<input type="number" v-model="redpacket.count" disabled class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">留言:</view>
					<input type="text" v-model="redpacket.msg" :placeholder="defaultRedpackWord['specify']"
						class="rpInput" maxlength="12" />
				</view>
			</view>
			<view class="rpFromItem">
				<view class="formItem">
					<view class="rpLabel">积分:</view>
					<input type="number" v-model="redpacket.money" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">个数:</view>
					<input type="number" v-model="redpacket.count" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">留言:</view>
					<input type="text" v-model="redpacket.msg" :placeholder="defaultRedpackWord['heartbeat']"
						class="rpInput" maxlength="12" />
				</view>
			</view>
			<view class="rpFromItem">
				<view class="formItem">
					<view class="rpLabel">猜拳:</view>
					<u-radio-group v-model="redpacket.gesture" placement="row" @change="selectGame">
						<u-radio shape="square" :customStyle="{marginRight: '10px'}" activeColor="red" labelColor="#f0f0f0" label="石头 " :name="0"></u-radio>
						<u-radio shape="square" :customStyle="{marginRight: '10px'}" activeColor="red" labelColor="#f0f0f0" label="剪刀 " :name="1"></u-radio>
						<u-radio shape="square" :customStyle="{marginRight: '10px'}" activeColor="red" labelColor="#f0f0f0" label="布 " :name="2"></u-radio>
					</u-radio-group>
				</view>
				<view class="formItem">
					<view class="rpLabel">积分:</view>
					<input type="number" v-model="redpacket.money" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">个数:</view>
					<input type="number" v-model="redpacket.count" class="rpInput" />
				</view>
				<view class="formItem">
					<view class="rpLabel">留言:</view>
					<input type="text" v-model="redpacket.msg" :placeholder="defaultRedpackWord['heartbeat']"
						class="rpInput" maxlength="12" />
				</view>
			</view>
		</view>
		<view class="btnGroup">
			<!-- <view class="btn warning" @click="send(false)">十连发</view> -->
			<view class="btn success" @click="send(true)">发送</view>
		</view>
	</view>
</template>

<script>
	import {
		send
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				apiKey: "",
				index: 0,
				left: 25,
				redpacket: {
					type: "",
					money: 32,
					count: 2,
					msg: "",
					gesture: 0,
					recivers: []
				},
				defaultRedpackWord: {
					random: '摸鱼者，事竟成！',
					average: '平分红包，人人有份！',
					specify: '试试看，这是给你的红包吗？',
					heartbeat: '玩的就是心跳！',
					rockPaperScissors: '石头剪刀布！'
				},
				users: [],
				checkedUserAvatar: []
			}
		},
		onLoad(option) {
			this.apiKey = option.apiKey;
		},
		created() {
			let users = uni.getStorageSync('users')
			if (users) {
				users = JSON.parse(users)
				users.forEach(item => {
					item.checked = false;
				})
				this.users = users;
			}
			console.log(users)
		},
		methods: {
			send(isOne) {
				let data = this.redpacket;
				if (data.money < 32) {
					uni.showToast({
						title: '太抠了！至少要发32积分',
						icon: "none",
						duration: 2000
					});
					return;
				} else {
					if (data.money > 20000) {
						data.money = 2000
					}
				}
				if (data.count < 1) {
					uni.showToast({
						title: '太抠了！至少要发1个',
						icon: "none",
						duration: 2000
					});
					return;
				}
				if (data.type == "specify" && data.recivers.length < 1) {
					uni.showToast({
						title: '专属红包至少要选1人',
						icon: "none",
						duration: 2000
					});
					return;
				}
				if (data.msg == "") {
					data.msg = this.defaultRedpackWord[data.type];
				}
				let msg = `[redpacket]${JSON.stringify(data)}[/redpacket]`
				if (isOne) {
					this.sendMsg(msg)
				} else {
					for (let i = 0; i < 10; i++) {
						this.sendMsg(msg)
					}
				}
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
			sendMsg(msg) {
				send({
					content: msg,
					apiKey: this.apiKey
				})
			},
			selectUser(e) {
				let list = e.detail.value;
				let recivers = [];
				let checkedUserAvatar = [];

				list.forEach(item => {
					let items = item.split(",")
					recivers.push(items[0])
					let avatar = encodeURI(items[1])
					avatar = btoa(avatar);
					checkedUserAvatar.push(`https://pwl.yuis.cc/GetImage?url=${avatar}`)
				})
				this.redpacket.recivers = recivers;
				this.redpacket.count = recivers.length;
				this.checkedUserAvatar = checkedUserAvatar;
				// console.log(e.detail.value)
			},
			selectGame(e) {
				this.redpacket.gesture = e;
			},
			changeType(value, type) {
				this.index = value;
				this.redpacket.type = type;
				if (type == "specify") {
					this.redpacket.count = this.redpacket.count.length;
				} else {
					this.redpacket.count = 2;
				}
				// this.redpacket.msg = this.defaultRedpackWord[type];
			}
		}

	}
</script>

<style scoped>
	.redpacketBox {
		width: 100vw;
		height: 100vh;
		background-color: #3b3e43;
		color: #fff;
	}

	.rpTitle {
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 40px;
	}

	.rpItem {
		width: 25%;
		height: 30px;
		text-align: center;
		line-height: 30px;
	}

	.borderLine {
		position: absolute;
		top: 35px;
		width: 20%;
		height: 4px;
		background-color: #666;
		border-radius: 5px;
		transition: .2s;
	}

	.rpForm {
		position: relative;
		width: 500vw;
		left: 0;
		display: flex;
		transition: .2s;
	}

	.rpFromItem {
		width: 100vw;
		padding: 15px;
		box-sizing: border-box;
	}

	.formItem {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 10px 0;
	}

	.rpLabel {
		width: 60px;
		text-align: left;
	}

	.rpInput {
		width: calc(100% - 60px);
		height: 30px;
		border: 1px solid #666;
		padding: 5px 10px;
		box-sizing: border-box;
	}

	.no-flex {
		display: block;
	}

	.avatarItemBox {
		display: flex;
		align-items: center;
		border: none;
		height: 50px;
		flex-wrap: wrap;
		overflow-y: scroll;
	}

	.avatarItem {
		width: 30px;
		height: 30px;
		margin: 2px;
	}

	.userListBox {
		height: 100px;
		overflow-y: scroll;
	}

	.userList {
		display: flex;
		flex-wrap: wrap;
	}

	.userItem {
		min-width: 50%;
		max-width: 50%;
		display: flex;
		align-items: center;
	}

	.btnGroup {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.btn {
		width: 30vw;
		height: 40px;
		padding: 0 15px;
		margin: 0 20px;
		line-height: 40px;
		text-align: center;
		border-radius: 5px;
		color: #fff;
		box-sizing: border-box;
	}

	.success {
		background-color: #60b044;
	}

	.warning {
		background-color: #E6A23C;
	}
</style>
