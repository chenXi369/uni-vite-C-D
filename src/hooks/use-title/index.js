/**
 * 标题操作方法
 */
import { useUserStore } from '@/store'

export const useTitle = () => {
  const state = reactive({
    // 导航栏高度
    navBarHeight: 0,
    fixedBar: false
  })

  /**
   * 页面滚动
   */
  const pageScroll = (e) => {
    const { barPaddingTop, statusBarHeight } = useUserStore()

    let scrollTop = e.scrollTop
    if (scrollTop > 20) {
      state.fixedBar = true
      state.navBarHeight = barPaddingTop + statusBarHeight
    } else {
      state.fixedBar = false
      state.navBarHeight = 0
    }
  }

  return {
    ...toRefs(state),
    pageScroll
  }
}