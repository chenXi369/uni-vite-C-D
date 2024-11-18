<template>
  <!-- #ifndef H5 -->
  <view class="cu-title" :style="[{height:CustomBar + 'px'}]">
    <view class="cu-bar fixed" :style="style">
      <view class="action" @tap="toBackPage" v-if="isBack && pageLength > 1">
        <text class="cuIcon-left back-icon" :style="{'background': bgColor === '' && initBackBg ? 'rgba(0, 0, 0, 0.3)' : ''}"></text>
        <slot name="backText"></slot>
      </view>
      <view class="action" @tap="toBackHome" v-else-if="isBack && pageLength === 1">
        <text class="cuIcon-left back-icon" :style="{'background': bgColor === '' && initBackBg ? 'rgba(0, 0, 0, 0.3)' : ''}"></text>
        <slot name="backText"></slot>
      </view>
      <view class="content" :style="{top: StatusBar + 'px',opacity: bgColor === '' && hiddenInitTitle ? '0' : '1'}">
        <slot name="content"></slot>
      </view>
      <slot name="right"></slot>
    </view>
  </view>
  <!-- #endif -->
</template>

<script setup>
const { proxy } = getCurrentInstance()

const props = defineProps({
  bgColor: {
    default: ''
  },
  isBack: {
    type: Boolean,
    default: false
  },
  hiddenInitTitle: {
    type: Boolean,
    default: false
  },
  initBackBg: {
    type: Boolean,
    default: false
  }
})

const pageLength = computed(() => getCurrentPages().length)

const style = computed(() => {
  let style = `height:${proxy.CustomBar}px;padding-top:${proxy.StatusBar}px;`
  if (props.bgColor) {
    style = `${style}background-color:${props.bgColor};`
  }
  return style
})

const toBackPage = () => {
  if (pageLength < 2 && 'undefined' !== typeof __wxConfig) {
    let url = '/' + __wxConfig.pages[0]
    return uni.redirectTo({
      url
    })
  }
  uni.navigateBack({
    delta: 1
  })
}

const toBackHome = () => {
  uni.switchTab({
    url: '/pages/tabbar/home'
  })
}
</script>

<style>
.cu-title {
  display: block;
  position: relative;
}

.cu-title .cu-bar .content {
  width: calc(100% - 440rpx);
}

.cu-title .cu-bar .content image {
  height: 60rpx;
  width: 240rpx;
}

.cu-title .cu-bar {
  min-height: 0px;
  /* #ifdef MP-WEIXIN */
  padding-right: 220rpx;
  /* #endif */
  box-shadow: 0rpx 0rpx 0rpx;
  z-index: 9999;
}

.cu-bar {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 100rpx;
  justify-content: space-between;
}

.cu-bar .action {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  max-width: 100%;
}

.cu-bar .action:first-child {
  margin-left: 30rpx;
  font-size: 30rpx;
}

.cu-bar .action:first-child>text[class*="cuIcon-"] {
  margin-left: calc(-0.3em - 10rpx);
  margin-right: 0.3em;
  border-radius: 50%;
  padding: 10rpx;
}

.cu-bar .action:last-child {
  margin-right: 30rpx;
}

.cu-bar .action>text[class*="cuIcon-"] {
  font-size: 36rpx;
}

.cu-bar .content {
  position: absolute;
  text-align: center;
  width: calc(100% - 340rpx);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 60rpx;
  font-size: 32rpx;
  line-height: 60rpx;
  cursor: none;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cu-bar.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1024;
}
</style>

<style lang="scss">
.cu-title {
  .back-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 56rpx;
    height: 56rpx;
  }
}
</style>