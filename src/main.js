import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
// pinia数据持久化
import { createUnistorage } from 'pinia-plugin-unistorage'

import consts from '@/utils/const.js'
import currencyFormatter from '@/plugins/currency-formatter.js'
import tool from '@/plugins/tool.js'

import './permission' // permission

// 引入全局组件
import HeaderTitle from '@/components/HeaderTitle/index.vue'

export function createApp() {
	const app = createSSRApp(App)
  app.component('HeaderTitle', HeaderTitle)

  app.config.globalProperties.$consts = consts
  app.use(currencyFormatter)
  app.use(tool)

	const store = Pinia.createPinia()
    store.use(createUnistorage())
    app.use(store)

	return {
		app,
		Pinia
	}
}
