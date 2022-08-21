<template>
  <v-container class="section-container">
    <v-timeline :dense="isMobile" :reverse="!isMobile">
      <v-timeline-item v-for="n in 3" :key="n" :color="dotColor">
        <v-card class="elevation-2 card">
          <v-card-title class="section-small-title"> Lorem ipsum </v-card-title>
          <v-card-text class="section-text">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
// @ is an alias to /src
import breakPointMixin from "@/mixins/breakPointMixin.js";

export default {
  mixins: [breakPointMixin],

  // @ is an alias to /src
  data() {
    return {
      dotColor: "#1b31de",
    };
  },
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  computed: {
    function() {
      return this.isMobile();
    },
  },
};
</script>

<style lang="scss">
@import "styles/global/_all.scss";

.v-timeline-item__dot {
  left: 0 !important;
  .v-timeline-item__inner-dot {
    background-color: $dp-yellow;
  }
}
</style>
