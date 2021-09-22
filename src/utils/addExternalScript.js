const added = {}
export const addCesium = function () {
  if (!added.cesium) {
    added.cesium = true
    const cesiumScript = document.createElement('script')
    cesiumScript.src = 'https://cdn.jsdelivr.net/npm/cesium@1.85.0/Build/Cesium/Cesium.js'
    const cesiumStyle = document.createElement('link')
    cesiumStyle.rel = 'stylesheet'
    cesiumStyle.href = 'https://cdn.jsdelivr.net/npm/cesium@1.85.0/Build/Cesium/Widgets/widgets.css'
    document.head.appendChild(cesiumScript)
    document.head.appendChild(cesiumStyle)
  }
}
