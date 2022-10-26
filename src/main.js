import Vue from "vue";
import vuetify from "./plugins/vuetify";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import GmapVue from "gmap-vue";

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(GmapVue, {
  load: {
    // [REQUIRED] This is the unique required value by Google Maps API
    key: "AIzaSyACE12pIOduL1WEKC6M_J9bfP8lneHbj8Y",

    libraries: "places",
  },
  autoBindAllEvents: false,
  installComponents: true,
  dynamicLoad: false,
});

new Vue({
  router,
  vuetify,
  GmapVue,

  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
