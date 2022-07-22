<template>
  <v-app class="ma-0 pa-0">
    <v-main>
      <Menu v-show="!isMobile"></Menu>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: { Menu },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
