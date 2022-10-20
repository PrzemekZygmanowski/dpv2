<template>
  <div>
    <div v-if="loading" class="loading"><Loader></Loader></div>
    <div v-if="error" class="error"><Error></Error></div>
    <div v-if="data" class="affiliation">
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
        :title="this.data?.data[0].attributes.firstTextOverviewProps.title"
        :text="this.data?.data[0].attributes.firstTextOverviewProps.text"
      />
      <SpecialServiceLine
        :cards="this.data?.data[0].attributes.cards.card"
      ></SpecialServiceLine>
      <TextOverview
        :title="this.data?.data[0].attributes.secondTextOverviewProps.title"
        :text="this.data?.data[0].attributes.secondTextOverviewProps.text"
        :phoneNumbers="this.data?.data[0].attributes.phoneNumbers"
      />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import SpecialServiceLine from "@/components/SpecialServiceLine.vue";
import Error from "@/components/Error.vue";
import Loader from "@/commons/Loader.vue";

export default {
  name: "Affiliation",

  components: {
    MainHeader,
    TextOverview,
    SpecialServiceLine,
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
        title: "Zarabiaj razem z nami",
        image: "data/img/affiliance.jpg",
      },
      firstTextOverviewProps: {
        title: "Chcesz nawiązać współpracę?",
      },
      secondTextOverviewProps: {
        title: "Zainteresowaliśmy Cię",
        text: "Skontaktuj się z nami",
        phoneNumbers: [
          {
            id: 1,
            number: "536-334-447",
          },
        ],
      },
      cards: [
        {
          id: 1,
          title: "Twój własny punkt </br> wymiany butli",
          text: "Podejmiemy współpracę z osobami chcącymi prowadzić nasz punkt wymiany butli gazowych. Współpraca nie wymaga żadnego wkładu własnego.",
        },
        {
          id: 2,
          title: "Masz już punkt?",
          text: "Nic nie szkodzi. Nawiążemy również współpracę z osobami prowadzącymi już punkt wymiany butli, zaproponujemy konkurencyjne warunki współpracy",
        },
        {
          id: 3,
          title: "Punkt wymiany butli",
          text: "Punkt można prowadzić przy własnym domu, sklepie, lub prowadząc działalność gospodarczą, bezpłatnie dostarczymy butle oraz klatkę do ich przechowywania",
        },
      ],
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
        "http://localhost:1337/api/affiliations?populate=deep"
      );
      if (!response.ok) {
        this.loading = false;
        this.error = true;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      console.log(this.data?.data[0].attributes);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
// .affiliation {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
</style>
