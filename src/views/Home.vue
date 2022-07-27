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
    <BigIconOverview :icons="bigIconOverviewProps.icons"></BigIconOverview>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import MainService from "@/components/MainService.vue";
import BigIconOverview from "@/components/BigIconsOverview.vue";

export default {
  name: "Home",

  components: {
    MainHeader,
    TextOverview,
    MainService,
    BigIconOverview,
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
          imageName: "butla_11",
          title: "Lorem",
          subtitle: "ipsum",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      },
      bigIconOverviewProps: {
        icons: [
          {
            id: 1,
            title: "Profesjonalizm",
            icon: "fa-solid fa-certificate",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            id: 2,
            title: "Empatia",
            icon: "fa-solid fa-dove",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            id: 3,
            title: "Doświadczenie",
            icon: "fa-solid fa-shield",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: auto;
}
</style>
