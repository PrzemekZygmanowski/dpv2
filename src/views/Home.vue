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
            title: "butle turystyczne",
            icon: "data/icons/fire-flame-simple-solid.svg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconBtnProps: {
              link: "/services",
              color: "#f5bf42",
              outlined: true,
              text: "więcej",
            },
          },
          {
            id: 2,
            title: "butle 33kg",
            icon: "data/icons/fire-burner-solid.svg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconBtnProps: {
              link: "/services",
              color: "#f5bf42",
              outlined: true,
              text: "więcej",
            },
          },
          {
            id: 3,
            title: "dwutlenek węgla",
            icon: "data/icons/glass-mug-variant.svg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconBtnProps: {
              link: "/services",
              color: "#f5bf42",
              outlined: true,
              text: "więcej",
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
