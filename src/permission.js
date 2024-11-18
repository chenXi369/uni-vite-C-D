import { getToken } from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login/login"

// 页面白名单（默认-首页，店员管理，设置，登录）
const whiteList = [
	'/pages/index/index', '/pages/login/login', '/pages/home/home'
]

// 检查地址白名单
function checkWhite(url) {
	const path = url.split('?')[0]
	return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]

list.forEach(item => {
	uni.addInterceptor(item, {
		invoke(to) {
			if (getToken()) {
				if (to.url === loginPage) {
					uni.reLaunch({
						url: "/"
					})
				}
				return true
			} else {
				if (checkWhite(to.url)) {
					return true
				}
				uni.reLaunch({
					url: loginPage
				})
				return false
			}
		},
		fail(err) {
			console.log(err)
		}
	})
})