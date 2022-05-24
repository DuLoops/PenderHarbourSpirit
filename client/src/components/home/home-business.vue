<template>
  <div>
    <h1 class="title">Business Information</h1>
    <div id="menu">
      <div class="item">
        <router-link to="/business/opportunity">
          <img src="../../assets/images/icons/link.png" alt="" />
          <p>Business Opportunity</p>
        </router-link>
      </div>

      <div class="item">
        <router-link to="/business/directory">
          <img src="../../assets/images/icons/search.png" alt="" />
          <p>Business Directory</p>
        </router-link>
      </div>
    
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeBusiness",
  
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

a, router-link{
  text-decoration: none;
  color: black;
}

*{
    font-family: Merriweather;
}

</style>