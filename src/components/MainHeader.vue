<template>
  <header id="main-header">
    <div class="main-header">
      <div class="main-header__container">
        <img :src="image" class="main-header__picture" alt="dp" />
        <div class="main-header__text-container">
          <h1 class="main-header__title main-title">{{ title }}</h1>
          <h2 class="main-header__subtitle main-subtitle">{{ subtitle }}</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.main-header {
  height: 80vh;
  max-height: 100vh;
  width: 100%;
  @media (min-width: $desktopBreakpoint) {
    max-height: 640px;
  }
  .main-header__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0 auto;
    height: 100%;
    width: 100%;

    .main-header__picture {
      width: 100vw;
      height: 100%;
      transition: 0.5s ease;
      backface-visibility: hidden;
      object-fit: cover;
      animation: picture 2s ease-in-out;
      animation-fill-mode: forwards;
      @media (min-width: $desktopBreakpoint) {
        position: relative;
        display: block;
        width: 100%;
        max-height: 640px;
        object-fit: cover;
      }
    }
    .main-header__text-container {
      width: 100%;
      height: 80vh;
      max-height: 100vh;
      margin: 0 auto;
      position: absolute;
      color: $dp-white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.2);
      animation: text-container 1.5s ease-in;

      @media (min-width: $desktopBreakpoint) {
        height: 640px;
      }
      .main-header__title {
        width: 90%;
        line-height: 2;
      }
      .main-header__subtitle {
        line-height: 1.4;
      }
    }
  }
}
@keyframes text-container {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes picture {
  0% {
    filter: blur(0);
  }
  50% {
    filter: blur(0);
  }
  100% {
    filter: blur(2px);
  }
}
</style>
