<template>
<div id="roleMissionPage" v-bind:style="this.$parent.mobileView ? '' : 'margin-left:5em;'">

<div style="font-size:1.8em; text-align: center;"><strong> Our Role, Mission & Objectives </strong> </div>
<br>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-11">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child">
          <div v-bind:style="this.$parent.mobileView ? 'margin-left:1em;' : ''">
          <img src="../../assets/images/volunteer1.jpg">
          </div>
         <p class="description_volunteer"> Volunteer watering community gardens around the Visitors Info Booth and the public washrooms </p>
        </article>
        <article class="tile is-child">
          <strong> Mission Statement </strong>
          <p class="subtitle">The Pender Harbour Chamber of Commerce's mission is to promote the unique heritage of the Pender Harbour & Egmont area, to make it a better place to live, work or play.</p>
        </article>
      </div>

      <div class="columns">
   
     <div class ="column">
        <div style="text-align:center;"> <strong> Goals & Objectives </strong> </div>
       <div class ="columns is mobile">
      <div class="column">
       
        <br>
          <p> For Business & Membership, the Chamber will: </p>
          <div style="margin-left:1.5em">
         <li> Support – help – facilitate business interest  </li>
         <li> Provide a common voice for business   </li>
         <li> Facilitate joint community and business marketing   </li>
         <li> Facilitate promotion of tourism   </li>
         <li> Assist in stimulating the economy  </li>
         <li> Promote economic growth and development  </li>
         <li> Encourage business & industry to locate or expand here   </li>
         <li> Encourage job creation for community members  </li>
         <li> Promote fair practices between businesses  </li>
         <li> Provide educational opportunities for members  </li>
         <li> Provide governmental agency liaison & lobbying  </li>
         </div>
       
      </div>
      <div class="column">
     
      <br>
          <p> For the Community, the Chamber will: : </p>
          <div style="margin-left:1.5em">
         <li> Support and preserve community & regional heritage </li>
         <li> Support enhancement of community vitality </li>
         <li> Act as contact/catalyst for community improvement </li>
         <li> Encourage co-operation between community partners </li>
         <li> Act as community advisors </li>
         <li> Act as a sounding board for community members </li>
         <li> Be a community information resource </li>
         <li> Assist in promotion of special community events </li>
         <li> Influence the type of community development </li>
         </div>
      </div>
      </div>
      </div>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification ">
        <p class="title">Pender Harbour & District</p>
        <p class="subtitle">Economic Development Study – 2014</p>
        <div class="content">
       <p> In 2014, the Pender Harbour & District Chamber of Commerce commissioned a team of graduate students from the Master of Management Program of the Sauder School of Business, University of British Columbia, to develop an economic strategic plan for the Pender Harbour area. This plan’s focus is on integrative marketing to better attract and satisfy new residents and visitors as a way to improve future economic growth.</p>
       <a href="http://www.penderharbour.ca/uploads/2/4/9/3/24939859/phcc_sauder_team_report_cbp_-_pender_harbour_final_rev_2.pdf"> Download Report </a>
        </div>
      </article>
    </div>
  </div>
  <div style ="display:none;" class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">​Economic Development Study – 2014</p>
        <div class="content">
          <p> </p>
        </div>
      </div>
    </article>
  </div>
</div>


</div>


</template>

<script>
export default {
  name: 'roleMissionPage',
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

.description_volunteer {
font-size: 0.6em;
}

p{
  font-family: Merriweather;
}

</style>












