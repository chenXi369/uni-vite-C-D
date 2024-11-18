<template>
  <view class="cu-empty" :style="{'padding': `${page ? 200 : 40}rpx 0`}">
    <view class="empty-img" :style="{'width': (385 / 10) * rate + 'rpx', 'height': (312 / 10) * rate + 'rpx'}">
      <image :src="emptyImg" />
    </view>
    <view class="empty-description">{{ description }}</view>
  </view>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const props = defineProps({
  description: {
    type: String,
    default: ''
  },
  page: {
    type: Boolean,
    default: false
  },
  imgSrc: {
    type: String,
    default: () => {
		  return `resource/202406/17185269699b6e3619645d4584b10aa28aa4b4015d.png?Expires=2556057600&OSSAccessKeyId=LTAI5tCPGkdfS3ZCv6VNoRCp&Signature=1rJCONdFadd77vSxUXFJHfmvx4k%3D`
	  }
  },
  rate: {
    type: Number,
    default: 10
  }
})
const emptyImg = computed(() => {
  return props.imgSrc.indexOf('http') === -1 ? 
	(proxy.$consts.OSS_URL + props.imgSrc) : props.imgSrc;
})
</script>

<style lang="scss">
.cu-empty {
  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-img {
    image {
      width: 100%;
      height: 100%;
    }
  }
  .empty-description {
    font-size: 24rpx;
    color: $uni-text-color-grey;
    margin-top: 60rpx;
  }
}
</style>