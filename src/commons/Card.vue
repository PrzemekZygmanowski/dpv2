<template>
  <v-card :outlined="isOutlined" class="card-container" elevation="0">
    <v-img :src="card.imageUrl" class="card-logo"></v-img>
    <v-card-title class="card__title section-small-subtitle">
      {{ card.title }}
    </v-card-title>
    <v-card-text class="card__text section-text">
      {{ card.text }}
    </v-card-text>
    <LinkButton :btnProps="btnProps"></LinkButton>
  </v-card>
</template>

<script>
import LinkButton from './LinkButton.vue';

export default {
  components: { LinkButton },
  data() {
    return {
      isOutlined: false,
    };
  },
  props: {
    card: {
      type: Object,
    },
    btnProps: {
      type: Object,
      default() {
        return {
          link: '/firm',
          color: '#fafffa',
          btnWidth: 250,
          outlined: true,
          text: 'Dowiedz się więcej',
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: $mb-black;
  color: $mb-white;
  margin: 40px 0;
  .card-logo {
    aspect-ratio: 1;
    max-height: 50%;
    transform: scale(1.35);
    filter: invert(100%) sepia(1%) saturate(3425%) hue-rotate(50deg)
      brightness(107%) contrast(105%);
  }

  .card__title {
    outline: 0;
    position: relative;
    display: inline-block;
  }
  .card__text {
    color: $mb-white !important;
    padding: 20px;
    text-align: center;
  }
}

.theme--light.v-card {
  background-color: $mb-black;
  color: $mb-white;
}
</style>
