<template>
	<view class="tabbar-page">
		<swiper></swiper>
		
		<view class="title-switch flex-between">
			<text class="name">宠物百科</text>
	
			<uni-icons type="images" size="30" v-if="boxMode === 'block'"></uni-icons>
			<uni-icons type="list" size="30" v-else></uni-icons>
		</view>
		<view class="transform-box flex-column" v-if="boxMode === 'block'">
			<view class="top-box">
				
			</view>
			<view class="bottom-box">
				
			</view>
		</view>
		<view class="list-box flex-column" v-else>
			<view class="list-box-item flex">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	const boxMode = ref('block')
</script>

<style lang="scss" scoped>

</style>
