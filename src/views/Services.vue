<template>
  <div class="services">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    />
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    />
    <MainService
      :service="firstServiceProps.service"
      :prices="firstServiceProps.prices"
    ></MainService>
    <MainService
      :service="secondServiceProps.service"
      :prices="secondServiceProps.prices"
    ></MainService>
    <MainService
      :service="thirdServiceProps.service"
      :prices="thirdServiceProps.prices"
    ></MainService>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import MainService from '@/components/MainService.vue';
export default {
  name: 'Services',

  components: {
    MainHeader,
    TextOverview,
    MainService,
  },
  data() {
    return {
      mainHeaderProps: {
        title: 'Oferta',
        image: 'data/img/appliance-2257_1280.jpg',
      },
      textOverviewProps: {
        title: 'Nasza Oferta',
        text: 'Posiadamy w naszej ofercie butle gazowe w różnych rozmiarach. Zarówno butle turystyczne, jak i większe, 11kg i 33 kg. Poniżej nasza oferta:',
      },
      firstServiceProps: {
        service: {
          orientation: 'right',
          imageUrl: 'data/img/service_1.jpg',
          imageName: 'Butle turystyczne',
          title: 'Butle turystyczne',
        },
        prices: [
          { id: 1, label: 'Butla 2kg', amount: '40 zł' },
          { id: 2, label: 'Butla 3kg', amount: '50 zł' },
          { id: 3, label: 'Butla 5kg', amount: '65 zł' },
        ],
      },
      secondServiceProps: {
        service: {
          orientation: 'left',
          imageUrl: 'data/img/butla_11.jpg',
          imageName: 'butla 11kg',
          title: 'Butle 11 kg',
        },
        prices: [
          { id: 1, label: 'Propan', amount: '100 zł' },
          { id: 2, label: 'Propan Butan', amount: '95 zł' },
          { id: 3, label: 'Propan Butan z syfonem', amount: '95 zł' },
        ],
      },
      thirdServiceProps: {
        service: {
          orientation: 'right',
          imageUrl: 'data/img/butla_33.jpg',
          imageName: 'butla 33kg',
          title: 'Butle 33kg',
        },
        prices: [
          { id: 1, label: 'Propan 30kg', amount: '255 zł' },
          { id: 2, label: 'Propan Butan 33kg', amount: '240 zł' },
        ],
      },

      bigIconOverviewProps: {
        icons: [
          {
            id: 1,
            title: 'butle turystyczne',
            icon: 'data/icons/fire-flame-simple-solid.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            iconBtnProps: {
              link: '/services',
              color: '#1b31de',
              outlined: true,
              text: 'więcej',
            },
          },
          {
            id: 2,
            title: 'butle 33kg',
            icon: 'data/icons/fire-burner-solid.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            iconBtnProps: {
              link: '/services',
              color: '#1b31de',
              outlined: true,
              text: 'więcej',
            },
          },
          {
            id: 3,
            title: 'dwutlenek węgla',
            icon: 'data/icons/glass-mug-variant.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            iconBtnProps: {
              link: '/services',
              color: '#1b31de',
              outlined: true,
              text: 'więcej',
            },
          },
        ],
      },
    };
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
