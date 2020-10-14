import Toast from "@/components/common/toast/Toast";
const obj = {}

obj.install = function(Vue) {
  //生成组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 通过构造器实例化出一个组件对象
  const toast = new toastConstructor().$mount()
  // 最后把组件对象的el元素渲染在页面
  document.body.appendChild(toast.$el)

  // 最后再把组件实例绑定在Vue原型链上
  Vue.prototype.$toast = toast;
}

export default obj
