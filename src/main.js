import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"  //css初始化
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
})

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
