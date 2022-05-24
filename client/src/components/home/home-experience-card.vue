<template>
  <div class="card">
    <router-link :to="link">
      <div class="card-image">
        <img
          :src="require(`@/assets/images/${imgSource}`)"
          loading="lazy"
          alt=""
        />
      </div>
      <div class="media-content">
        <p class="title is-4">{{ desc }}</p>
        <button class="button is-info"><b>READ MORE</b></button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    link: String,
    imgSource: String,
    desc: String,
  },
};
</script>

<style scoped>
.card-image {
  position: relative;
}

.title {
  /* font-weight: 700; */
  font-size: 2rem;

  position: absolute;
  left: 2rem;
  bottom: 0px;
  max-width: 60%;
  color: white;
}

.button {
  position: absolute;
  right: 10px;
  bottom: 20px;
}

.button,
.title {
  font-family: sans-serif;
}

img {
  height: 250px;
  width: 100%;
}
@media (min-width: 768px) {
  img {
    height: 300px;
    width: 100%;
  }
}

@media (min-width: 1200px) {
  img {
    width: 100%;
    max-height: 400px;
  }
}

@media (min-width: 1900px) {

  img {
    width: 100%;
    height: 600px;
  }
}


</style>