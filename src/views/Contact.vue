<template>
  <div class="contact">
    <Map></Map>
    <ContactOverview></ContactOverview>
  </div>
</template>
<script>
import Map from "@/components/Map.vue";
import ContactOverview from "@/components/ContactOverview.vue";

export default {
  name: "Contact",

  components: {
    Map,
    ContactOverview,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
