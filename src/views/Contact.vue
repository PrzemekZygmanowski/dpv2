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
      backendUrl: "http://localhost:1337",
      mainHeaderProps: {
        title: "Kontakt",
        image: "data/img/gas-bottles-1750491_1280.jpg",
      },
      textOverviewProps: {
        title: "Obszar działania",
        text: "Nasz obszar działania to cała Łódź. Zrealizujey Twoje zamówienie do 90 minut od podjęcia decyzji!",
      },
      contactOverviewProps: {
        title: "Możliwości kontaktu",
        contactForOrders: [
          {
            id: 1,
            number: "504-405-295",
          },
          {
            id: 2,
            number: "513-439-938",
          },
        ],
        contacts: [
          {
            id: 1,
            number: "536-334-447",
          },
        ],
        mails: [
          {
            id: 1,
            email: "dpgaz2020@gmail.com",
          },
        ],
        secondTitle: "Indywidualna oferta",
        offer:
          "Jeśli jesteś zainteresowany indywidualną ofertą, skontaktuj sie z nami, na pewno przygotujemy dla Ciebie propozycję która Cię usatysfakcjonuje. Skontaktuj się z przedstawicielem handlowym",
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
        "http://localhost:1337/api/contacts?populate=deep"
      );
      if (!response.ok) {
        this.loading = false;
        this.error = true;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      console.log(this.data?.data[0].attributes.mails);
      this.loading = false;
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
