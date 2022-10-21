<template>
  <div>
    <div v-if="loading" class="loading">
      <Loader></Loader>
    </div>
    <div v-if="error" class="error"><Error></Error></div>
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
        :title="this.data?.data[0].attributes.Service.title"
        :orientation="this.data?.data[0].attributes.Service.orientation"
        :imageUrl="
          backendUrl +
          this.data?.data[0].attributes.Service.imageUrl.data[0].attributes.url
        "
        :imageName="this.data?.data[0].attributes.Service.imageName"
        :btnProps="btnProps"
        :prices="this.data?.data[0].attributes.Prices[0].Price"
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
import Error from "@/components/Error.vue";
import Loader from "@/commons/Loader.vue";

export default {
  name: "Home",

  components: {
    MainHeader,
    TextOverview,
    MainService,
    BigIconOverview,
    Loader,
    Error,
  },
  data() {
    return {
      loading: false,
      error: false,
      data: null,
      backendUrl: import.meta.env.VITE_HOME_BACKEND_URL,
      urlSuffix: "/api/homes?",
      btnProps: {
        link: "/oferta",
        color: "#1976d2",
        btnWidth: 340,
        outlined: false,
        text: "Dowiedz się więcej",
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
      debugger;
      this.error = false;
      this.loading = true;
      let url;
      try {
        url = new URL(this.backendUrl + this.urlSuffix);
        url.searchParams.append("populate", "deep");
      } catch (error) {
        console.error("There was an error!", error);
        return;
      }
      if (url) {
        const response = await fetch(url);
        if (!response.ok) {
          this.loading = false;
          this.error = true;
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.data = await response.json();
        this.loading = false;
      }
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
