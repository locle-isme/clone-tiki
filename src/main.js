import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons )
import './assets/css/bootstrap.css'
import './assets/css/all.css'
import './assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
