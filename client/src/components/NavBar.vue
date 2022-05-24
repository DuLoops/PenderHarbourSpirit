<template>
  <div class="navBar">
  <b-navbar shadow=true fixed-top=true transparent=true>
        <template #brand id="brand">
                <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
                    <img class ="logo"
                        src="../assets/images/penderHarborLogo-removebg.png"
                        alt="Pender Harbor Logo"
                    >
                </b-navbar-item>
        </template>
        
        <template #start>
                <!-- HOME -->
                <b-navbar-item 
                tag="router-link" 
                :to="{ name: 'Home' }" 
                style="font-weight: bold; font-size: 12pt; color: #4A4A4A"
                v-if="isMobileView">
                    HOME
                </b-navbar-item>
                <!-- EXPERIENCE -->
                <b-navbar-dropdown 
                    id="infoDropDown" 
                    label="EXPERIENCE" 
                    hoverable=true
                    collapsible=true
                    boxed=true
                    style="font-weight: bold; font-size: 12pt"
                >
                    <b-navbar-item tag="router-link" :to="{ name: 'Activity' }">
                        Activities
                    </b-navbar-item>
                       <b-navbar-item href="#/Experience_events">
                        Events
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'Experience_Restaurant' }">
                        Restaurant & Leisure
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'Experience_Area' }">
                        Pender Harbour & Egmont
                    </b-navbar-item>
                </b-navbar-dropdown>

                <!-- TRAVEL INFORMATION -->
                <b-navbar-dropdown 
                    id="infoDropDown" 
                    label="TRAVEL INFORMATION" 
                    hoverable=true
                    collapsible=true
                    boxed=true
                    style="font-weight: bold; font-size: 12pt"
                >
                    
                    <b-navbar-item href="#/travel/howToGetHere">
                        How to Get Here & Maps
                    </b-navbar-item>
                    <b-navbar-item href="#/travel_information/Accommodations">
                        Accommodations
                    </b-navbar-item>
                    <b-navbar-item href="#/travel_information/InfoCentres">
                        Visitor's Information Center
                    </b-navbar-item>
                    <b-navbar-item href="https://www.visitpenderharbouregmont.com/" target="_blank">
                        Visitor's Guidebook
                    </b-navbar-item>
                </b-navbar-dropdown>

                <!-- BUSINESS -->
                <b-navbar-dropdown 
                    id="infoDropDown" 
                    label="BUSINESS" 
                    hoverable=true
                    collapsible=true 
                    boxed=true
                    style="font-weight: bold; font-size: 12pt"
                >
                    <b-navbar-item href="#/business/opportunity">
                        Opportunity
                    </b-navbar-item>
                    <b-navbar-item href="#/business/directory">
                        Directory
                    </b-navbar-item>
                </b-navbar-dropdown>

                <!-- ABOUT -->
                <b-navbar-dropdown 
                    id="infoDropDown" 
                    label="ABOUT" 
                    hoverable=true 
                    collapsible=true 
                    boxed=true 
                    style="font-weight: bold; font-size: 12pt"
                >
                    <b-navbar-item href="#/about/contactUs">
                        Contact Us
                    </b-navbar-item>
                    <b-navbar-item href="#/about/boardOfDirectors">
                        Board of Directors
                    </b-navbar-item>
                    <b-navbar-item href="#/about/roleMission">
                        Our Role, Mission, Goals
                    </b-navbar-item>
                    <b-navbar-item href="#/about/relatedWebsites">
                        Releated sites
                    </b-navbar-item>
                </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" style="font-weight: bold; background: #262633;" target="_blank" href="https://sunshinecoast.growthzoneapp.com/MIC/login">
                        Membership
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
      return {

      }
  },
  props: [
    "isMobileView"
  ], 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
    max-height: 20em;
    max-width: 20em;
}

span {
    font-weight: bold;
    font-size: 12pt;
}

* {
    color: rgb(53, 53, 53);
    font-family: "Merriweather";
}

.navBar {
    margin-bottom: 47px;
}

@media screen and (max-width: 1024px) {
    .logo {
        max-height: 15em;
        max-width: 15em;
    }
    .buttons {
        display: grid;
        grid-template-columns: auto auto;
    }
}

@media (min-width: 1024px) and (max-width: 1080px) {
    .logo {
        max-height: 20em;
        max-width: 16em;
    }
}

@media (min-width: 1080px) and (max-width: 1114px) {
    .logo {
        max-height: 20em;
        max-width: 18em;
    }
}

@media (min-width: 1024px) and (max-width: 1196px) {
    .buttons {
        display: grid;
        grid-template-rows: auto auto;
    }
    .navBar {
        margin-bottom: 53px;
    }
}

</style>


