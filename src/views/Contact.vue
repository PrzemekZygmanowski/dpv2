<template>
  <div class="contact">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    />
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
    />
    <ContactOverview
      :title="contactOverviewProps.title"
      :contactForOrders="contactOverviewProps.contactForOrders"
      :contacts="contactOverviewProps.contacts"
      :mails="contactOverviewProps.mails"
      :secondTitle="contactOverviewProps.secondTitle"
      :offer="contactOverviewProps.offer"
    ></ContactOverview>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import ContactOverview from '@/components/ContactOverview.vue';
import TextOverview from '@/components/Text-Overview.vue';

export default {
  name: 'Contact',

  components: {
    ContactOverview,
    MainHeader,
    TextOverview,
  },

  data() {
    return {
      mainHeaderProps: {
        title: 'Kontakt',
        image: 'data/img/gas-bottles-1750491_1280.jpg',
      },
      textOverviewProps: {
        title: 'Obszar działania',
        text: 'Nasz obszar działania to cała Łódź. Zrealizujey Twoje zamówienie do 90 minut od podjęcia decyzji!',
      },
      contactOverviewProps: {
        title: 'Możliwości kontaktu',
        contactForOrders: [
          {
            id: 1,
            number: '504-405-295',
          },
          {
            id: 2,
            number: '513-439-938',
          },
        ],
        contacts: [
          {
            id: 1,
            number: '536-334-447',
          },
        ],
        mails: [
          {
            id: 1,
            email: 'dpgaz2020@gmail.com',
          },
        ],
        secondTitle: 'Indywidualna oferta',
        offer:
          'Jeśli jesteś zainteresowany indywidualną ofertą, skontaktuj sie z nami, na pewno przygotujemy dla Ciebie propozycję która Cię usatysfakcjonuje. Skontaktuj się z przedstawicielem handlowym',
      },
    };
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
