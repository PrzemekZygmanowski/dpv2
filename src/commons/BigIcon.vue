<template>
  <div class="big-icon__first-wrapper">
    <div class="big-icon__second-wrapper">
      <img src="data/icons/fire-burner-solid.svg" class="svg-white" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconColor: "#000080",
    };
  },
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.big-icon__first-wrapper {
  position: relative;
  height: 120px;
  width: 120px;
  border: 2px solid $mb-blue;
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
    background-color: $mb-blue;
    border-radius: 50%;
    @media (min-width: $mobileBreakpoint) {
      height: 80px;
      width: 80px;
    }
    .svg-white {
      filter: invert(0%) sepia(92%) saturate(0%) hue-rotate(272deg)
        brightness(113%) contrast(108%);
    }
    .big-icon {
      height: 30px;
      font-size: 20px;
      font-weight: 400;
      color: $mb-white;
    }
  }
}
</style>
