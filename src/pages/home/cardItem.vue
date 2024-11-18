<template>
  <view class="card-item flex-column">
    <view class="card-item__top flex-between">
      <text class="title">{{ rowData.name }}</text>
      <text class="status">{{ rowData.processStatus }}</text>
    </view>

    <view class="label-value">
      <text class="label">发起人</text>
      <text>{{ rowData.applyName }}</text>
    </view>
    <view class="label-value">
      <text class="label">发起时间</text>
      <text>{{ rowData.applyTime }}</text>
    </view>
    <view class="label-value">
      <text class="label">所属部门</text>
      <text>{{ rowData.applyUserOrg }}</text>
    </view>
    <view class="label-value">
      <text class="label">处理人</text>
      <text>{{ rowData.applyName }}</text>
    </view>

    <view class="check-time">审批时间：{{ rowData.arriveTime }}</view>
  </view>
</template>

<script setup>
const props = defineProps({
  rowData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="scss" scoped>
.card-item {
  width: 100%;
  padding: 30rpx 40rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border-bottom: 1rpx solid #eaeaea;

  &__top {
    align-items: center;

    .title {
      font-size: 34rpx;
      font-weight: 500;
      color: #333333;
      width: calc(100% - 100rpx);
    }

    .status {
      width: 80rpx;
      height: 30rpx;
      font-size: 20rpx;
      border-radius: 6rpx;
      line-height: 30rpx;
      border-radius: 4rpx;
      background: #1890FF20;
      color: #1890FF;
      margin-left: 20rpx;
      display: inline-block;
      text-align: center;
    }
  }

  .label-value {
    margin-top: 20rpx;
    color: #949494;
    font-size: 24rpx;
    font-weight: 400;

    .label {
      margin-right: 30rpx;
    }
  }

  .check-time {
    font-size: 24rpx;
    font-weight: 500;
    color: #333333;
    margin-top: 20rpx;
    width: 100%;
    height: 50rpx;
    line-height: 50rpx;
    border-radius: 8rpx;
    background: #eaeaea;
    padding-left: 20rpx;
    position: relative;
    text-indent: 36rpx;

    &::before {
      content: '';
      display: inline-block;
      width: 26rpx;
      height: 26rpx;
      line-height: 50rpx;
      border-radius: 50%;
      background: url('/static/images/time-icon.png') no-repeat;
      background-size: 100%;
      margin-right: 10rpx;
      position: absolute;
      left: 20rpx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>