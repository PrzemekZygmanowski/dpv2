<template>
  <a href="/" class="icon-component">
    <div class="icon-container">
      <img :src="icon.imageUrl" :alt="icon.imageTitle" class="icon-logo" />
      <h3 class="icon-title icon__title" v-html="icon.title"></h3>
      <p class="icon-link icon-text">dowiedz się więcej</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.icon-component {
  text-decoration: none;
  height: 250px;
  // max-width: 250px;
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: $mb-black;
    margin: 0 40px;
    .icon-logo {
      height: 75px;
      aspect-ratio: 1;
    }
    .icon__title {
      outline: 0;
      position: relative;
      display: inline-block;
      text-align: center;
      &:after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: $mb-white;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
    .icon-link {
      cursor: inherit;
      text-decoration: none;
    }
  }
}
</style>
