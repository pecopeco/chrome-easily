console.log('This is content!')

document.ondragend = function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute("href")) {
    window.open(e.target.getAttribute("href"), "_blank")
  }
}