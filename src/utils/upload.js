/**
 * 下载模板
 * @param url  下载模板接口
 */
export function downLoad(url) {
  let point = ''
  if (process.env.NODE_ENV === 'development') {
    point = window.location.origin + '/api' + url
  } else {
    point = window.location.origin + url
  }
  return point
}

export function upLoad() {

}
