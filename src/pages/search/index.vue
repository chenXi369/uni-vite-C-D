<template>
  <view class="search-back flex flex-between">
    <view class="back-area flex-center" @click="back">
      <uni-icons type="left" size="28"></uni-icons>
    </view>
    
    <view class="search-box">
      <uni-search-bar class="search-box" radius="100" bgColor="#f5f5f5" placeholder="搜索流程名称" clearButton="none"
        cancelButton="none" @confirm="confirmSearch" />
    </view>
  </view>
  <view class="main">
    <view class="flex-box">
      <view class="title">审车须知</view>

      <view class="p1" v-for="item in regulationArr" :key="item.id">
        <view class="name" @click="item.isExpand = !item.isExpand">{{ item.name }}</view>

        <view class="tips" v-show="item.isExpand">
          <view class="tip" v-for="tip in item.tips" :key="tip">{{ tip }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { regulations } from './emun'

const regulationArr = ref([...regulations])
const back = () => {
  uni.navigateBack({
    delta: 1
  })
}

const confirmSearch = () => {
  console.log('搜索')
}
</script>

<style lang="scss" scoped>
.back-area {
  width: 80rpx;
  height: 100rpx;
}

.search-box {
  width: calc(100% - 20rpx);
}

.main {
  margin-top: 30rpx;
  height: calc(100vh - 140rpx);

  .title {
    font-size: 28rpx;
    font-weight: 600;
    color: #333333;
    margin-left: 30rpx;
  }
}
</style>