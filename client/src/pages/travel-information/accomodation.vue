// SOURCES USED: https://css-tricks.com/design-considerations-text-images/
<template>
  <div>
    <banner 
        :isMobileView="mobileView" 
        rootDirectory="Travel Information"
        childDirectory="Accommodations"
        description="Planning your next trip down to Pender Harbour? Find a relaxing place to stay today!"/>

    <div id="content">
        <div id="searchBar"> 
            <b-field label="FILTER BY TYPE">
                <b-select placeholder="Select One..." v-model="selectedType" expanded>
                    <option
                        v-for="option in types"
                        :value="option"
                        :key="option">
                        {{ option }}
                    </option>
                </b-select>
            </b-field>

            <b-field label="FILTER BY AREA" >
                <b-select placeholder="Select One" v-model="selectedArea" expanded>
                    <option
                        v-for="option in areas"
                        :value="option"
                        :key="option">
                        {{ option }}
                    </option>
                </b-select>
            </b-field>

            <b-field label="SEARCH BY NAME">
                <b-autocomplete
                    v-model="typedInAccommodation"
                    ref="autocomplete"
                    :data="filteredDataArray"
                    clearable
                    field="title"
                    keep-first
                    :select-on-click-outside="true"
                    @select="(option) => {
                        selectedAccommodation = option.title
                    }"
                    placeholder="Enter an Accommodation">
                    <template slot-scope="props">
                        <div class="media">
                            <div class="media-left">
                                <img width="32" :src="`${props.option.pictureURL}`">
                            </div>
                            <div class="media-content">
                                <span><b>{{ props.option.title }}</b></span>
                                <br>
                                <small>
                                    <span>{{ props.option.type }}</span>
                                    <span> | {{ props.option.area }}</span>
                                </small>
                            </div>
                        </div>
                    </template>
                    <template #empty>No results for {{typedInAccommodation}}</template>
                </b-autocomplete>
            </b-field>
            <a class="button is-light" style="font-weight: bold;" 
                v-if="enableCardView && (isSearchInitiated_Type || isSearchInitiated_Area || isSearchInitiated_Name)" 
                @click="resetSearchParameters">
                RESET SEARCH PARAMETERS
            </a>
        </div>  

        <div id="border"></div>

        <!-- Use v-if to render this component. -->
        <div id="queryContainer">
            <div v-if="isSearchInitiated_Type" id="queryTitle">
                <h1>Search Results for {{selectedType}}</h1>
                <a class="button is-light" style="font-weight: bold;" v-if="!enableCardView" @click="resetSearchParameters">
                    RESET
                </a>
            </div>
            <div v-else-if="isSearchInitiated_Area" id="queryTitle">
                <h1>Search Results for {{selectedArea}}</h1>
                <a class="button is-light" style="font-weight: bold;" v-if="!enableCardView" @click="resetSearchParameters">
                    RESET
                </a>
            </div>
            <div v-else-if="isSearchInitiated_Name" id="queryTitle">
                <h1>Search Results for {{selectedAccommodation}}</h1>
                <a class="button is-light" style="font-weight: bold;" v-if="!enableCardView" @click="resetSearchParameters">
                    RESET
                </a>
            </div>

            <!-- CARD VIEW (if below 780px) -->
            <div id="cardContainer" v-if="enableCardView">
                <div class="card" v-for="accommodation in accommodations" :key="accommodation.id">

                    <router-link :to="{name: 'AccommodationDetails', params: {title : accommodation.title}}"  @click.native="scrollToTop">
                        <div class="card-image" style="padding: 0.5em;">
                            <div class="module lr" :style='{ backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url("${accommodation.cardviewPicture}")`}'>
                                <div id="accommodationInfo">
                                    <div style="typeTag_cardView">
                                        <b-tag type="is-warning" v-if="accommodation.type === `Resorts and Spas`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{accommodation.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-warning is-danger" v-else-if="accommodation.type === `Hotels, Motels`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{accommodation.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-link is-light" v-else-if="accommodation.type === `B&B, Cottages, Cabins`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{accommodation.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-success" v-else elipsis>
                                            <span style="font-weight: bold;">
                                                {{accommodation.type}}
                                            </span>
                                        </b-tag>
                                    </div>

                                    <div id="accommodationNameLocation">
                                        <p id="cardview_accommodation">{{accommodation.title}}</p>
                                        <p id="cardview_area">
                                            <b-icon pack="fa" icon="fa-map-marked-alt" size="is-small"/>
                                            {{accommodation.area}}, {{accommodation.province}} | {{accommodation.phoneNo}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>

                    <div class="card-content">
                        <div class="content">
                            <p>{{accommodation.summary}}</p>
                            <div class="buttons">
                                <router-link :to="{name: 'AccommodationDetails', params: {title : accommodation.title}}"  @click.native="scrollToTop">
                                    <a class="button is-light" style="font-weight: bold;">
                                        Details
                                    </a>
                                </router-link>
                                <a class="button is-light" style="font-weight: bold;" :href="accommodation.url">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <!-- DESKTOP VIEW -->
            <div v-else>
                <article class="media" v-for="accommodation in accommodations" :key="accommodation.id">
                    <figure class="media-left">
                        <router-link :to="{name: 'AccommodationDetails', params: {title : accommodation.title}}"  @click.native="scrollToTop">
                            <div id="imageContainer">
                                <img :src="accommodation.pictureURL">
                            </div>
                        </router-link>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <!-- ACCOMODATION TITLE -->
                            <div id="title">
                                <p>
                                    <router-link :to="{name: 'AccommodationDetails', params: {title : accommodation.title}}"  @click.native="scrollToTop">
                                        <span id="accommodationTitle" style="font-weight: bold; font-size: 16pt; font-family: Merriweather; color: #4a4a4a">{{accommodation.title}}</span>
                                    </router-link>
                                    <br> 
                                    <span style="font-weight: bold">{{accommodation.area}}</span>
                                </p>
                                <div style="typeTag">
                                    <b-tag type="is-warning" v-if="accommodation.type === `Resorts and Spas`" elipsis>
                                        <span style="font-weight: bold;">
                                            {{accommodation.type}}
                                        </span>
                                    </b-tag>
                                    <b-tag type="is-warning is-danger" v-else-if="accommodation.type === `Hotels, Motels`" elipsis>
                                        <span style="font-weight: bold;">
                                            {{accommodation.type}}
                                        </span>
                                    </b-tag>
                                    <b-tag type="is-link is-light" v-else-if="accommodation.type === `B&B, Cottages, Cabins`" elipsis>
                                        <span style="font-weight: bold;">
                                            {{accommodation.type}}
                                        </span>
                                    </b-tag>
                                    <b-tag type="is-success" v-else elipsis>
                                        <span style="font-weight: bold;">
                                            {{accommodation.type}}
                                        </span>
                                    </b-tag>
                                </div>
                            </div>
                            <br>
                            <!-- DESCRIPTION -->
                            <div id="description">
                                {{accommodation.summary}}
                            </div>
                        </div>

                        <!-- BOTTOM BAR  -->
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <div class="buttons">
                                    <router-link :to="{name: 'AccommodationDetails', params: {title : accommodation.title}}"  @click.native="scrollToTop">
                                        <a class="button is-light" style="font-weight: bold;">
                                            Details
                                        </a>
                                    </router-link>    
                                    <a class="button is-light" style="font-weight: bold;" :href="accommodation.url">
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import { getAccomodationByName, 
        getAccomodationsByArea, 
        getAccomodationsByType, 
        getAllAccomodations } from "../../data/Accommodations"

export default {
    name: "Accomodation",
    data() {
        return {
            mobileView: false,
            enableCardView: false,
            accommodations: [],
            preLoadedAccommodations:[], //For search by name (AutoComplete)
            areas: ["Earls Cove", "Egmont", "Garden Bay", "Halfmoon Bay", "Madeira Park"],
            types: ["B&B, Cottages, Cabins", "Camping, Hostels, RV", "Hotels, Motels", "Resorts and Spas"],

            // For Select Options and Queryin
            selectedArea: null,
            selectedType: null,
            selectedAccommodation: "",
            typedInAccommodation: "",

            // To Render the Type of Search in Title
            isSearchInitiated_Area: false,
            isSearchInitiated_Type: false,
            isSearchInitiated_Name: false,
        };
    },
    methods: {
        toggleMobileView() {
            this.mobileView = window.innerWidth <= 1024; //Becomes TRUE when it hits below this threshold
        },
        toggleCardView() {
            this.enableCardView = window.innerWidth <= 780;
        },
        updateArea(area) {
            this.area = area;
        },
        updateArea(location) {
            this.location = location;
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
        resetSearchParameters() {
            this.isSearchInitiated_Type = false;
            this.isSearchInitiated_Name = false;
            this.isSearchInitiated_Area = false;
            this.accommodations = this.preLoadedAccommodations;
        },
    },
    created() {
        this.toggleMobileView();
        this.toggleCardView();
        window.addEventListener("resize", this.toggleMobileView);
        window.addEventListener("resize", this.toggleCardView);
    },
    mounted() {
        // This should be replaced by a fetch from an API or Database
        this.preLoadedAccommodations = getAllAccomodations();
        this.accommodations = this.preLoadedAccommodations;
    },
    computed: {
        // For filtering when typing in an Accommodation in text-field (uses preLoadedAccommodations[])
        filteredDataArray() {
            return this.preLoadedAccommodations.filter((accommodation) => {
                return accommodation.title
                    .toString()
                    .toLowerCase()
                    .indexOf(this.typedInAccommodation.toLowerCase()) >= 0
            })
        }
    },
    // Watchers for any changes in selectedArea and selectedType data variable
    watch: {
        selectedArea(newValue) {
            var emptyArray = [];

            // Set the query title to searchByArea by setting searchByType to false
            this.isSearchInitiated_Type = false;
            this.isSearchInitiated_Name = false;

            //Clear Current Array on every search
            this.accommodations = emptyArray;
            this.isSearchInitiated_Area = true;
            this.accommodations = getAccomodationsByArea(newValue);
        },
        selectedType(newValue) {
            var emptyArray = [];

            // Set the query title to searchByTyue by setting searchByArea to false
            this.isSearchInitiated_Area = false;
            this.isSearchInitiated_Name = false;

            //Clear Current Array on every search
            this.accommodations = emptyArray;
            this.isSearchInitiated_Type = true;
            this.accommodations = getAccomodationsByType(newValue);
        },
        selectedAccommodation(newValue) {
            var emptyArray = [];

            this.isSearchInitiated_Type = false;
            this.isSearchInitiated_Area = false;

            //Clear Current Array on every search
            this.accommodations = emptyArray;
            this.isSearchInitiated_Name = true;
            this.accommodations.push(getAccomodationByName(newValue));
        }
    },
    components: {
        Banner,
    },
};
</script>

<style scoped>
#content {
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5em;
}
#searchBar {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 1.5em;
    margin-bottom: 2.5em;
}
#border {
    border-bottom: 1px solid gainsboro;
    margin-top: -1em;
    margin-bottom: 2em;
}
.buttons {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.35em;
}
#cardContainer {
    display: grid;
    row-gap: 2em;
}
.card {
    display: grid;
    grid-template-rows: auto auto;
    background: #f8f8f8;
    border: 1px solid gainsboro;
}
#accommodationNameLocation {
    display: grid;
    grid-template-rows: auto auto;
    margin-top: 0.6rem;
}
#title {
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 1em;
}
#queryTitle {
    display: inline-grid;
    grid-template-columns: 85% auto;
    column-gap: 1.5rem;
    margin-bottom: 1.5em;
}
#queryTitle > h1 {
    font-size: 24pt;
    font-weight: bold;
    font-family: "Merriweather";
}
#queryContainer {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 1em;
}
#imageContainer {
    max-height: 150px;
    max-width: 150px;
}
#description {
    margin-bottom: 1.5em;
}
.module {
    position: relative;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    min-height: 35vh;
}
#accommodationInfo {
    position: absolute;
    bottom: 8%;
    padding-left: 15px;
    padding-right: 15px;
    color: white;
    margin: 0;
    font-family: "Merriweather";
}
#accommodationTitle:hover {
    text-decoration: underline;
}
#cardview_accommodation {
    font-weight: bold; 
    font-size: 16pt;
}
.card-content {
    background: white;
}
#cardview_area {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    font-weight: 300;
}
@media screen and (max-width: 500px) {
    #queryTitle {
        text-align: center;
        display: block;
        margin-bottom: -0.5em;
    }
    #queryTitle > h1 {
        font-size: 18pt;
    }
    #searchBar {
        display: grid;
        grid-template-columns: none;
        grid-template-rows: auto auto auto;
        row-gap: 1em;
    }
    #border {
        border-bottom: 1px solid gainsboro;
        margin-bottom: 2em;
    }

    #content {
        display: block;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.5em;
    }
}
@media (min-width: 500px) and (max-width: 780px) {
    #queryTitle {
        text-align: center;
        display: block;
        margin-bottom: -0.5em;
    }
    #queryTitle > h1 {
        font-size: 20pt;
    }
    #searchBar {
        display: grid;
        grid-template-columns: none;
        grid-template-rows: auto auto auto;
        row-gap: 1em;
    }
    #border {
        border-bottom: 1px solid gainsboro;
        margin-bottom: 2em;
    }
}
@media (min-width: 780px) and (max-width: 1024px) {
    #searchBar {
        display: grid;
        grid-template-columns: none;
        grid-template-rows: auto auto auto;
        row-gap: 1em;
    }
    #border {
        border-bottom: 1px solid gainsboro;
        margin-top: 2em;
        margin-bottom: 2em;
    }
}
</style>