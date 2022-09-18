<template>
  <v-footer
    v-resize="onResize"
    :color="footerColor"
    :height="height"
    padless
    class="mt-8 d-flex flex-column justify-space-between"
  >
    <v-row justify="center" no-gutters>
      <v-btn
        v-show="!isMobile"
        v-for="link in links"
        :key="link.text"
        :to="link.url"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.text }}
      </v-btn>
      <v-col
        class="text-center footer-text footer__copy pa-0 d-flex align-center justify-center"
        cols="12"
      >
        <span>&#169;</span> {{ new Date().getFullYear() }} —
        <strong>{{ title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  mixins: [breakPointMixin],

  data() {
    return {
      footerColor: '#192024',
      copy: 'data/img/svg/copyright-solid.svg',
      height: 125,
      btnColor: '#69b9ff',
      title: 'd&p Wiktor Moneta',
      links: [
        {
          id: 0,
          text: 'START',
          url: '/',
        },
        {
          id: 1,
          text: 'USŁUGI',
          url: '/oferta',
        },
        {
          id: 3,
          text: 'WSPÓŁPRACA',
          url: '/wspolpraca',
        },
        {
          id: 4,
          text: 'KONTAKT',
          url: '/kontakt',
        },
      ],
    };
  },
  computed: {
    function() {
      return this.isMobile();
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';

.footer__copy {
  width: 100%;
  max-height: 100%;
}
</style>
