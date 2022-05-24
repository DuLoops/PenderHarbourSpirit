<template>
  <div id="roleMissionPage" style="margin-left: 5em">
    <div style="font-size: 1.8em; text-align: center">
      <strong> Business Opportunities in Pender Harbour & Egmont </strong>
    </div>
    <br />
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-11">
        <div class="tile">
          <div style="" class="tile is-parent is-vertical">
            <article class="tile is-child">
              <div class="columns">
                <div class="columns is-mobile">
                  <div class="column">
                    <p class="bd-notification is-info">
                      <img
                        style="margin-left: 4em"
                        class="image is-128x128"
                        src="../../assets/images/weAreOpen.jpg"
                      />
                    </p>
                    <div style="font-size: 1.2em">
                      <p>
                        To get support for starting your business in the Pender
                        Harbour & Egmont area, please
                        <a :href="'#/about/contactUs'">
                          <strong>get in touch! </strong>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="column is-four-fifths">
                    <p class="subtitle">
                      The Pender Harbour and Egmont areas offer opportunities
                      for a variety of small and medium businesses. These small
                      communities are experiencing more tourism opportunities as
                      the Sunshine Coast becomes more well-known. Take advantage
                      of this opportunity and consider investing in an
                      established or new business. Our stats show that the
                      Pender Harbour Visitor Info Booth gets information
                      requests for services that are either non-existent or
                      there is a greater demand than the current supply.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Vistors' needs:</p>
            <div style="margin-left: 2em" class="content">
              <li>Waterpark</li>
              <li>Fish Restaurant</li>
              <li>Laundromat</li>
              <li>Playground</li>
              <li>Skateboard Park</li>
              <li>Taxi Service</li>
              <li>Farmer's Market</li>
              <li>Music Festivals</li>
              <li>RV Dump Station</li>
              <li>Rental Apartments</li>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="columns is mobile">
          <div style="margin-left: 10em; margin-right: 10em" class="column">
            <br />
          </div>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "roleMissionPage",
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#roleMissionPage{
  margin: 2rem;
}
.description_volunteer {
  font-size: 0.6em;
}

p {
  font-family: Merriweather;
}


.box{
  margin: 2rem auto;
  width: 50%;
}
.box img {
  float: left;
  margin: 0 2rem 0 0;
}
</style>












