<template>
  <v-footer
    :color="footerColor"
    :height="height"
    padless
    class="mt-8 d-flex flex-column justify-space-between"
  >
    <v-col
      class="text-center footer-text footer__copy pa-0 d-flex align-center justify-center"
      cols="12"
    >
      <span>&#169;</span> {{ new Date().getFullYear() }} —
      <strong>{{ title }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footerColor: "#192024",
      copy: "data/img/svg/copyright-solid.svg",
      height: 75,
      btnColor: "#69b9ff",
    };
  },
  props: {
    title: {
      type: String,
      default: "d&p Wiktor Moneta",
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.footer__copy {
  width: 100%;
  max-height: 100%;
}
</style>
