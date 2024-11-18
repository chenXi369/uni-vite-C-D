export default {
	OSS_URL: 'https://juyang.oss-cn-hangzhou.aliyuncs.com/',

	// #ifndef H5
	APP_ID: uni.getAccountInfoSync().miniProgram.appId,
	// #endif

	// #ifdef H5
	BASE_API: window.location.protocol + '//' + window.location.host + (process.env.NODE_ENV === 'development' ?
		'/dev-api' : ''),
	// #endif
	// #ifndef H5
	BASE_API: import.meta.env.VITE_APP_BASE_API,
	BASE_H5_URL: import.meta.env.VITE_APP_BASE_H5_URL,
	// #endif
	ShowDots: {
		ALWAYS: {
			key: 'always'
		},
		MORE: {
			key: 'more'
		},
		NEVER: {
			key: 'never'
		}
	}
}