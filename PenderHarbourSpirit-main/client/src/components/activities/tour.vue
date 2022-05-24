<template>
  <div>
        <banner
      :isMobileView="mobileView"
      rootDirectory="Experience"
      childDirectory="Self-Guided Heritage Tour"
      description=""
    />

    <div class="paragraph"><font size="4"><span style="color:rgb(42, 42, 42)">Take a self-guided heritage tour of historic places throughout the Pender Harbour area, including in Francis Peninsula, Madeira Park, Kleindale, and Garden Bay. Use the map&nbsp;<a href="http://www.penderharbourheritage.ca/self-guided-heritage-tour.html" target="_blank">o</a>n the <a href="http://www.penderharbourheritage.ca/self-guided-heritage-tour.html" target="_blank">Pender Harbour Living Heritage Society's website</a>, or go directly to the map&nbsp;</span><a href="https://www.google.com/maps/d/edit?mid=1hk8IcTkZx99_TAY19PunCWjrTmm_pwhR&amp;usp=sharing" target="_blank">in Google maps</a><span style="color:rgb(42, 42, 42)">.</span></font></div>

    <img src="../../assets/images/experience/pender/penderHarbour.png" alt="">
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