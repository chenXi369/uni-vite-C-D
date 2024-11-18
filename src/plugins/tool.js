export const tool = {
  formatRichText(html) {
    const regex = /<a\b[^>]*>(.*?)<\/a>/g;
    return html && html.replace(/<img[^>]*>/gi, function(match, capture) {
        return match.replace(/style=".*"/gi, '').replace(/style='.*'/gi, '')
      }).replace(/\<img/gi, '<img style="width:100%;display:block;"')
      .replace(/&nbsp;/g, '\xa0').replace(/&amp;/g, '&')
  },
  hexToRGB(hex) {
    hex = hex.replace('#', '')
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
    }
  },
  // 复制到剪切板
  copyData(data) {
    if (!data) {
      return
    }
    let dataArray = Array.isArray(data) ? data : [data]
    if(data.length > 0) {
    	uni.setClipboardData({
    		data: dataArray.join(','),
    		success: function () {
    			uni.showToast({ title: '已复制', icon: 'none' })
    		}
    	});
    }
  },
  openLocation({
    latitude,
    longitude,
    scale = 18,
    name,
    address
  }) {
    uni.showLoading({
      title: '加载中...',
      mask: true
    })
    uni.openLocation({
      latitude,
      longitude,
      scale,
      name,
      address,
      complete: () => {
        setTimeout(() => {
          uni.hideLoading()
        }, 500)
      }
    })
  }
}

export default {
	install: (app) => {
		app.config.globalProperties.$tool = tool
	}
}