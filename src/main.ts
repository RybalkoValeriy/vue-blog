import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  IconsPlugin,
  BootstrapVue,
  NavbarPlugin,
  LayoutPlugin,
  ModalPlugin,
  TablePlugin,
  FormInputPlugin,
  ToastPlugin,
} from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(TablePlugin);
Vue.use(FormInputPlugin);
Vue.use(ToastPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
