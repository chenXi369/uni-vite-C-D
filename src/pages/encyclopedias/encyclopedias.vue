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
        <uni-transition :show="true" :mode-class="['fade', `slide-${pageClassNames[0].blockMode}`]">
          <view class="trans-left-to-right" :style="{'width': pageClassNames[0].width, 'height': pageClassNames[0].height}">
            <text>{{ pageClassNames[0].name }}</text>
          </view>
        </uni-transition>

        <uni-transition :show="true" :mode-class="['fade', `slide-${pageClassNames[1].blockMode}`]">
          <view class="trans-right-to-left flex flex-column">
            <view class="mini-block" :style="{'width': pageClassNames[1].width, 'height': pageClassNames[1].height}">
              <text>{{ pageClassNames[1].name }}</text>
            </view>
            <view class="large-block" :style="{'width': pageClassNames[2].width, 'height': pageClassNames[2].height}">
              <text>{{ pageClassNames[2].name }}</text>
            </view>
          </view>
        </uni-transition>
      </view>
      <view class="bottom-box">
        <uni-transition :show="true" :mode-class="['fade', `slide-${pageClassNames[3].blockMode}`]">
          <view class="trans-left-to-right" :style="{'width': pageClassNames[3].width, 'height': pageClassNames[3].height}">
            <text>{{ pageClassNames[3].name }}</text>
          </view>
        </uni-transition>
        <uni-transition :show="true" :mode-class="['fade', `slide-${pageClassNames[4].blockMode}`]">
          <view class="trans-right-to-left flex flex-column">
            <view class="mini-block" :style="{'width': pageClassNames[4].width, 'height': pageClassNames[4].height}">
              <text>{{ pageClassNames[4].name }}</text>
            </view>
            <view class="large-block" :style="{'width': pageClassNames[5].width, 'height': pageClassNames[5].height}">
              <text>{{ pageClassNames[5].name }}</text>
            </view>
          </view>
        </uni-transition>
      </view>
    </view>
    <view class="list-box flex-column" v-else>
      <uni-transition v-for="item in pageClassNames" :key="item.id" :show="true"
        :mode-class="['fade', `slide-${item.listMode}`]">
        <view class="list-box-item flex">
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
.transform-box {
  width: calc(100vw - 60rpx);
  margin: 0 auto;
  background: #ffffff;

  .top-box,
  .bottom-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30rpx;
  }

  .mini-block {
    border-radius: 12rpx;
    background: #eaeaea;
  }

  .large-block {
    border-radius: 12rpx;
    margin-top: 30rpx;
    background: #eaeaea;
  }

  .trans-left-to-right {
    border-radius: 12rpx;
    background: #eaeaea;
  }

  .trans-right-to-left {
    height: 100%;
    border-radius: 12rpx;
  }
}

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
