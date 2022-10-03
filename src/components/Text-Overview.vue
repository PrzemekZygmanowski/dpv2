<template transition="slide-y-transition">
  <div class="section-container text-overview_container">
    <Section-title v-if="title" :title="title"></Section-title>
    <p v-if="text" class="section-text text-overview_text" v-html="text"></p>
    <div
      v-show="phoneNumbers"
      :key="`${phoneNumber.id}-${phoneNumber.number}`"
      v-for="phoneNumber in phoneNumbers"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-title contact_link"
        :href="`tel:${phoneNumber.number}`"
        >{{ phoneNumber.number }}</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';

export default {
  components: { SectionTitle },
  // @ is an alias to /src
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    phoneNumbers: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.text-overview_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  .text-overview_title {
    margin: 0 auto 15px auto;
    outline: 0;
    position: relative;
    display: inline-block;
    &:after {
      content: '';
      position: absolute;
      height: 4px;
      background-color: $dp-yellow;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
  .text-overview_text {
    .text_important {
      color: $dp-yellow;
    }
    .price-text {
      font-weight: bold;
      color: $dp-yellow;
      font-size: 20px;
      @media (min-width: $desktopBreakpoint) {
        font-size: 24px;
      }
    }
  }
}
.text_important {
  color: $dp-yellow;
}

.price-text {
  font-weight: bold;
  color: $dp-yellow;
  font-size: 20px;
  @media (min-width: $desktopBreakpoint) {
    font-size: 24px;
  }
}
</style>
