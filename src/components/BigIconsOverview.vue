<template>
  <div class="section-container big-icons-container">
    <div
      :key="icon.id"
      v-for="icon in icons"
      class="big-icons-overview_wrapper"
    >
      <BigCard :icon="icon" :btnProps="icon.iconBtnProps"></BigCard>
    </div>
  </div>
</template>

<script>
import BigCard from '@/commons/BigCard.vue';

export default {
  components: { BigCard },
  props: {
    icons: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';
.big-icons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: $mobileBreakpoint) {
    flex-direction: row;
  }
  .big-icons-overview_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
}
</style>
