const distanceMixin = {
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      drawer: false,
      group: null,
      distanceScrolled: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const header = document.getElementById("header");
      this.distanceScrolled =
        document.body.scrollTop + header.getBoundingClientRect().top * -1;
    },
  },
  computed: {
    isMenuTransparent: function () {
      return this.distanceScrolled < this.headerHeight;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};

export default distanceMixin;
