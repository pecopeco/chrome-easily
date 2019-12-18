// 监听元素拖动事件，打开新标签跳转链接
document.ondragend = function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute("href")) {
    window.open(e.target.getAttribute("href"), "_blank")
  }
}