<template>
  <div class="text-center">
    <v-overlay>
      <Section-title v-show="title" :title="title"></Section-title>
      <p>{{ text }}</p>
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionTitle from "@/commons/Section-Title.vue";

export default {
  components: { SectionTitle },
  data() {
    return {
      title: "Przepraszamy",
      text: "Mamy problemy techniczne i staramy się je naprawić",
    };
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
</style>
