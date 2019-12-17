console.log('This is content!')

let target, x, y

document.ondragend = function (e) {
  console.log('拖动结束', e.target.tagName === 'A')
  if (e.target.tagName === 'A' && e.target.getAttribute("href")) {
    window.open(e.target.getAttribute("href"), "_blank")
  }
}