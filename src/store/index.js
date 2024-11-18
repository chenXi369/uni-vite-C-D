/**
 * @description 用户信息数据持久化
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLogin: false,  // 防止重复登录model弹出
      token: null,
      userInfo: {},
      barPaddingTop: 8,
      statusBarHeight: 38
    }
  },
  actions: {
    setLoginStatus(isLogin) {
      this.isLogin = isLogin
    },
    setUserInfo(data) {
      this.userInfo = data
    },
    setStatusBarHeight(height) {
      this.statusBarHeight = height
    },
    setBarPaddingTop(paddingTop) {
      this.barPaddingTop = paddingTop
    }
  }
})
