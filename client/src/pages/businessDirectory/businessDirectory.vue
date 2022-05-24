
<template>
  <div id="businessDirectoryPage">
    <div class="columns">
      <div
        v-bind:style="
          this.$parent.mobileView ? '' : 'margin-left:15em; margin-right:15em;'
        "
      >
        <div class="column is-full">
          <div style="text-align: center">
            <strong class="title"> Business Directory</strong> <br />
            <a
              href="http://business.penderharbour.ca/penderharbourdirectory"
              target="_blank"
              class="subtitle button is-primary" style="padding:1rem"
            >
              Browse 100+ businesses in Pender Harbour and area
            </a>
            <br />

            <p>
              ​Secret Cove, Madeira Park, Kleindale, <br />
              Garden Bay, Irvines Landing, <br />
              Ruby Lake, Earls Cove <br />
              ​and Egmont <br /><br />
            </p>
          </div>
          <div
            v-bind:style="this.$parent.mobileView ? '' : 'margin-left:5.5em;'"
          >
            <img src="../../assets/images/businessDirectoryBanner.jpg" />
            <br />
            <br />
          </div>
          <div style="text-align: center">
            <p>
              <strong>
                Population 2,624 (2016 Census) <br />
                Growth Rate -2% (2011 Census) <br />
                Dwellings 1,381 occupied private dwellings <br />
                Area 1,901 sq. km.
              </strong>
              <br />
              <br />
            </p>
          </div>
          <p>
            For families moving to the area, Pender Harbour also features
            excellent
            <a
              href="https://www.daycareiq.com/canada/british-columbia/madeira-park/serendipity-child-care-centre"
            >
              child care facilities</a
            >, including a pre‐school, Madeira Park Elementary School (K‐6), and
            the Pender Harbour High School (7‐12).
          </p>
          <br />
          <p>
            <a href="http://www.penderharbourhealth.com/">
              ​The Pender Harbour Health Clinic
            </a>
            includes a full time <strong>dentist </strong> and
            <strong> medical clinic </strong> as well as offering a variety of
            other services, including
            <strong> massage therapists, chiropractors </strong> and
            <strong> physiotherapists. </strong> <br />
            <br />

            ​<strong> Need car repairs? </strong> Call the
            <a
              href="http://business.penderharbour.ca/penderharbourdirectory/Search/automotive-supplies-and-services-104363"
            >
              Pender Harbour Automotive and Tire shop.
            </a>
            For
            <strong>
              automotive, marine, industrial and recreational parts and tools,
              pop by Pender Harbour Diesel. Both shops are in Kleindale across
              the highway from the
            </strong>
            <a
              href="https://www.petro-canada.ca/en/personal/gas-station-locations/13525-sunshine-coast-hwy-madeira-park"
            >
              PetroCanada.
            </a>
            <br />
            <br />

            <a href="http://business.penderharbour.ca/penderharbourdirectory">
              CLICK HERE
            </a>
            <strong>
              for a complete list of businesses in the Pender Harbour and Egmont
              areas.
            </strong>
          </p>
        </div>
      </div>
    </div>

    <div
      v-bind:style="
        this.$parent.mobileView ? '' : 'margin-left:5em; margin-right:5em;'
      "
    >
      <article class="notification">
        <p class="title">Want your business here?</p>
        <div style="" class="content">
          <p>
            Whether you're looking for a turnkey business or you have a start-up
            in the works, the Pender Harbour and Egmont area is full of
            opportunities!
          </p>
          <a :href="'#/about/businessOpportunity'"> Click here!</a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "businessDirectoryPage",
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
#businessDirectoryPage {
  margin: 2rem;
  align-content: center;
}
p {
  font-family: Merriweather;
}

img {
  margin: auto;
}

*,
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>












