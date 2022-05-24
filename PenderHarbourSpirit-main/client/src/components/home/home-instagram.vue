<template>
  <div id="main" class="box">
    <h3 class="subtitle">
        <b-icon pack="fab" icon="fa-instagram"></b-icon>
        Follow
        <a href="https://www.instagram.com/pender_harbour/" class="at"
          >@pender_harbour</a
        >
      </h3>
    <div class=" container">
      
      <div class="card">
        <iframe src="https://www.instagram.com/p/CaTi1dQLQXk/embed" />
      </div>
      <div class="card">
        <iframe src="https://www.instagram.com/p/CdD3eMUrviX/embed" />
      </div>
      <div class="card">
        <iframe src="https://www.instagram.com/p/Cahw38UJtmL/embed" />
      </div>
      <div class="card">
        <iframe src="https://www.instagram.com/p/CZSSqKmPBLN/embed" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInstagram",
};
</script>

<style scoped>
#main {
  margin-top: 2rem;
  text-align: center;
}
.container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem ;
}

.card { 
    position: relative; 
    width: 100%; 
    height: 300px; 
    padding-bottom: 56.25%; 
} 
.card iframe { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
}

@media only screen and (max-width: 1024px) {
  .container{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1rem ;
}
  
}

@media only screen and (max-width: 441px) {
  .container{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1rem ;
}
  
}

</style>