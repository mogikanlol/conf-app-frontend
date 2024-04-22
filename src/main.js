// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import vuetify from "./plugins/vuetify";

console.log("qwe")

import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue.config.productionTip = false;

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
console.log("test")
app
            .use(router)
            .use(store)
            .use(vuetify)
            .mount('#app')

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");
