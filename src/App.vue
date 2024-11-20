<script>
	import {
		useUserStore
	} from './store'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(res) {
					console.log('uni-app当前版本为:' + res.uniCompileVersion)
					console.log('当前设备为：' + res.deviceModel)
					console.log('当前系统为：' + res.system)
					console.log('当前设备的安全区域为：' + res.safeArea.top)
					console.log('当前设备的状态栏高度为：' + res.statusBarHeight)
					console.log('当前设备胶囊信息为：' + res.statusBarHeight)
				}
			})

			// #ifdef MP-WEIXIN
			const barPadding = wx.getMenuButtonBoundingClientRect().top
			const statusBarHeight = wx.getMenuButtonBoundingClientRect().height

			const userStore = useUserStore()
			userStore.setStatusBarHeight(statusBarHeight)
			userStore.setBarPaddingTop(barPadding)
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './assets/scss/index.scss';

	/* #ifdef H5 */
	uni-page-body {
		font-family: PingFang SC;
		background: #FFFFFF;
	}

	.uni-tabbar {
		display: none;
	}

	/* #endif */
	/* #ifdef MP-WEIXIN */
	page {
		font-family: PingFang SC;
		background: #FAFAFA;
	}
	/* #endif */
	.page-container {
		height: 100%;
		text-align: center;
		overflow-y: scroll;
		/* 使得内容可以滚动 */
		-webkit-overflow-scrolling: touch;
		/* 启用平滑滚动 */
		/**
		  关于使用constant(safe-area-inset-bottom)、env(safe-area-inset-bottom)
		  会返回底部安全区的高度
		  两个方法都写，会自动选择能够生效的来使用
		  可以使用calc方法来计算，根据实际情况灵活使用
		*/
		padding-bottom: calc(0rpx + constant(safe-area-inset-bottom));
		padding-bottom: calc(0rpx + env(safe-area-inset-bottom));
	}

	// 按钮样式（hover-class）
	.active-btn {
		opacity: 0.5;
	}
</style>