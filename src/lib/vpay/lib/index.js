import vpay from './pay'

const myPlugin = {
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数能够插件的自定义参数
  install (Vue, options) {
    // 将其注册为vue的组件，'vpay'是组件名，keyboard是咱们开发的组件
    Vue.component('vpay', vpay)
  }
}
export default myPlugin
