import dialog from './dialog'

let Myplugin = {}
Myplugin.install = function (Vue, options) {
  Vue.download = function () {
    location.href = options
  }

  Vue.component('g-dialog', dialog)
}

export default Myplugin
