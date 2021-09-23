export default async (dom) => {
  if (dom) {
    if (!document.fullscreenElement) {
      try {
        if (dom.requestFullscreen) {
          await dom.requestFullscreen()
        } else if (dom.webkitRequestFullScreen) {
          await dom.webkitRequestFullScreen()
        } else if (dom.mozRequestFullScreen) {
          await dom.mozRequestFullScreen()
        } else if (dom.msRequestFullscreen) {
          await dom.msRequestFullscreen()
        } else {
          this.$msg.error('不支持全屏')
        }
      } catch (e) {
        this.$msg.error('无法进入全屏')
      }
    } else {
      await document.exitFullscreen()
    }
  }
}
