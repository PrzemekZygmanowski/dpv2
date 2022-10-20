<template>
  <div>
    <div v-if="loading" class="loading"><Loader></Loader></div>
    <div v-if="error" class="error"><Error></Error></div>
    <div v-if="data" class="services">
      <MainHeader
        :title="this.data?.data[0].attributes.mainHeaderProps.title"
        :subtitle="this.data?.data[0].attributes.mainHeaderProps.subtitle"
        :image="
          backendUrl +
          this.data?.data[0].attributes.mainHeaderProps.image.data.attributes
            .url
        "
      />
      <TextOverview
        :title="this.data?.data[0].attributes.textOverviewProps.title"
        :text="this.data?.data[0].attributes.textOverviewProps.text"
      />
      <div
        :key="service.id"
        v-for="service in this.data?.data[0].attributes.serviceProps"
      >
        <MainService
          :title="service.service.title"
          :orientation="service.service.orientation"
          :imageUrl="
            backendUrl + service.service.imageUrl.data[0].attributes.url
          "
          :imageName="service.service.imageName"
          :prices="service.prices"
          :btnProps="iconBtnProps"
        ></MainService>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import MainService from "@/components/MainService.vue";
import Error from "@/components/Error.vue";
import Loader from "@/commons/Loader.vue";
export default {
  name: "Services",

  components: {
    MainHeader,
    TextOverview,
    MainService,
    Loader,
    Error,
  },
  data() {
    return {
      loading: false,
      error: false,
      data: null,
      backendUrl: "http://localhost:1337",

      mainHeaderProps: {
        title: "Oferta",
        image: "data/img/appliance-2257_1280.jpg",
      },
      textOverviewProps: {
        title: "Nasza Oferta",
        text: "Posiadamy w naszej ofercie butle gazowe w różnych rozmiarach. Zarówno butle turystyczne, jak i większe, 11kg i 33 kg. Poniżej nasza oferta:",
      },
      firstServiceProps: {
        service: {
          orientation: "right",
          imageUrl: "data/img/service_1.jpg",
          imageName: "Butle turystyczne",
          title: "Butle turystyczne",
        },
        prices: [
          { id: 1, label: "Butla 2kg", amount: "40 zł" },
          { id: 2, label: "Butla 3kg", amount: "50 zł" },
          { id: 3, label: "Butla 5kg", amount: "65 zł" },
        ],
      },
      secondServiceProps: {
        service: {
          orientation: "left",
          imageUrl: "data/img/butla_11.jpg",
          imageName: "butla 11kg",
          title: "Butle 11 kg",
        },
        prices: [
          { id: 1, label: "Propan", amount: "100 zł" },
          { id: 2, label: "Propan Butan", amount: "95 zł" },
          { id: 3, label: "Propan Butan z syfonem", amount: "95 zł" },
        ],
      },
      thirdServiceProps: {
        service: {
          orientation: "right",
          imageUrl: "data/img/butla_33.jpg",
          imageName: "butla 33kg",
          title: "Butle 33kg",
        },
        prices: [
          { id: 1, label: "Propan 30kg", amount: "255 zł" },
          { id: 2, label: "Propan Butan 33kg", amount: "240 zł" },
        ],
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
              color: "#1b31de",
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
              color: "#1b31de",
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
              color: "#1b31de",
              outlined: true,
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
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      this.error = false;
      this.loading = true;
      const response = await fetch(
        "http://localhost:1337/api/services?populate=deep"
      );
      if (!response.ok) {
        this.loading = false;
        this.error = true;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      console.log(this.data?.data[0].attributes.serviceProps);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.services {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
