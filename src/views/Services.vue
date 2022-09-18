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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      firstServiceProps: {
        service: {
          orientation: 'right',
          imageUrl: 'data/img/service_1.jpg',
          imageName: 'butle turystyczne',
          title: 'butle turystyczne',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        prices: [
          { id: 1, label: 'Butla 11kg pierwsza', amount: '200 zł' },
          { id: 2, label: 'Butla 11kg druga', amount: '300 zł' },
          { id: 3, label: 'Butla 11kg trzecia', amount: '300 zł' },
        ],
      },
      secondServiceProps: {
        service: {
          orientation: 'left',
          imageUrl: 'data/img/service_2.webp',
          imageName: 'butla 11kg',
          title: 'Butle 11 kg',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        prices: [
          { id: 1, label: 'Butla 11kg pierwsza', amount: '200 zł' },
          { id: 2, label: 'Butla 11kg druga', amount: '300 zł' },
          { id: 3, label: 'Butla 11kg trzecia', amount: '300 zł' },
        ],
      },
      thirdServiceProps: {
        service: {
          orientation: 'right',
          imageUrl: 'data/img/service_3.jpg',
          imageName: 'butla 33kg',
          title: 'Butle 33kg',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        prices: [
          { id: 1, label: 'Butla 11kg pierwsza', amount: '200 zł' },
          { id: 2, label: 'Butla 11kg druga', amount: '300 zł' },
          { id: 3, label: 'Butla 11kg trzecia', amount: '300 zł' },
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
