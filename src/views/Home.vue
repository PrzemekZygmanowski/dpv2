<template>
  <div class="home">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    />
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    />
    <MainService :owner="mainServiceProps.owner"></MainService>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import MainService from "@/components/MainService.vue";

export default {
  name: "Home",

  components: {
    MainHeader,
    TextOverview,
    MainService,
  },
  data() {
    return {
      mainHeaderProps: {
        title: "D&P",
        subtitle: "Wiktor Moneta",
        image: "data/img/gas-bottle-845409_1920.jpg",
      },
      textOverviewProps: {
        title: "Lorem Impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      mainServiceProps: {
        owner: {
          imageUrl: "data/img/pictures/MB_header.jpg",
          imageName: "Michał_Buzar",
          title: "Michał Buzar",
          subtitle: "Radca Prawny",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      },
    };
  },
};
</script>
