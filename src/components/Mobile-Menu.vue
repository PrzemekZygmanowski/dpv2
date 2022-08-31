<template>
  <div class="overflow-hidden mobile-menu_container d-md-none">
    <div class="mobile-menu_burger">
      <v-btn :color="btnColor" elevation="4" fab @click="active = !active">
        <img :src="btnIcon" class="svg-yellow mobile-menu_burger-icon" />
      </v-btn>
    </div>
    <v-bottom-navigation
      fixed
      grow
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <div v-for="link in links" :key="link.id" class="mobile-menu_wrapper">
        <router-link class="mobile-menu_link menu-link" :to="link.url" exact>
          <img
            v-if="link.icon"
            :src="link.icon"
            class="svg-grey mobile-menu_burger-icon"
          />
        </router-link>
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
      btnColor: '#3b3d42',
      btnIcon: 'data/icons/bars-solid.svg',
    };
  },
  props: {
    links: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            icon: 'data/img/icon-color.png',
            url: '/',
            text: 'Start',
          },
          {
            id: 2,
            text: 'Oferta',
            icon: 'data/icons/bottle-droplet-solid.svg',
            url: '/oferta',
          },
          {
            id: 3,
            text: 'Współpraca',
            icon: 'data/icons/dollar-sign-solid.svg',
            url: '/wspolpraca',
          },
          {
            id: 4,
            text: 'Kontakt',
            icon: 'data/icons/phone-solid.svg',
            url: '/kontact',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss">
@import 'styles/global/_all.scss';
.mobile-menu_container {
  .mobile-menu_burger {
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 10000;
    .mobile-menu_burger-icon {
      height: 30px;
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
      .mobile-menu_burger-icon {
        height: 30px;
      }
    }
  }
}
</style>
