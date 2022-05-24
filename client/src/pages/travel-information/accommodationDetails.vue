<template>
  <div id="mainContent">
        <bannerURL
        :img="accommodation.cardviewPicture"
        :isMobileView="mobileView" 
        rootDirectory="Accommodations"
        :childDirectory="accommodation.title"
        :area="accommodation.area"
        :description="accommodation.summary"/>

<!-- MOBILE VIEW -->
        <div class="columns is-desktop" v-if="mobileView">
            <div class="column">
                <div class="box">
                    <div id="boxTitle">
                        <p class="title is-4">Accommodation Details</p>
                    </div>
                    <div id="border"></div>
                    <div id="accommodationDescription">
                        <p class="subtitle">{{accommodation.fullDescription}}</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div id="boxTitle"> 
                        <p class="title is-4">Gallery</p>
                    </div>
                    <div id="border"></div>
                    <div id="carouselBox">
                        <b-carousel 
                        indicator-custom
                        :indicator-inside="false" 
                        :overlay="gallery" 
                        @click="switchGallery(true)"
                        icon-size="is-medium"
                        icon-pack="fas"
                        icon-prev="fa-chevron-circle-left"
                        icon-next="fa-chevron-circle-right">
                            <b-carousel-item v-for="(item, i) in 20" :key="i">
                                <a class="image">
                                    <img :src="getImgUrl(i)">
                                </a>
                            </b-carousel-item>
                            <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
                            <template #indicators="props" indicator-custom="true" >
                                <figure class="al image" :draggable="false">
                                    <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
                                </figure>
                            </template>
                        </b-carousel>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <div id="boxTitle">
                        <p class="title is-4">Location and Contact</p>
                    </div>
                    <div id="border"></div>
                    <div id="googleMapContainer">
                        <gmap-map
                        :center="center"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 400px;"
                        >
                            <gmap-marker
                                :key="index"
                                v-for="(gmp, index) in marker"
                                :position="gmp"
                                @click="center=gmp"
                            ></gmap-marker>
                        </gmap-map>
                    </div>
                    <br>
                    <div id="border"></div>
                    <div id="accommodationContactInfo">

                        <div v-if="accommodation.address" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-location-dot" size="is-small"/>
                            </div>
                            <div id="location" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.address}}, {{accommodation.area}}, {{accommodation.province}} {{accommodation.postalCode}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.phoneNo" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-phone" size="is-small"/>
                            </div>
                            <div id="phoneNumber" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.phoneNo}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.email" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-envelope" size="is-small"/>
                            </div>
                            <div id="email" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.email}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.url" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-earth-americas" size="is-small"/>
                            </div>
                            <div id="website" style="word-break: break-all;"> 
                                <p id="websiteURL">
                                    <a :href="accommodation.url">
                                        {{accommodation.url}} 
                                    </a>
                                </p>
                            </div>
                        </div>

                        <br>

                        <!-- SOCIAL MEDIA -->
                        <div id="otherLinks">
                            <a v-if="accommodation.facebookURL" :href="accommodation.facebookURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fab" icon="facebook-square" size="is-small"/>
                                </div>
                            </a>

                            <a v-if="accommodation.instagramURL" :href="accommodation.instagramURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fab" icon="instagram" size="is-small"/>
                                </div>
                            </a>

                            <a v-if="accommodation.tripadvisorURL" :href="accommodation.tripadvisorURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fa" icon="fa-plane-departure" size="is-small"/>
                                </div>
                            </a>
                        </div>

                        <br>
                        <br>

                        <!-- BUTTONS -->
                        <div id="buttonsBox">
                            <!-- Only if they have tripadvisorURL -->
                            <a v-if="accommodation.tripadvisorURL" :href="accommodation.tripadvisorURL">
                                <b-button type="is-light" style="font-family: Merriweather; font-weight: bold; background: #f1bc68" expanded>
                                    BOOK NOW
                                </b-button>
                            </a>

                            <a v-if="accommodation.url" :href="accommodation.url">
                                <b-button type="is-light" style="font-family: Merriweather; font-weight: bold;" expanded>
                                    VISIT SITE
                                </b-button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

