<template>
  <div id="main">
    <div id="nav">
      <div class="tabs is-toggle">
        <ul>
          <li
            id="pender"
            :class="{ 'is-active': isPender }"
            @click="isPender = true"
          >
            <a>
              <span>Pender Harbour Area</span>
            </a>
          </li>
          <li
            id="egmont"
            :class="{ 'is-active': !isPender }"
            @click="isPender = false"
          >
            <a>
              <span>Egmont Area</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isPender">
      <Pender />
    </div>

    <div v-if="!isPender">
      <Egmont />
    </div>
  </div>
</template>


<script>
import Banner from "../../components/Banner.vue";
import Pender from "./pender.vue";
import Egmont from "./egmont.vue";

export default {
  name: "Area",
  data() {
    return {
      isPender: true,
    };
  },
  components: {
    Banner,
    Pender,
    Egmont,
  },
  mounted () {
  window.scrollTo(0, 0)
}
};
</script>

<style scoped>
#main {
  margin: 1rem;
}
#nav {
  padding-top: 1rem;
  margin: 1rem auto;
}

@media (min-width: 768px) {
}

@media (min-width: 1200px) {
  #main {
    width: 80%;
    margin: auto;
  }

  #nav span {
    font-size: 1.5rem;
  }

}
</style>