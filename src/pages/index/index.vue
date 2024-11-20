<template>
  <view class="flex flex-center" style="padding-top: 500rpx;">
    <button class="f-w-bold custom-btn confirm btn" hover-class="active-btn" @click="toHome">点击前往</button>
  </view>
</template>

<script setup>
const toHome = () => {
  uni.switchTab({ url: '/pages/home/home' })
}
</script>

<style lang="scss" scoped>
.btn {
  width: calc(50% - 14rpx);
  height: 88rpx;
  font-size: 32rpx;
  line-height: 88rpx;
  border-radius: 44rpx 44rpx 44rpx 10rpx;
  margin: 0;
}

.confirm {
  width: 400rpx;
  background: $uni-bg-color-primary;
  color: #FFFFFF;
}
</style>