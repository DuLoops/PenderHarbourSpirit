<template>
  <div>
        <banner
      :isMobileView="mobileView"
      rootDirectory="Experience"
      childDirectory="Self-Guided Heritage Tour"
      description=""
    />


  </div>


</template>

<script>
import Banner from "../Banner.vue";

export default {

  name: "Tour",
  components: {
    Banner,
  }, 
  data() {
    return {
      };
  },
}
</script>

<style scoped>

</style>