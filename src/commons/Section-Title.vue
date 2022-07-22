<template>
  <h2 class="section-title section_title" v-html="title"></h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Lorem Impsum",
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.section_title {
  margin: 0 auto 15px auto;
  outline: 0;
  position: relative;
  display: inline-block;
  @media (min-width: $mobileBreakpoint) {
    margin: 0 auto 30px auto;
  }
  &:after {
    content: "";
    position: absolute;
    height: 4px;
    background-color: $dp-yellow;
    width: 100%;
    left: 0;
    bottom: 0;
  }
}
</style>
