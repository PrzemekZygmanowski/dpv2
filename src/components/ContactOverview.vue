<template>
  <div class="section-container d-flex flex-column align-center">
    <Section-title v-show="title" :title="title"></Section-title>
    <div
      :key="`${phoneNumber.id}-${phoneNumber.number}`"
      v-for="phoneNumber in phoneNumbers"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-subtitle contact_link"
        :href="`tel:${phoneNumber.number}`"
        >{{ phoneNumber.number }}</a
      >
    </div>
    <div
      :key="`${email.id}-${email.email}`"
      v-for="email in mails"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-subtitle contact_link"
        :href="`mailto:${email.email}`"
        >{{ email.email }}</a
      >
    </div>
    <div class="mt-8">
      <Section-title v-show="secondTitle" :title="secondTitle"></Section-title>
      <span class="section-text" v-show="offer" :title="offer">{{
        offer
      }}</span>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SectionTitle from "@/commons/Section-Title.vue";

export default {
  components: { SectionTitle },
  // @ is an alias to /src
  props: {
    title: {
      type: String,
      default: "skontaktuj sie z nami",
    },
    phoneNumbers: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            number: "123456678",
          },
          {
            id: 2,
            number: "999888777",
          },
        ];
      },
    },
    mails: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            email: "qwe@qwe.com",
          },
          {
            id: 2,
            email: "rty@tyu.com",
          },
        ];
      },
    },
    secondTitle: {
      type: String,
      default: "Jesteś zainteresowany stałą współpracą",
    },
    offer: {
      type: String,
      default:
        "skontaktuj sie z nami, na pewno przygotujemy dla Ciebie ofertę która Cię usatysfakcjonuje",
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.contact_link {
  position: relative;
  padding-bottom: 2px;
  color: $dp-black;
  display: inline-block;
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: $dp-yellow;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    background-color: transparent;
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
