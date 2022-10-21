<template>
  <div>
    <div v-if="loading" class="loading"><Loader></Loader></div>
    <div v-if="error" class="error"><Error></Error></div>
    <div v-if="data" class="contact">
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
      <ContactOverview
        :title="this.data?.data[0].attributes.contactOverviewProps.title"
        :contactForOrders="this.data?.data[0].attributes.contactForOrders"
        :contacts="this.data?.data[0].attributes.contacts"
        :mails="this.data?.data[0].attributes.mails"
        :secondTitle="
          this.data?.data[0].attributes.contactOverviewProps.secondTitle
        "
        :offer="this.data?.data[0].attributes.contactOverviewProps.offer"
      ></ContactOverview>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ContactOverview from "@/components/ContactOverview.vue";
import TextOverview from "@/components/Text-Overview.vue";
import Error from "@/components/Error.vue";
import Loader from "@/commons/Loader.vue";

export default {
  name: "Contact",

  components: {
    ContactOverview,
    MainHeader,
    TextOverview,
    Loader,
    Error,
  },

  data() {
    return {
      loading: false,
      error: false,
      data: null,
      backendUrl: import.meta.env.VITE_HOME_BACKEND_URL,
      urlSuffix: "/api/contacts?",
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
.contact {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
