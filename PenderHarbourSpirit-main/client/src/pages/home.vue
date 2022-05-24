<template>
  <div id="main">

  <div style="font-size:4em; font-weight: bold; text-align:center; margin-top:1em; margin-bottom:0.5em;">
      <p>Experience the beauty of PenderHarbour & Egmont</p>
       </div>

 <div class="container">

      <video controls class="video">
      <source
        src="http://www.penderharbour.ca/uploads/b/24939859-926426422358796356/pender-harbour-spirit_782.mp4"
        type="video/mp4"
      />
    </video>
    </div>

    
    <div id="menu">


    
      <HomeExperience />


      
      <div id="travel_business">
        <HomeTravel />
        <HomeBusiness />
      </div>
      <HomeInstagram />
    </div>
  </div>
</template>

<script>
import HomeExperience from "../components/home/home-experience.vue";
import HomeTravel from "../components/home/home-travel.vue";
import HomeBusiness from "../components/home/home-business.vue";
import HomeInstagram from "../components/home/home-instagram.vue";

export default {
  name: "Home",
  components: {
    HomeExperience,
    HomeTravel,
    HomeBusiness,
    HomeInstagram,
  },
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-family: Merriweather;
}

@media (min-width: 768px) {
}

@media (min-width: 1200px) {
  #main {
    width: 70%;
    margin: auto;
  }

  #travel_business {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  * {
    font-size: 1.2rem;
  }
}
@media (min-width: 1900px) {
  #main {
    width: 60%;
  }


}

</style>











