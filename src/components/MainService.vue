<template>
  <v-container class="section-container pa-0 d-flex flex-column align-center">
    <v-container
      class="pa-0 ma-0 mb-8 small-about_container"
      :class="`small-about_container-${service.orientation}`"
    >
      <div class="small-about_img-wrapper">
        <img
          class="small-about_img"
          :src="service.imageUrl"
          :alt="service.imageName"
        />
      </div>
      <div class="small-about_overview">
        <Section-title :title="service.title"></Section-title>
        <h4
          class="section-small-subtitle"
          v-show="service.subtitle"
          v-html="service.subtitle"
        ></h4>
        <p
          class="section-text"
          v-show="service.about"
          v-html="service.about"
        ></p>
        <div
          :key="`${price.label}-${price.amount}`"
          v-for="price in prices"
          v-show="prices"
          class="service_prices-container"
        >
          <p class="section-text price_text">
            {{ price.label }} -
            <strong class="section-text price-text">{{ price.amount }}</strong>
          </p>
        </div>
      </div>
    </v-container>
    <LinkButton v-show="btnProps" :btnProps="btnProps"></LinkButton>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SectionTitle from '@/commons/Section-Title.vue';
import LinkButton from '@/commons/LinkButton.vue';
import vuetify from '@/plugins/vuetify';

export default {
  vuetify,
  components: { SectionTitle, LinkButton },

  props: {
    service: {
      type: Object,
    },
    btnProps: {
      type: Object,
    },
    prices: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.small-about_title-container {
  width: 100%;
  text-align: center;
}
.small-about_container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: $mobileBreakpoint) {
    min-height: 30vh;

    flex-direction: row;
    margin-bottom: 60px;
  }

  .small-about_img-wrapper {
    width: 100%;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
    }
    .small-about_img {
      overflow: hidden;
      object-fit: contain;
      width: 100%;

      @media (min-width: $mobileBreakpoint) {
        max-height: 400px;
      }
    }
  }
  .small-about_overview {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
      padding: 0 10px;
    }
    .price-text {
      font-weight: bold;
      color: $dp-yellow;
      font-size: 20px;
      @media (min-width: $desktopBreakpoint) {
        font-size: 24px;
      }
    }
    .small-about_link {
      color: $dp-black;
    }
  }
}
.small-about_container-right {
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row-reverse;
  }
}
.small-about_container-left {
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row;
  }
}
.price_text {
  text-align: center;
}
</style>
