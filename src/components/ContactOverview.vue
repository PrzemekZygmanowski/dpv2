<template>
  <div class="section-container d-flex flex-column align-center">
    <Section-title v-show="title" :title="title"></Section-title>
    <h3 class="section-text">Zamówienia</h3>
    <div
      :key="`${phoneNumber.id}-${phoneNumber.number}`"
      v-for="phoneNumber in contactForOrders"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-title contact_link"
        :href="`tel:${phoneNumber.number}`"
        >{{ phoneNumber.number }}</a
      >
    </div>
    <h3 class="section-text">Przedstawiciel handlowy</h3>
    <div
      :key="`${phoneNumber.id}-${phoneNumber.number}`"
      v-for="phoneNumber in contacts"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-title contact_link"
        :href="`tel:${phoneNumber.number}`"
        >{{ phoneNumber.number }}</a
      >
    </div>
    <h3 class="section-text">e-mail</h3>
    <div
      :key="`${email.id}-${email.email}`"
      v-for="email in mails"
      class="contact__common-section"
    >
      <a
        class="link-reset section-small-title contact_link"
        :href="`mailto:${email.email}`"
        >{{ email.email }}</a
      >
    </div>
    <div class="mt-8 d-flex flex-column align-center" v-show="offer">
      <Section-title :title="secondTitle"></Section-title>
      <span class="section-text">{{ offer }}</span>
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
    },
    contactForOrders: {
      type: Array,
    },
    contacts: {
      type: Array,
    },
    mails: {
      type: Array,
    },
    secondTitle: {
      type: String,
    },
    offer: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.contact_link {
  position: relative;
  padding-bottom: 2px;
  color: #1976d2;
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
