<template>
	<view class="content">
		<u-toast ref="uToast"></u-toast>
		<u-sticky bgColor="#fff">
			<u-tabs :list="list" @click="tabsClick" :scrollable="false" lineColor="#60b044"></u-tabs>
		</u-sticky>
		<scroll-view scroll-y class="article_list" lower-threshold="100" @scrolltolower="loadPage()">
			<view class="card" v-for="(item,index) in articlesList" :key="item.oId" @click="toDetail(item.oId)">
				<view class="card_title">
					{{item.articleTitle}}
					<u-icon v-if="item.articleStick" color="#000" name="pushpin-fill"></u-icon>
				</view>
				<view class="card_header">
					<view class="article_auator_box">
						<u--image width="20" height="20" :src="item.articleAuthorThumbnailURL210" shape="circle"
							:fade="true" duration="200"></u--image>
						<view class="article_auator_name">
							{{item.articleAuthorName}}
						</view>
					</view>
					<view class="article_info">
						<u-icon name="eye"></u-icon>
						<view :style="{color:item.articleViewCount > 100 ?'#d23f31':'rgba(0,0,0,.38)'}">
							{{item.articleViewCntDisplayFormat || item.articleViewCount}}
						</view>
						<view style="">●</view>
						<u-icon name="chat"></u-icon>
						<view>
							{{item.articleCommentCount}}
						</view>
					</view>
				</view>
				<view class="card_detail">
					{{item.articlePreviewContent}}
				</view>
				<view class="card_footer">
					<u-tag v-for="(items,index) in item.articleTagObjs" :key="index" :text="items.tagTitle"
						:type="items.tagTitle == '系统公告' ? 'error' : items == '新人报道' ? 'primary' : 'success'" size="mini"
						class="card_tags">
					</u-tag>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		articlesList,
		articlesListHot,
		articlesListGood,
		articlesListReply
	} from '../../../utils/api.js'
	const App = getApp();
	export default {
		data() {
			return {
				apiKey: "",
				page: 1,
				size: 20,
				list: [{
					name: "最近"
				}, {
					name: "热门"
				}, {
					name: "点赞"
				}, {
					name: "最新回复"
				}],
				articlesList: [],
				current: 0,
			}
		},
		onLoad() {
			this.apiKey = App.globalData.apiKey || uni.getStorageSync('apiKey');
			this.GetArticlesList()
		},
		methods: {
			GetArticlesList() {
				articlesList({
					apiKey: this.apiKey,
					p: this.page,
					size: this.size
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.articlesList = this.articlesList.concat(res.data.articles);
					} else {
						this.$refs.uToast.show({
							type: 'error',
							message: "帖子列表加载失败",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
						})
					}
				})
			},
			GetArticlesListHot() {
				articlesListHot({
					apiKey: this.apiKey,
					p: this.page,
					size: this.size
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.articlesList += res.data.articles;
					} else {
						this.$refs.uToast.show({
							type: 'error',
							message: "帖子列表加载失败",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
						})
					}
				})
			},
			GetArticlesListGood() {
				articlesListGood({
					apiKey: this.apiKey,
					p: this.page,
					size: this.size
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.articlesList += res.data.articles;
					} else {
						this.$refs.uToast.show({
							type: 'error',
							message: "帖子列表加载失败",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
						})
					}
				})
			},
			GetArticlesListReply() {
				articlesListReply({
					apiKey: this.apiKey,
					p: this.page,
					size: this.size
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.articlesList += res.data.articles;
					} else {
						this.$refs.uToast.show({
							type: 'error',
							message: "帖子列表加载失败",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
						})
					}
				})
			},
			tabsClick(e) {
				let index = e.index;
				this.current = index;
				this.articlesList = [];
				this.page = 1;
				switch (index) {
					case 0:
						this.GetArticlesList()
						break;
					case 1:
						this.GetArticlesListHot()
						break;
					case 2:
						this.GetArticlesListGood()
						break;
					case 3:
						this.GetArticlesListReply()
						break;
					default:
						// this.GetArticlesList()
						break;
				}
			},
			loadPage() {
				console.log("loadMore")
				this.page = this.page + 1;
				switch (this.current) {
					case 0:
						this.GetArticlesList()
						break;
					case 1:
						this.GetArticlesListHot()
						break;
					case 2:
						this.GetArticlesListGood()
						break;
					case 3:
						this.GetArticlesListReply()
						break;
					default:
						break;
				}
			},
			toDetail(oId) {
				uni.navigateTo({
					url: "./bbs_detail?oId=" + oId
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		box-sizing: border-box;
		background: #f6f6f6;

		.article_list {
			padding: 0 15px;
			box-sizing: border-box;
			height: calc(100vh - 45px);
			.card {
				margin: 10px 0;
				padding: 10px;
				background: #ffffff;
				border-radius: 5px;

				.card_title {
					display: flex;
					padding-bottom: 10px;
					font-size: 16px;
					font-weight: bold;
					border-bottom: 1px solid #f6f6f6;
				}

				.card_header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 5px 0;
					font-size: 12px;

					.article_auator_box {
						display: flex;
						justify-content: flex-start;
						align-items: center;
					}

					.article_auator_name {
						margin-left: 5px;
					}

					.article_info {
						display: flex;
						color: rgba(0, 0, 0, .38);
					}
				}

				.card_detail {
					font-size: 12px;
					margin: 10px 0;
				}

				.card_footer {
					display: flex;

					.card_tags {
						margin-right: 2px;
					}
				}
			}
		}

	}
</style>
