<template>
  <v-app>
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
