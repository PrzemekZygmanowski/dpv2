<template>
  <v-app v-resize="onResize" class="reset">
    <v-main class="ma-0 pa-0">
      <Menu v-show="!isMobile"></Menu>
      <MobileMenu v-show="isMobile"></MobileMenu>
      <router-view />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu.vue";
import MobileMenu from "@/components/Mobile-Menu.vue";
import Footer from "@/components/Footer.vue";
import breakPointMixin from "@/mixins/breakPointMixin.js";

export default {
  components: { Menu, Footer, MobileMenu },
  mixins: [breakPointMixin],

  name: "App",
  data: () => ({
    //
  }),
  computed: {
    function() {
      return this.isMobile();
    },
  },
};
</script>

<style scoped>
.reset {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  width: 100vh;
}
</style>
