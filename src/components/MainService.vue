<template>
  <v-container class="section-container pa-0 d-flex flex-column align-center">
    <v-container
      class="pa-0 ma-0 mb-8 d-flex flex-md-column-and-down small-about_container"
    >
      <div class="small-about_img-wrapper">
        <img
          class="small-about_img"
          :src="owner.imageUrl"
          :alt="owner.imageName"
        />
      </div>
      <div class="small-about_overview">
        <Section-title :title="owner.title"></Section-title>
        <h4 class="section-small-subtitle" v-html="owner.subtitle"></h4>
        <p class="section-text" v-html="owner.about"></p>
      </div>
    </v-container>
    <LinkButton :btnProps="btnProps"></LinkButton>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SectionTitle from "@/commons/Section-Title.vue";
import LinkButton from "@/commons/LinkButton.vue";
import vuetify from "@/plugins/vuetify";

export default {
  vuetify,
  components: { SectionTitle, LinkButton },
  data() {
    return {
      btnProps: {
        link: "/services",
        color: "#3b3d42",
        btnWidth: 340,
        outlined: false,
        text: "Dowiedz się więcej",
      },
    };
  },
  // @ is an alias to /src
  props: {
    owner: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.small-about_title-container {
  width: 100%;
  text-align: center;
}
.small-about_container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: $mobileBreakpoint) {
    min-height: 30vh;
    flex-direction: row;
    margin-bottom: 60px;
  }
  .small-about_img-wrapper {
    width: 100%;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
    }
    .small-about_img {
      overflow: hidden;
      object-fit: cover;
      width: $mobileWidth;
      @media (min-width: $mobileBreakpoint) {
        width: $mobileBreakpoint;
      }
    }
  }
  .small-about_overview {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: $mobileBreakpoint) {
      width: 50%;
    }
    .small-about_link {
      color: $dp-black;
    }
  }
}
</style>
