<template>
  <div>
    <Dropdown currentNav=0 />
    
    
  </div>
  
</template>

<script>
import Dropdown from "../../components/activities/dropdown.vue"


export default {
  components: { Dropdown },
  name: "Activities",

  data() {
    return {
      currentNav: 1
      }
  },
  mounted () {
  window.scrollTo(0, 0)
}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>