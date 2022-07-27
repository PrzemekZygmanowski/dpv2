<template>
  <div class="overflow-hidden mobile-menu_container">
    <div class="mobile-menu_burger">
      <v-btn
        :color="btnColor"
        elevation="4"
        fab
        small
        @click="active = !active"
      >
        <font-awesome-icon
          class="mobile-menu_burger-icon"
          icon="fa-solid fa-bars"
      /></v-btn>
    </div>
    <v-bottom-navigation
      fixed
      grow
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <div v-for="link in links" :key="link.id" class="mobile-menu_wrapper">
        <router-link class="mobile-menu_link menu-link" :to="link.url">
          <v-img
            v-if="link.img"
            :src="link.img"
            :aspect-ratio="1"
            :width="width" />
          <font-awesome-icon v-if="link.icon" :icon="link.icon"
        /></router-link>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      active: false,
      width: 24,
      btnColor: "#69b9ff",
    };
  },
  props: {
    links: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            img: "data/img/logo/MBblack.png",
            url: "/",
            text: "Start",
          },
          {
            id: 2,
            text: "O mnie",
            icon: "fa-solid fa-user-tie",
            url: "/owner",
          },
          {
            id: 3,
            text: "Kancelaria",
            icon: "fa-solid fa-building-columns",
            url: "/firm",
          },
          {
            id: 4,
            text: "Kontakt",
            icon: "fa-solid fa-phone-flip",
            url: "/contact",
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss">
@import "styles/global/_all.scss";
.mobile-menu_container {
  .mobile-menu_burger {
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 10000;
    .mobile-menu_burger-icon {
      color: $dp-white;
    }
  }
  .mobile-menu_wrapper {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: center;
    .mobile-menu_link {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }
}
</style>
