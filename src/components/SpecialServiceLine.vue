<template>
  <v-container class="section-container">
    <v-timeline :dense="isMobile" :reverse="!isMobile">
      <v-timeline-item v-for="card in cards" :key="card.id" :color="dotColor">
        <v-card class="elevation-2 card">
          <v-card-title class="section-small-title" v-html="card.title">
          </v-card-title>
          <v-card-text class="section-text" v-html="card.text"> </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
// @ is an alias to /src
import breakPointMixin from '@/mixins/breakPointMixin.js';

export default {
  mixins: [breakPointMixin],

  // @ is an alias to /src
  data() {
    return {
      dotColor: '#1b31de',
    };
  },
  props: {
    cards: {
      type: Array,
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
@import 'styles/global/_all.scss';

.v-timeline-item__dot {
  left: 0 !important;
  .v-timeline-item__inner-dot {
    background-color: $dp-yellow;
  }
}
</style>
