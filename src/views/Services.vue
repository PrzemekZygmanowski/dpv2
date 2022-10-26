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
          :data-aos="`fade-${service.service.orientation}`"
          data-aos-ease="ease-in-out"
          data-aos-duration="1500"
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
      backendUrl: import.meta.env.VITE_HOME_BACKEND_URL,
      urlSuffix: "/api/services?",
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
.services {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
