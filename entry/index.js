import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import components from '../components/index.js';
import "../resource/less/public.less";
import routes from "../config/routes.js";

Vue.use(VueRouter);
Vue.use(vueResource);
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
});
const route = new VueRouter({
    routes
});

//一定要像下面这样写
new Vue({router:route}).$mount('#app');