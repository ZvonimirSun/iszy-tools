const breakPoint = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
}

export const spanDirective = {
  mounted (el, binding) {
    console.log(el)
    console.log(binding)
    console.log(breakPoint)
  }
}

export default {
  install: (Vue) => {
    Vue.directive('span', spanDirective)
  }
}
