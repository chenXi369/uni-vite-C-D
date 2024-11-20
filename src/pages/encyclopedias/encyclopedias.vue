<template>
	<view class="page-container">
		<swiper></swiper>
		
		<view class="title-switch flex-between">
			<text class="name">宠物百科</text>
			
			<uni-icons type="list" size="30" @tap="changeMode('list')" v-if="boxMode === 'block'"></uni-icons>
			<uni-icons type="images" size="30" @tap="changeMode('block')" v-else></uni-icons>
		</view>
		<view class="transform-box flex-column" v-if="boxMode === 'block'">
			<view class="top-box">
				<view class="trans-left-to-right"></view>
				<view class="trans-right-to-left">
					<view class="mini-block">
						
					</view>
					<view class="large-block">
						
					</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="trans-left-to-right"></view>
				<view class="trans-right-to-left">
					<view class="large-block">
						
					</view>
					<view class="mini-block">
						
					</view>
				</view>
			</view>
		</view>
		<view class="list-box flex-column" v-else>
			<uni-transition v-for="item in pageClassNames" :key="item.id" :show="true" 
				:mode-class="['fade', `slide-${item.transMode}`]">
				<view  class="list-box-item flex">
					<text>{{ item.name }}</text>
				</view>
			</uni-transition>
		</view>
	</view>
</template>

<script setup>
	import { pageClassNames } from './enum.js'
	
	const boxMode = ref('block')  // 模式选择
	const showTrans = ref(false)
	
	const changeMode = (type) => {
		boxMode.value = type
		
		setTimeout(() => {
			if (type === 'list') showTrans.value = true
			else showTrans.value = false
		}, 300)
	}
</script>

<style lang="scss" scoped>
	.list-box {
		width: calc(100vw - 60rpx);
		margin: 0 auto;
		
		.list-box-item {
			width: 100%;
			height: 120rpx;
			border-radius: 12rpx;
			margin-top: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #eaeaea;
		}
	}
</style>
