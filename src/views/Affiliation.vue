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
    <SpecialServiceLine></SpecialServiceLine>
    <TextOverview
      :title="secondTextOverviewProps.title"
      :text="secondTextOverviewProps.text"
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
        image: 'data/img/wspolpraca_2.webp',
      },
      firstTextOverviewProps: {
        title: 'Twój własny punkt wymiany butli',
        text: 'Podejmiemy współpracę z osobami chcącymi prowadzić nasz punkt wymiany butli gazowych. Współpraca nie wymaga żadnego wkładu własnego.  Nawiążemy rónież współpracę z osobami prowadzącymi już punkt wymiany butli, zaproponujemy konkurencyjne warunki współpracy',
      },
      secondTextOverviewProps: {
        title: 'Punkt wymiany butli',
        text: 'Punkt można prowadzić przy własnym domu, sklepie, lub prowadząc działalność gospodarczą, bezpłatnie dostarcyzmy butle oraz klatkę do ich przechowywania',
      },
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