<!-- DESKTOP VIEW -->
        <div class="columns is-desktop is-centered" v-if="!(mobileView)">
            <div class="column is-mobile">
                <!-- DESCRIPTION BOX -->
                <div class="box">
                    <div id="boxTitle">
                        <p class="title is-4">Accommodation Details</p>
                    </div>
                    <div id="border"></div>
                    <div id="accommodationDescription">
                        <p class="subtitle">{{accommodation.fullDescription}}</p>
                    </div>
                </div>

                <!-- GALLERY BOX -->
                <div class="box">
                    <div id="boxTitle"> 
                        <p class="title is-4">Gallery</p>
                    </div>
                    <div id="border"></div>
                    <div id="carouselBox">
                        <b-carousel 
                        indicator-custom 
                        :indicator-inside="false" 
                        :overlay="gallery" 
                        @click="switchGallery(true)"
                        icon-size="is-medium"
                        icon-pack="fas"
                        icon-prev="fa-chevron-circle-left"
                        icon-next="fa-chevron-circle-right">
                            <b-carousel-item v-for="(item, i) in 20" :key="i">
                                <a class="image ">
                                    <img :src="getImgUrl(i)">
                                </a>
                            </b-carousel-item>
                            <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
                            <template #indicators="props">
                                <figure class="al image" :draggable="false">
                                    <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
                                </figure>
                            </template>
                        </b-carousel>
                    </div>
                </div>

                <!-- LOCATION (Google Maps API) BOX -->
                <div class="box">
                    <div id="boxTitle">
                        <p class="title is-4">Location</p>
                    </div>
                    <div id="border"></div>
                    <div id="googleMapContainer">
                        <gmap-map
                        :center="center"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 400px;"
                        >
                            <gmap-marker
                                :key="index"
                                v-for="(gmp, index) in marker"
                                :position="gmp"
                                @click="center=gmp"
                            ></gmap-marker>
                        </gmap-map>
                    </div>
                </div>
            </div>

            <!-- CONTACT INFO BOX -->
            <div class="column is-narrow">
                <div id="contactInfoBox" class="box">
                    <div id="boxTitle">
                        <p class="title is-4">Contact Info</p>
                    </div>
                    <div id="border"></div>
                    <div id="accommodationContactInfo">

                        <div v-if="accommodation.address" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-location-dot" size="is-small"/>
                            </div>
                            <div id="location" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.address}}, {{accommodation.area}}, {{accommodation.province}} {{accommodation.postalCode}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.phoneNo" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-phone" size="is-small"/>
                            </div>
                            <div id="phoneNumber" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.phoneNo}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.email" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-envelope" size="is-small"/>
                            </div>
                            <div id="email" style="color: #7a82a6; word-break: break-all;"> 
                                <p>{{accommodation.email}}</p>
                            </div>
                        </div>

                        <div v-if="accommodation.url" id="infoBox">
                            <div id="icon">
                                <b-icon pack="fa" icon="fa-earth-americas" size="is-small"/>
                            </div>
                            <div id="website" style="word-break: break-all;"> 
                                <p id="websiteURL">
                                    <a :href="accommodation.url">
                                        {{accommodation.url}} 
                                    </a>
                                </p>
                            </div>
                        </div>

                        <br>

                        <!-- SOCIAL MEDIA -->
                        <div id="otherLinks">
                            <a v-if="accommodation.facebookURL" :href="accommodation.facebookURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fab" icon="facebook-square" size="is-small"/>
                                </div>
                            </a>

                            <a v-if="accommodation.instagramURL" :href="accommodation.instagramURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fab" icon="instagram" size="is-small"/>
                                </div>
                            </a>

                            <a v-if="accommodation.tripadvisorURL" :href="accommodation.tripadvisorURL">
                                <div id="socialMediaIcon">
                                    <b-icon pack="fa" icon="fa-plane-departure" size="is-small"/>
                                </div>
                            </a>
                        </div>

                        <br>
                        <br>

                        <!-- BUTTONS -->
                        <div id="buttonsBox">
                            <!-- Only if they have tripadvisorURL -->
                            <a v-if="accommodation.tripadvisorURL" :href="accommodation.tripadvisorURL">
                                <b-button type="is-light" style="font-family: Merriweather; font-weight: bold; background: #f1bc68" expanded>
                                    BOOK NOW
                                </b-button>
                            </a>

                            <a v-if="accommodation.url" :href="accommodation.url">
                                <b-button type="is-light" style="font-family: Merriweather; font-weight: bold;" expanded>
                                    VISIT SITE
                                </b-button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
import BannerURL from "../../components/BannerURL.vue";
import { getAccomodationByName } from "../../data/Accommodations";

export default {
    name: "AccommodationDetails",

    data() {
        return {
            mobileView: false,
            accommodation: null, //Initially null
            gallery: false,

            // Google Maps Data
            center: null,
            marker: [],
            currentLocation: null
        }
    },
    methods: {
        toggleMobileView() {
            this.mobileView = window.innerWidth <= 1024; //Becomes TRUE when it hits below this threshold
        },
        getImgUrl(value) {
            value += 50
            return `https://picsum.photos/id/10${value}/1230/500`
        },
        switchGallery(value) {
            this.gallery = value
            if (value) {
                return document.documentElement.classList.add('is-clipped')
            } else {
                return document.documentElement.classList.remove('is-clipped')
            }
        },
        initializeMapCenter() {
            var center = {
                lat: this.accommodation.latitude,
                lng: this.accommodation.longitude,
            }
            return center;
        },
        initializeMapMarker() {
            var marker = {
                lat: this.accommodation.latitude,
                lng: this.accommodation.longitude,
            }
            return marker;
        },
    },
    props: [
        "title"
    ],
    components: {
        BannerURL,
    },
    created() {
        // Fetch data from JS file upon loading this specific page
        this.accommodation = getAccomodationByName(this.title);

        //Initialize Center Object
        this.center = this.initializeMapCenter();

        //Initialize Map Marker
        this.marker.push(this.initializeMapMarker());

        this.toggleMobileView();
        window.addEventListener("resize", this.toggleMobileView);
    },
};
</script>

