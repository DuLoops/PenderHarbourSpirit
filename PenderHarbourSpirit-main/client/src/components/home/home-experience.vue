<template>
  <div>


  
   
  

    <div id="activities">
      <home-experience-card desc="Activities" imgSource="home/kayak-two.jpg" link="/Activity"/>
      <home-experience-card desc="Events" imgSource="home/music-chamber.jpg" link="/Experience_Events"/>
      <home-experience-card desc="Restaurants & Leisure" imgSource="home/backeddy-pub_orig.jpg" link="/Experience_Restaurant"/>
      <home-experience-card desc="Pender Harbour & Egmont" imgSource="home/egmont.jpg" link="/Experience_Area"/>
      

    </div>
  </div>
</template>

<script>
import HomeExperienceCard from './home-experience-card.vue';

export default {
  components: { HomeExperienceCard },
  name: "HomeExperience",
  
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p{
  font-family: Merriweather;
}
* {
  text-align: center;
  font-size: 1.3rem;
}

#activities {
  display: flex;
  flex-direction: column;
}

#activities-last {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.activity {
  position: relative;
}

.activity img {
  height: 250px;
  width: 100%;
}

.desc {
  font-family: sans-serif;

  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translate(-50%, 0);

  color: white;
}

@media (min-width: 768px) {
  #activities {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 1rem;
  }

  home-experience-card img {
    height: 300px;
    width: 100%;
  }
}

@media (min-width: 1200px) {
  #activities {
    margin: 2rem;
  }

  home-experience-card img {
    width: 100%;
    height:400px;
  }
}


</style>
