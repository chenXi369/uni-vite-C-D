import { useUserStore } from '@/store'
// 请求状态错误
export const httpLogError = (error, msg) => {
  error.message = msg
  uni.showToast({
    title: msg,
    icon: 'error',
    duration: 2000
  })
}

// api请求错误
export const requestError = (response) => {
  return new Promise((_, reject) => {
    const { data } = response
    const msg = `${data.msg}`
    uni.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
    reject(data)
  })
}

// 登录失效
export const throttleToLogin = () => {
  const userStore = useUserStore()

  if (!userStore.isLogin) {
    userStore.setLoginStatus(true)
    uni.showModal({
      title: '登录失效',
      content: '请重新登录',
      showCancel: false,
      success: () => {
        uni.clearStorageSync()
        userStore.setLoginStatus(false)
        uni.reLaunch({ url: '/pages/login/login' })
      }
    })
  } else {
    return false
  }
}