<style scoped>
.columns {
    padding-left: 2.5em;
    padding-right: 2.5em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5em;
    width: 100%;
}

#boxTitle {
    padding-bottom: 1em;
    padding-left: 1em; 
    padding-right: 1em;
}

#border {
    border-bottom: 1px solid gainsboro;
}

#accommodationDescription {
    padding-top: 1.5em;
    padding-left: 1em; 
    padding-right: 1em;
}

#contactInfoBox {
    width: 400px;
}

#googleMapContainer {
    padding-top: 1.5em;
    padding-left: 1em; 
    padding-right: 1em;
}

#accommodationDescription > p {
    line-height: 1.6;
    color: #7a82a6;
    font-size: 13pt;
}

#accommodationContactInfo {
    padding-top: 1.5em;
    padding-left: 1em; 
    padding-right: 1em;
}

#accommodationContactInfo > p {
    line-height: 1.6;
    color: #7a82a6;
    font-size: 13pt;
}

#carouselBox {
    padding-top: 1.5em;
    padding-left: 1em; 
    padding-right: 1em;
}

.is-active .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
}
.al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
}

#infoBox {
    display: inline-grid;   
    grid-template-columns: auto auto; 
    column-gap: 1.5em;
    align-items: center;
    padding-bottom: 1em;
    padding-right: 1.5em;
}

#icon {
    background: #f1f3f8;
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
}

#icon > * {
    vertical-align: middle;
    margin-top: 12px;
}

#socialMediaIcon {
    background: #f1f3f8;
    height: 2.5em;
    width: 2.5em;
    border-radius: 7px;
    display: inline-block;
    text-align: center;
}

#socialMediaIcon > * {
    vertical-align: middle;
    margin-top: 12px;
}

#otherLinks {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    column-gap: 0.75em;
    margin-top: 1em;
}

#websiteURL > a {
    color: #7a82a6;
}

#websiteURL > a:hover {
    color: #f1bc68;
    transition: 0.8s;
}

a:hover {
    color: #f1bc68;
    transition: 0.5s;
    transform: translateY(-10px);
}

a {
    color: #262633;
}

#buttonsBox {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 1em;
}

@media screen and (max-width: 500px) {
    #carouselBox {
        padding-top: 1.5em;
        padding-left: 0em; 
        padding-right: 0em;
    }

    .carousel-item img {
        height: 25vh!important;
        width: 100vh!important;
    }
    .columns {
        padding-left: 0em;
        padding-right: 0em;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.5em;
        width: 100%;
    }

    #boxTitle > p {
        font-size: 14pt;
    }

    #accommodationDescription > p {
        line-height: 1.6;
        color: #7a82a6;
        font-size: 12pt;
    }

    #location > p {
        font-size: 11pt;
    }

    #phoneNumber > p {
        font-size: 11pt;
    }

    #email > p {
        font-size: 11pt;
    }

    #websiteURL > a {
        font-size: 11pt;
    }
}

@media (min-width: 500px) and (max-width: 515px) {
    .carousel-item img {
        height: 33vh!important;
        width: 100vh!important;
    }

    .columns {
        padding-left: 0em;
        padding-right: 0em;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.5em;
        width: 100%;
    }

    #boxTitle > p {
        font-size: 14pt;
    }

    #accommodationDescription > p {
        line-height: 1.6;
        color: #7a82a6;
        font-size: 12pt;
    }

    #location > p {
        font-size: 11pt;
    }

    #phoneNumber > p {
        font-size: 11pt;
    }

    #email > p {
        font-size: 11pt;
    }

    #websiteURL > a {
        font-size: 11pt;
    }
}

@media (min-width: 515px) and (max-width: 650px) {
    .carousel-item img {
        height: 45vh!important;
        width: 100vh!important;
    }

    .columns {
        padding-left: 0em;
        padding-right: 0em;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.5em;
        width: 100%;
    }

    #boxTitle > p {
        font-size: 16pt;
    }

    #accommodationDescription > p {
        line-height: 1.6;
        color: #7a82a6;
        font-size: 12pt;
    }

    #location > p {
        font-size: 11pt;
    }

    #phoneNumber > p {
        font-size: 11pt;
    }

    #email > p {
        font-size: 11pt;
    }

    #websiteURL > a {
        font-size: 11pt;
    }
}

/* FONT SIZE CHANGES HERE */

@media (min-width: 650px) and (max-width: 1000px) {
    .carousel-item img {
        height: 50vh!important;
        width: 100vh!important;
    }
}

/* For between 980px and 1170px */
@media (min-width: 1000px) and (max-width: 1170px) {
    #contactInfoBox {
        width: 350px;
    }
    .carousel-item img {
        height: 48vh!important;
        width: 100vh!important;
    }
}

@media (min-width: 1170px) and (max-width: 1390px) {
    .carousel-item img {
        height: 48vh!important;
        width: 100vh!important;
    }
}
</style>