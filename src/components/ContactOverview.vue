<template>
  <div class="pa-0 ma-0 section-container d-flex flex-column">
    <Section-title v-show="title" :title="title"></Section-title>
    <div
      :key="phoneNumber.id"
      v-for="phoneNumber in phoneNumbers"
      class="contact__common-section"
    >
      <a :href="`tel:${phoneNumber.number}`">{{ phoneNumber.number }}</a>
    </div>
    <div :key="email.id" v-for="email in mails" class="contact__common-section">
      <a :href="`mailto:${email.email}`">{{ email.email }}</a>
    </div>
    <Section-title v-show="secondTitle" :title="secondTitle"></Section-title>
    <span v-show="offer" :title="offer">{{ offer }}</span>
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
        default: "skontaktuj sie z nami",
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";

.text-overview_container {
  display: flex;
  align-items: center;
  flex-direction: column;

  .text-overview_title {
    margin: 0 auto 15px auto;
    outline: 0;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      height: 4px;
      background-color: $dp-yellow;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
