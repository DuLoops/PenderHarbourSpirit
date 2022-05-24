<template>
  <div id="main">
    <h1 class="title">Vistor Information Centres</h1>

    <div id="Pender" class="content tile is-ancestor">
      <div class="tile  is-parent">
        <div class="tile is-child">
          <h2>Pender Harbour</h2>
          <h4>​Visitor Information Booth</h4>
          <p>
            <i>
              Please email, phone, or contact us through
              <a
                href="https://www.facebook.com/penderharbouranddistrict"
                target="_blank"
                >Facebook</a
              >
              anytime!
            </i>
          </p>
          <p>
            Located in the heart of Madeira Park, our Visitor Info Booth
            provides access to public washrooms, free WIFI, and lots of free
            parking so you can walk around the village, go grab something to
            eat, do a little shopping, or spend the day on the water!
          </p>
          <p>
            <strong class="subtitle">HOURS:</strong> <br />9:00am to 4:00pm
            OPEN: Every weekend in June and daily in July and August until the
            end of the September long weekend.
          </p>
          <p>
            Let us help you ​find accommodations, restaurants, boat tours, as
            well as provide you with maps and info on the many recreational
            activities available in the Pender Harbour and Egmont area. We also
            mail info packages.
          </p>
        </div>
        <div class="box tile is-child">
          <h2>Contact</h2>
          <h4>Visitor's Information Centre</h4>
          <img
            src="../../assets/images/experience/pender/visitCenter.jpg"
            alt="Picture"
            style="width: auto; max-width: 100%"
          />
          <p><i>Visitor Info Booth in Madeira Park</i></p>

          <p>
            Email or phone the Pender Harbour Visitors Info Center anytime and
            we'll help you plan your visit.
          </p>
          <p>
            Email:
            <a href="mailto: info@penderharbour.ca">info@penderharbour.ca</a>
            <br/>Phone: <a href="tel:604-883-2561">604-883-2561</a>
            <br>Facebook: <br><a href="https://www.facebook.com/penderharbouranddistrict">https://www.facebook.com/penderharbouranddistrict</a>
            <br>Instagram: <br><a href="https://www.instagram.com/pender_harbour/">https://www.instagram.com/pender_harbour/</a>
            <br>By mail: <br>P.O. Box 265, Madeira Park, BC (V0N 2H0)
          </p>
        </div>
      </div>
    </div>

    <div id="Egmont" class="content tile is-ancestor">
      <div class="tile  is-parent">
        <div class="tile is-child">
          <h2>Egmont</h2>
          <h4>​Visitor Information Booth</h4>
          <p>
            Located at the entrance to Egmont and across the road from the
            <a
              href="https://bcparks.ca/explore/parkpgs/skook_narrows/"
              target="_blank"
            >
              Skookumchuck Narrows Provincial Park</a
            >
            trailhead to the Skookumchuck rapids and whirlpools, the
            <a
              href="http://www.egmontheritagecentre.com/info.html"
              target="_blank"
              >Egmont Heritage Center</a
            >
            provides tourist information, a great gift shop, access to public
            washrooms, free WIFI, picnic areas and lots of free parking so you
            can hike to the rapids or just stroll down to this tiny and very
            picturesque fishing village.
          </p>
          <p>
            <strong class="subtitle">HOURS:</strong> <br /><b>Spring</b
            ><br />Thursday - Monday 10am - 5pm. (starting Easter weekend)
            <br /><b>Summer</b><br />/Fall Daily 10am - 5pm. (starting Victoria
            Day and ending Thanksgiving) <br /><b>Fall/Winter</b><br />
            Thursday - Monday 10am - 5pm. (starting Thanksgiving and ending
            December 24th) <br /><b>Winter</b><br />
            Open by request - call 604.883.9994 or email us at
            EgmontHeritage@outlook.com
          </p>
        </div>
          <div class="tile is-child box">
            <h2>Contact</h2>
            <h4>​Egmont Heritage Centre</h4>
            <img
              src="../../assets/images/experience/egmont/heritageCentre.jpg"
              alt="Picture"
              style="width: auto; max-width: 100%"
            />
            <p>
              <a href="http://www.egmontheritagecentre.com/info.html"
                >The Egmont Heritage Centre</a
              >
              offers a Visitor Information Center and is located across from the
              entrance to the Skookumchuck Rapids hike. Find free parking,
              washrooms, a gift shop and displays of historic artifacts that
              paint a picture of this fishing and logging community.
            </p>
            <p>
              Email:
              <a href="mailto: EgmontHeritage@outlook.com"
                >EgmontHeritage@outlook.com</a
              ><br />Phone: <a href="tel:604-883-9994">604-883-9994</a>
              <br>By mail: 6671 Egmont Rd. Egmont, BC (V0N 1N0)
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCentres",
  mounted () {
  window.scrollTo(0, 0)
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  align-content: center;
  padding-top: 1rem;
}

.title {
  text-align: center;
}
.is-child{
  padding: 1rem;
}

@media (min-width: 1200px) {
#main {
  width: 70%;
  margin: auto;
}}

</style>

