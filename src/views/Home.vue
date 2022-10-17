<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="data" class="home">
      <MainHeader
        :title="this.data?.data[0].attributes.mainHeaderProps.title"
        :subtitle="this.data?.data[0].attributes.mainHeaderProps.subtitle"
        :image="
          backendUrl +
          this.data?.data[0].attributes.mainHeaderProps.image.data.attributes
            .url
        "
        :logo="
          backendUrl +
          this.data?.data[0].attributes.mainHeaderProps.logo.data.attributes.url
        "
      />
      <TextOverview
        :title="this.data?.data[0].attributes.textOverviewProps[0].title"
        :text="this.data?.data[0].attributes.textOverviewProps[0].text"
        :phoneNumbers="this.data?.data[0].attributes.phoneNumbers"
      />
      <MainService
        :service="mainServiceProps.service"
        :btnProps="mainServiceProps.btnProps"
        :prices="mainServiceProps.prices"
      ></MainService>
      <BigIconOverview
        :icons="this.data?.data[0].attributes.bigIconOverviewProps[0].icons"
      ></BigIconOverview>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import MainService from "@/components/MainService.vue";
import BigIconOverview from "@/components/BigIconsOverview.vue";
import { getData } from "../service/getData";

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
      loading: false,
      error: null,
      data: null,
      backendUrl: "http://localhost:1337",
      // mainHeaderProps: this.data?.data.attributes.mainHeaderProps

      mainHeaderProps: {
        title: "D&P",
        subtitle: "TWÓJ DOSTAWCA GAZU",
        image: "data/img/gas_flame.jpg",
        logo: "data/img/logo.png",
      },
      textOverviewProps: {
        title: "ZADZWOŃ I ZAMÓW GAZ",
        text: " ",
        phoneNumbers: [
          {
            id: 1,
            number: "504-405-295",
          },
          {
            id: 2,
            number: "513-439-938",
          },
        ],
      },
      mainServiceProps: {
        service: {
          title: "Butle 11kg",
          orientation: "left",
          imageUrl: "data/img/butla_11.jpg",
          imageName: "butla_11",
        },
        btnProps: {
          link: "/oferta",
          color: "#1976d2",
          btnWidth: 340,
          outlined: false,
          text: "Dowiedz się więcej",
        },
        prices: [
          { id: 1, label: "PROPAN 11kg", amount: "100 zł" },
          { id: 2, label: "PROPAN BUTAN", amount: "95 zł" },
          {
            id: 3,
            label: "PROPAN BUTAN SYFON (do wózka widłowego)",
            amount: "95 zł",
          },
        ],
      },
      bigIconOverviewProps: {
        icons: [
          {
            id: 1,
            title: "butle turystyczne",
            icon: "data/icons/fire-flame-simple-solid.svg",
            iconBtnProps: {
              link: "/oferta",
              color: "#1976d2",
              outlined: false,
              text: "więcej",
            },
          },
          {
            id: 2,
            title: "butle 33kg",
            icon: "data/icons/fire-burner-solid.svg",
            iconBtnProps: {
              link: "/oferta",
              color: "#1976d2",
              outlined: false,
              text: "więcej",
            },
          },
        ],
      },
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    // Re-fetch when route changes
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      this.error = null;
      this.loading = true;
      const response = await fetch(
        "http://localhost:1337/api/homes?populate=deep"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      console.log(this.data?.data[0].attributes.bigIconOverviewProps[0].icons);

      this.loading = false;
      // return data;
      // this.data = getData("http://localhost:1337/api/homes?populate=deep");
      // console.log(this.data);
      //   // replace `getPost` with your data fetching util / API wrapper
      //   async function getData() {
      //     console.log(data);

      //     const response = await fetch(
      //       "http://localhost:1337/api/homes?populate=deep"
      //     );
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }
      //     this.loading = false;
      //     this.data = await response.json();
      //     console.log(this.data?.data.attributes.mainHeaderProps.title);
      //   }
      // )();
    },
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
