<template>
  <div id="app">
    <navBar :isMobileView="mobileView"/>
    <router-view/>
    <Footer :isMobileView="mobileView" :enableNav="footerNavigation"/>
  </div>
</template>

<script>
import Footer from "./components/Footer"
import navBar from './components/NavBar.vue'

export default {
  name: 'App',
  data() {
    return {
      mobileView: false,
      footerNavigation: true,
      showNav: false,
    }
  },
  methods: {
    toggleMobileView() {
      this.mobileView = (window.innerWidth <= 1024); //Becomes TRUE when it hits below this threshold
    },
    toggleFooterNavigation() {
      this.footerNavigation = (window.innerWidth <= 441); //Becomes TRUE when it hits below this threshold
    }
  },
  components: {
    navBar,
    Footer,
  },
  // Lifecycle Hook: Listens to any method declared inside once component is created
  created() {
    this.toggleMobileView();
    this.toggleFooterNavigation();
    window.addEventListener("resize", this.toggleMobileView);
    window.addEventListener("resize", this.toggleFooterNavigation);
  },
}


</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "Merriweather";
  src: local("Merriweather"), 
  url(./assets/fonts/merriweather-font/Merriweather-RXwe.ttf) format("truetype");
 
}

@font-face {
  font-family: "SunnySpells";
   src: local("SunnySpells"), 
  url(./assets/fonts/sunny-spells-font/SunnyspellsRegular-MV9ze.otf) format("opentype");
}

@font-face {
  font-family: "StarJedi";
   src: local("StarJedi"), 
  url(./assets/fonts/star-jedi-font/StarJedi-DGRW.ttf) format("truetype");
}

</style>
