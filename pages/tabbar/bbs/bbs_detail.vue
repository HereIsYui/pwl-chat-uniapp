<template>
	<view class="content">
		<u-toast ref="uToast"></u-toast>
		<u-skeleton :loading="loading" rows="10"></u-skeleton>
		<view class="article_title_box" v-if="!loading">
			{{article.articleTitle}}
		</view>
		<view class="card_header" v-if="!loading">
			<view class="article_auator_box">
				<u--image width="40" height="40" :src="article.articleAuthorThumbnailURL210" shape="square" radius="5"
					:fade="true" duration="200" @click="toUser(article.articleAuthorName,2)"></u--image>
				<view class="article_info_box">
					<view class="article_info">
						{{article.articleAuthorName}}
						<view style="">●</view>
						<u-icon name="eye"></u-icon>
						<view :style="{color:article.articleViewCount > 100 ?'#d23f31':'rgba(0,0,0,.38)'}">
							{{article.articleViewCntDisplayFormat || article.articleViewCount}}
						</view>
						<view style="">●</view>
						<u-icon name="chat"></u-icon>
						<view>
							{{article.articleCommentCount}}
						</view>
						<view style="">●</view>
						<view>
							{{article.timeAgo}}
						</view>
					</view>
					<view class="article_tag">
						<u-tag v-for="(items,index) in article.articleTagObjs" :key="index" :text="items.tagTitle"
							:type="items.tagTitle == '系统公告' ? 'error' : items == '新人报道' ? 'primary' : 'success'"
							size="mini" class="card_tags">
						</u-tag>
					</view>
				</view>
			</view>
		</view>
		<view class="article_detail" v-if="!loading">
			<mp-html :copy-link="false" :content="article.articleContent" :show-img-menu="false"
				:tag-style="htmlStyle" />
		</view>
		<view class="comments_list" v-if="!loading">
			<view class="comments_title">
				回帖:{{article.articleComments.length}}
			</view>
			<view class="comments_item" v-for="item in article.articleComments" :key="item.oId" v-if="!shieldList.includes(item.commentAuthorName)">
				<view class="comments_user">
					<u--image width="25" height="25" :src="item.commentAuthorThumbnailURL" shape="circle" :fade="true"
						duration="200" @click="toUser(item.commentAuthorName,article.articleAuthorName == item.commentAuthorName ? 2 : 1)"></u--image>
					<view style="margin-left: 10px;">{{item.commentAuthorName}}</view>
					<view style="">●</view>
					<view>{{item.timeAgo}}</view>
					<template v-if="item.sysMetal">
						<image class="sysMetal" v-for="(i,index) in item.sysMetal" :key="index"
							:src="'https://fishpi.cn/gen?scale=0.79&txt=' + i.name+'&' + i.attr" mode="heightFix">
						</image>
					</template>
				</view>
				<view class="comments_inner">
					<mp-html :copy-link="false" :content="item.commentContent" show-img-menu="false" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		articlesDetail,
	} from '../../../utils/api.js'
	import mpHtml from '../../../components/mp-html/mp-html'
	const App = getApp();
	export default {
		data() {
			return {
				apiKey: "",
				oId: "",
				article: null,
				loading: true,
				htmlStyle: {
					h3: "margin:10px 0"
				},
				shieldList: [],
			}
		},
		onLoad(option) {
			this.oId = option.oId || "1631779202219";
			this.apiKey = App.globalData.apiKey || uni.getStorageSync('apiKey');
			this.GetArticlesDetail()
		},
		onShow(){
			let shieldList = uni.getStorageSync("shieldList") || "[]";
			shieldList = JSON.parse(shieldList);
			this.shieldList = shieldList;
		},
		methods: {
			toUser(userName, type) {
				uni.navigateTo({
					url: "../../chat/userInfo?BBSType=" + type + "&user=" + userName,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			GetArticlesDetail() {
				articlesDetail({
					oId: this.oId,
					apiKey: this.apiKey
				}).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.article = res.data.article;
						this.loading = false;
					} else {
						this.$refs.uToast.show({
							type: 'error',
							message: "帖子列表加载失败",
							iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 15px;
		box-sizing: border-box;

		.article_title_box {
			font-size: 22px;
			font-weight: bold;
		}

		.card_header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px 0;
			font-size: 12px;
			border-bottom: 1px solid #f6f6f6;

			.article_auator_box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin: 10px 0;
			}

			.article_auator_name {
				margin-left: 5px;
			}

			.article_info_box {
				margin-left: 5px;

				.article_info {
					display: flex;
					margin-bottom: 5px;
				}

				.article_tag {
					display: flex;

					.card_tags {
						margin-right: 2px;
					}
				}
			}
		}

		.article_detail {
			font-size: 14px;
			padding: 15px 0;
			border-bottom: 1px solid #f6f6f6;
		}

		.comments_list {

			.comments_title {
				padding: 10px;
				margin: 0 -15px;
				background: #f7f7f7;
				border-bottom: 1px solid #eee;
				box-sizing: border-box;
			}

			.comments_item {
				padding: 10px 0;
				border-bottom: 1px solid #f0f0f0;

				.comments_user {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;
					font-size: 12px;

					.sysMetal {
						height: 30px;
					}
				}

			}

			.comments_inner {
				padding: 10px 0;
				min-height: 60px;
			}
		}
	}
</style>
