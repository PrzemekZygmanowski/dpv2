<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :color="btnProps.color"
      :to="btnProps.link"
      :outlined="btnProps.outlined"
      :style="{ 'background-color': hover ? '#1976d2' : '#1976d2' }"
      class="btn-link btn_link"
      ><span>{{ btnProps.text }}</span>
    </v-btn>
  </v-hover>
</template>

<script>
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  mixins: [breakPointMixin],
  data() {
    return {
      btnIcon: 'data/icons/arrow-right-solid.svg',
    };
  },
  props: {
    btnProps: {
      type: Object,
      default() {
        return {
          link: '/',
          color: '#1976d2',
          outlined: true,
          text: '',
        };
      },
    },
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
.btn_link {
  .small-btn_icon {
    height: 20px;

    filter: invert(21%) sepia(87%) saturate(2426%) hue-rotate(226deg)
      brightness(90%) contrast(115%);
  }
}
</style>
