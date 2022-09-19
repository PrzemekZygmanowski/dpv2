<template>
  <div class="affiliation">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    />
    <TextOverview
      :title="firstTextOverviewProps.title"
      :text="firstTextOverviewProps.text"
    />
    <SpecialServiceLine :cards="cards"></SpecialServiceLine>
    <TextOverview
      :title="secondTextOverviewProps.title"
      :text="secondTextOverviewProps.text"
      :phoneNumbers="secondTextOverviewProps.phoneNumbers"
    />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import SpecialServiceLine from '@/components/SpecialServiceLine.vue';

export default {
  name: 'Affiliation',

  components: {
    MainHeader,
    TextOverview,
    SpecialServiceLine,
  },
  data() {
    return {
      mainHeaderProps: {
        title: 'Zarabiaj razem z nami',
        image: 'data/img/affiliance.jpg',
      },
      firstTextOverviewProps: {
        title: 'Chcesz nawiązać współpracę?',
      },
      secondTextOverviewProps: {
        title: 'Zainteresowaliśmy Cię',
        text: 'Skontaktuj się z nami',
        phoneNumbers: [
          {
            id: 1,
            number: '536-334-447',
          },
        ],
      },
      cards: [
        {
          id: 1,
          title: 'Twój własny punkt </br> wymiany butli',
          text: 'Podejmiemy współpracę z osobami chcącymi prowadzić nasz punkt wymiany butli gazowych. Współpraca nie wymaga żadnego wkładu własnego.',
        },
        {
          id: 2,
          title: 'Masz już punkt?',
          text: 'Nic nie szkodzi. Nawiążemy również współpracę z osobami prowadzącymi już punkt wymiany butli, zaproponujemy konkurencyjne warunki współpracy',
        },
        {
          id: 3,
          title: 'Punkt wymiany butli',
          text: 'Punkt można prowadzić przy własnym domu, sklepie, lub prowadząc działalność gospodarczą, bezpłatnie dostarczymy butle oraz klatkę do ich przechowywania',
        },
      ],
    };
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
