<template>
  <div class="home">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
      :logo="mainHeaderProps.logo"
    />
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    />
    <MainService
      :service="mainServiceProps.service"
      :btnProps="mainServiceProps.btnProps"
      :prices="mainServiceProps.prices"
    ></MainService>
    <BigIconOverview :icons="bigIconOverviewProps.icons"></BigIconOverview>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import MainService from '@/components/MainService.vue';
import BigIconOverview from '@/components/BigIconsOverview.vue';

export default {
  name: 'Home',

  components: {
    MainHeader,
    TextOverview,
    MainService,
    BigIconOverview,
  },
  data() {
    return {
      mainHeaderProps: {
        title: 'D&P',
        subtitle: 'TWÓJ DOSTAWCA GAZU ',
        image: 'data/img/gas-bottle-845409_1920.jpg',
        logo: 'data/img/logo.png',
      },
      textOverviewProps: {
        title: 'ZADZWOŃ I ZAMÓW GAZ',
        text: 'DOSTARCZYMY GO DO CIEBIE MAKSYMALNIE W CIĄGU <strong style="color:#1b31de; font-weight:bold">90 MIN</strong></br> Zadzwoń do Nas:',
        phoneNumbers:[
          {
            id: 1,
            number: '504-405-295',
          },
          {
            id: 2,
            number: '513-439-938',
          },
        ];
      },
      mainServiceProps: {
        service: {
          orientation: 'left',
          imageUrl: 'data/img/service_2.webp',
          imageName: 'butla_11',
          title: 'Butle 11kg',
        },
        btnProps: {
          link: '/services',
          color: '#3b3d42',
          btnWidth: 340,
          outlined: false,
          text: 'Dowiedz się więcej',
        },
        prices: [
          { id: 1, label: 'PROPAN 11kg', amount: '100 zł' },
          { id: 2, label: 'PROPAN BUTAN', amount: '95 zł' },
          {
            id: 3,
            label: 'PROPAN BUTAN SYFON (do wózka widłowego)',
            amount: '95 zł',
          },
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
        ],
      },
    };
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
