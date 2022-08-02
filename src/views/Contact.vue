<template>
  <div class="contact">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    />
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    />
    <Map></Map>
    <ContactOverview></ContactOverview>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Map from "@/components/Map.vue";
import ContactOverview from "@/components/ContactOverview.vue";
import TextOverview from "@/components/Text-Overview.vue";

export default {
  name: "Contact",

  components: {
    Map,
    ContactOverview,
    MainHeader,
    TextOverview,
  },

  data() {
    return {
      mainHeaderProps: {
        title: "Kontakt",
        image: "data/img/gas-bottles-1750491_1280.jpg",
      },
      textOverviewProps: {
        title: "Obszar działania",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
