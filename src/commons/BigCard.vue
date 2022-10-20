<template>
  <div class="big-icon-container">
    <div class="big-icon__first-wrapper">
      <div class="big-icon__second-wrapper">
        <img
          :src="backendUrl + icon.icon.data.attributes.url"
          class="svg-white big-icon_icon"
        />
      </div>
    </div>
    <h3 class="icon-title" v-html="icon.title"></h3>
    <p class="icon-text">{{ icon.text }}</p>
    <SmallButton :btnProps="btnProps"></SmallButton>
  </div>
</template>

<script>
import SmallButton from "./SmallButton.vue";

export default {
  components: { SmallButton },

  data() {
    return {
      backendUrl: "http://localhost:1337",
      iconColor: "#1b31de",
      btnProps: {
        link: "/oferta",
        color: "#1976d2",
        outlined: false,
        text: "więcej",
      },
    };
  },

  props: {
    icon: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.big-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: $dp-black;
  border: 0.5px solid $dp-yellow;
  border-radius: 5px;
  width: $mobileWidth;
  min-height: 300px;
  padding: 7%;
  margin-bottom: 20px;
  @media (min-width: $mobileBreakpoint) {
    width: 80%;
    min-height: 400px;
  }
  @media (min-width: $desktopBreakpoint) {
    width: 80%;
  }
  .big-icon__first-wrapper {
    position: relative;
    height: 120px;
    width: 120px;
    border: 2px solid $dp-yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: $mobileBreakpoint) {
      height: 100px;
      width: 100px;
    }
    .big-icon__second-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
      width: 90px;
      background-color: $dp-yellow;
      border-radius: 50%;
      @media (min-width: $mobileBreakpoint) {
        height: 80px;
        width: 80px;
      }
      .big-icon_icon {
        height: 40px;
      }
      .big-icon {
        height: 30px;
        font-size: 20px;
        font-weight: 400;
        color: $dp-white;
      }
    }
  }
}
</style>
