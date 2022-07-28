<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :color="btnProps.color"
      :to="btnProps.link"
      :outlined="btnProps.outlined"
      :style="{ 'background-color': hover ? '#fafffa' : '#fafffa' }"
      class="btn-link btn_link"
      tile
      ><span v-show="!isMobile">{{ btnProps.text }}</span>
      <img :src="btnIcon" class="svg-white small-btn_icon"
    /></v-btn>
  </v-hover>
</template>

<script>
import breakPointMixin from "@/mixins/breakPointMixin.js";

export default {
  mixins: [breakPointMixin],
  data() {
    return {
      btnIcon: "data/icons/arrow-right-solid.svg",
    };
  },
  props: {
    btnProps: {
      type: Object,
      default() {
        return {
          link: "/",
          color: "#fafffa",
          outlined: true,
          text: "",
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
@import "styles/global/_all.scss";
.btn_link {
  .small-btn_icon {
    height: 20px;

    filter: invert(84%) sepia(65%) saturate(973%) hue-rotate(321deg)
      brightness(97%) contrast(99%);
  }
}
</style>
