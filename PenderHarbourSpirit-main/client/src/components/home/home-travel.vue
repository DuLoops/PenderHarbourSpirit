<template>
  <div>
    <h1 class="title">Travel Information</h1>
    <div id="menu">
      <div class="item">
        <router-link to="/travel/howToGetHere">
          <img src="../../assets/images/icons/map.png" alt="" />
          <p>How to get here & maps</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/travel_information/Accommodations">
          <img src="../../assets/images/icons/accomodation.png" alt="" />
          <p>Accomodation</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/travel_information/InfoCentres">
          <img src="../../assets/images/icons/info-center.png" alt="" />
          <p>Visitor Info Centers</p>
        </router-link>
      </div>
      <div class="item">
        <a href="https://www.visitpenderharbouregmont.com/" target="_blank">
          <img src="../../assets/images/icons/guidebook.png" alt="" />
          <p>Visitor's Guidebook</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTravel",
};
</script>

<style scoped>
* {
  align-content: center;
  text-align: center;
}

#menu {
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5px;
}

#menu img {
  width: 100px;
  height: 100px;
}

.item {
  background: #fff;

  box-shadow: 0em 0.5em 0.5em 0em rgba(0, 0, 0, 0.5); 
  border-radius: 0.5em;
  padding: 0.2em;
}

*{
    font-family: Merriweather;

    
}

a{
  color:black;
      text-decoration: none;
}
</style>