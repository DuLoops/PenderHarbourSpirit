<template>
    <div id="mainContent">
        <bannerURL
        :id="activity.id"
        :img="activity.externalPictureURL"
        :isMobileView="mobileView" 
        :rootDirectory="'Activities in' + ' ' + activity.area"
        :childDirectory="activity.title"
        :area="activity.area"
        :description="activity.outerDescription"/>

        <!-- Chapters Tab -->
        <div id="wrapper">
            <div id="chaptersContainer">
                <div id="chaptersTab">
                    <b-tabs class="test" type="is-boxed">
                        <b-tab-item>
                            <template #header>
                                <span id="chaptersText">Sections</span>
                            </template>
                        </b-tab-item>
                    </b-tabs>
                </div>
                <div id="chapterContent">
                    <div class="box" id="chapterBox">
                        <div id="actualChapters">
                            <div id="titleContainer" v-for="part in activity.subActivities" :key="part.title">
                                <div id="icon">
                                    <b-icon pack="fa" icon="fa-envelope" size="is-small"/>
                                </div>
                                <div id="title">
                                    <a style="color: #666666" href="#contentTitle"><span>{{part.title}}</span></a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>

            <!-- Advisory -->
            <div id="advisoryContainer" v-if="activity.advisoryTitle"> 
                <div id="advisory">
                    <p id="advisoryTitle">{{activity.advisoryTitle}}</p>
                    <br>
                    <p id="advisoryDescription">{{activity.advisoryDescription}} 
                        <a :href="activity.advisoryURL">
                            <span>{{activity.advisoryURL}}</span>
                        </a>
                    </p>
                </div>
            </div>

            <!-- Content/Information -->
            <div id="contentContainer" v-for="part in activity.subActivities" :key="part.title">
                <div id="content">
                    <h1 id="contentTitle">{{part.title}}</h1>
                    <p id="contentIntroDescription">{{part.description}}</p>

                    <!-- Each location's description -->
                    <div v-for="(location, index) in part.locations" :key="location.name">
                            <div id="locationHeaderContainer">
                                <span id="locationName">{{index + 1}}. <a style="color: #666666" :href="location.resourcesURL">{{location.name}}</a></span>
                                <div id="locationHeader">
                                    <span>
                                        <b>Area: {{location.area}}</b> 
                                        <span v-if="location.difficulty">| <b>Difficulty: {{location.difficulty}}</b></span>
                                        <span v-if="location.price">| <b>Price: <span style="color: #379e52" >{{location.price}}</span></b></span>
                                    </span> 
                                </div>
                            </div>
                            <div id="locationDescriptionContainer">
                                <p>{{location.description}}</p>
                            </div>
                            <div id="locationImageContainer" v-if="location.pictureURL"> 
                                <!-- <img :src="location.pictureURL" style="display: block; margin-left: auto; margin-right: auto; height: 593.633px"> -->
                                <figure class="image is-5by4">
                                    <img :src="location.pictureURL">
                                </figure>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BannerURL from "../../components/BannerURL.vue";
import { getActivityByID } from "../../data/Activities.js"

    export default {
        name: "ActivityDetails",
        data() {
            return {
                mobileView: false,
                activity: null, //The activity object to be fetched (given id)

            }
        },
        methods: {
            toggleMobileView() {
                this.mobileView = window.innerWidth <= 1024; //Becomes TRUE when it hits below this threshold
            },
        },
        components: {
            BannerURL
        },
        props: [
            "id"
        ],
        created() {
            this.toggleMobileView();
            window.addEventListener("resize", this.toggleMobileView);

            // Fetch from DB
            this.activity = getActivityByID(this.id);
        },
    }
</script>

<style scoped>

/* Chapters Styling */
#chaptersContainer {
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 2em;
    position: relative;
}

#chaptersTab {
    margin-left: 1em;
    margin-right: 1em;
}

#chaptersText {
    font-weight: 900;
    color: #848484;
}

#chapterContent {
    margin-top: -2.1em;
    width: 100%;
}

#chapterBox {
    display: grid;
    border: 1px gainsboro solid;
    border-radius: 20px;
    width: 100%;
}

#actualChapters {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 2em;
    row-gap: 1em;
    margin-left: 0.75em;
}

#titleContainer {
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 2em;
    font-weight: 900;
}

#title {
    align-self: center;
    text-transform: uppercase;
} 

/* Advisory Style */
#advisoryContainer {
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 3em;
    background: #ffd693;
    border-radius: 20px;
}

#advisory {
    padding: 2em;
}

#advisoryTitle {
    font-size: 16pt;
    font-weight: 900;
}

#advisoryDescription {
    margin-top: -1em;
}

/* Content Styling */
#contentContainer {
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 2em;
}

#content {
    display: grid;
    row-gap: 1em;
}

#contentTitle {
    font-size: 31.5px;
    font-weight: 900;
}

#contentIntroDescription {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: 400;
    font-stretch: 100%;
    line-height: 33.3px;
    color: rgb(58, 58, 58);
}

/* Location Styling */
#locationHeaderContainer {
    display: grid;
    color: black;
    margin-bottom: 18px;
}

#locationHeader {
    color: black;
}

#locationName {
    font-size: 27.9px;
    font-weight: 900;
}

#locationDescriptionContainer > p {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: 400;
    font-stretch: 100%;
    line-height: 33.3px;
    color: rgb(58, 58, 58);
}

#locationDescriptionContainer {
    margin-bottom: 30px;
}

#locationImageContainer {
    margin-bottom: 18px;
}

/* Circle Icon */
#icon {
    background: #f1f3f8;
    color: #3a3a3a;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 1px rgb(190, 190, 190) solid;
    display: block;
    text-align: center;
}

#icon > * {
    vertical-align: middle;
    margin-top: 3.5px;
}

@media screen and (max-width: 585px) {
    #actualChapters {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: none;
        text-align: center;
    }
}

@media screen and (min-width: 1200px) {
    #mainContent {
    width: 70%;
    margin: auto;
}
}


</style>
