<template>
<div id="contactUsPage">

<div class="columns">
  <div class="column is-full"> 
    <img class="heading_picture" src="../../assets/images/contactUs_frontPicture.jpg"> 
    <div class="heading_text"> 
  <p > Contact Us  </p> 
   </div>
</div>
</div>


<div class="columns">

  <div class="column">
   <div class="contactUs_title" > <h> Our Contact </h> </div> 
      <div class="contactUs"> 

    <p> <h> mail: </h> P.O. Box 265, Madeira Park, BC V0N 2H0 </p>
    <p> <h> phone: </h> 1-604-883-2561 Toll-Free: 1-877-873-6337​ </p>
    <p> <h> E-mail: </h> chamber@penderharbour.ca </p>
    <p> <h> Facebook: </h> www.facebook.com/penderharbouranddistrict </p>
    <p> <h> Instagram: </h> www.instagram.com/pender_harbour </p>

   </div>
    <div class="columns is-mobile">
      <div class="column" style="text-align:center;">
        <p> Pender Harbour Map </p>
      <a href="https://drive.google.com/file/d/1fw_czWSe0XkI7Yi1D9BWHaZwaKSBI77Y/view?usp=sharing">  <img src="../../assets/images/penderHarbour_map_Img.jpg" style="width:50%;"> </a>

      </div>
      <div class="column" style="text-align:center;">
         <p> Egmont Map </p> 
      <a href="https://drive.google.com/file/d/115IV0a_NV_fjswkRes0qmhnVM3YKW1Ux/view?usp=sharing"> <img src="../../assets/images/egmont_map.jpg" style="width:50%;">  </a>
     
      </div>
    </div>
  </div>

</div>

</div>
</template>

<script>
export default {
  name: 'contactUsPage',
  data () {
    return {
      
    }
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.heading_picture {

    width: 300em;
    height: 45em;
}

.heading_text {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%); 
  color: white; 
  font-size: 3.75em; 
  font-weight: bold;
  font-family: SunnySpells;
}

.contactUs {
 
  text-align: center;
  font-size: 1.0em; 
  font-family: StarJedi;
}


.contactInfo {
  font-family: StarJedi;
  text-align: left;
}

h{
  font-weight: bold;
}

p{
  font-family: StarJedi;
}

.contactUs_title {

text-align: center;
font-size: 2em;

}

</style>












