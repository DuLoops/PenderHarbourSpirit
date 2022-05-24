<template>
    <div>
        <banner-array 
        :img="pictures"
        :isMobileView="mobileView" 
        rootDirectory="Experience"
        childDirectory="Activities"
        description="Looking for things to do?  We host a bevy of activities that will be worth your time!"/>

<!-- MOBILE VERSION -->
        <!-- Sidebar Module (Filter By Area) -->
        <section>
            <b-sidebar
            type="is-light"
            :fullwidth="fullwidth"
            :fullheight="fullheight"
            :right="right"
            v-model="filterByArea"
            >
                <div id="activityChangeContainer">
                    <!-- Menu Title -->
                    <div id="topMenu">
                        <div id="exitButton">
                            <div id="icon" @click="closeSidebar_Area">
                                <b-icon pack="fa" icon="fa-xmark" size="is-small"/>
                            </div>           
                        </div>
                        <div id="filterTitleContainer">
                            <p>Filter By Area</p>
                        </div> 
                        <div id="resetButtonContainer">
                            <b-button size="is-small" @click="resetFilterParameters">
                                <span style="font-weight: bold; color: #3a3a3a;">RESET</span>
                            </b-button>
                        </div> 
                    </div>

                    <!-- Choice Selection Box -->
                    <div class="column" id="changeAreaBox">
                        <div class="box" style="border-radius: 30px;">
                            <div id="choiceBox">
                                <div id="choiceTitleContainer">
                                    <p v-if="!(isSelected)">Select an Area</p>
                                    <p v-else-if="isSelected && currentArea">Select {{currentArea}}?</p>
                                    <div id="checkBox">
                                        <b-field>
                                            <b-checkbox 
                                            @click.native="clickBoth"
                                            v-model="bothFlag"
                                            type="is-warning">
                                                <span style="color: #3a3a3a">Both</span>
                                            </b-checkbox>
                                        </b-field>
                                    </div>
                                </div>
                                <div id="choiceContainer">
                                    <div id="choice">
                                        <figure @click="clickPenderHarbour" id="map_pender" class="image is-3by2">
                                            <img src="../../assets/images/pendermap.png">
                                        </figure>
                                        <div id="choiceTextContainer_pender">
                                            <p>Pender Harbour</p>
                                        </div>
                                    </div>
                                    <div id="choice">
                                        <figure @click="clickEgmont" id="map_egmont" class="image is-3by2">
                                            <img src="../../assets/images/egmontmap.png">
                                        </figure>
                                        <div id="choiceTextContainer_egmont">
                                            <p>Egmont</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- APPLY BUTTON -->
                <div class="column" id="applyContainer">
                    <div id="applyButtonContainer">
                        <b-button id="applyButton" type="is-dark" disabled expanded style="background: #f1bc68" @click="submitFilterByArea">
                            <span style="font-weight: bold; color: #3a3a3a; font-family: Merriweather">APPLY</span>
                        </b-button>
                    </div>
                </div>
            </b-sidebar>
        </section>

        <!-- Sidebar Module (Filter By Activity) -->
        <section>
            <b-sidebar
            type="is-white"
            :fullwidth="fullwidth"
            :fullheight="fullheight"
            :right="right"
            v-model="filterByActivity"
            >
                <div id="activityChangeContainer">
                    <div id="topMenu">
                        <div id="exitButton">
                            <div id="icon" @click="closeSidebar_Activity">
                                <b-icon pack="fa" icon="fa-xmark" size="is-small"/>
                            </div>           
                        </div>
                        <div id="filterTitleContainer">
                            <p>Filter By Activity</p>
                        </div> 
                        <div id="resetButtonContainer">
                            <b-button size="is-small" @click="resetFilterActivityParameters">
                                <span style="font-weight: bold; color: #3a3a3a;">RESET</span>
                            </b-button>
                        </div> 
                    </div>

                    <div id="border"></div>

                    <div class="column">
                        <div>
                            <section>
                                <div class="content">
                                    <h3 id="activityTitle">Activity Type</h3>
                                    <div id="selectContainer"> 
                                        <div id="selection" style="margin-top: 0.5em;"> 
                                            <p>Art and Culture</p>
                                            <b-field style="justify-self: end;">
                                                <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Art and Culture"></b-checkbox>
                                            </b-field>
                                        </div>
                                        <div id="selection"> 
                                            <p>Entertainment</p>
                                            <b-field style="justify-self: end;">
                                                <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Entertainment"></b-checkbox>
                                            </b-field>
                                        </div>
                                        <div id="selection"> 
                                            <p>Nature and Outdoor</p>
                                            <b-field style="justify-self: end;">
                                                <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Nature and Outdoor"></b-checkbox>
                                            </b-field>
                                        </div>
                                        <div id="selection"> 
                                            <p>Sightseeing</p>
                                            <b-field style="justify-self: end;">
                                                <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Sightseeing"></b-checkbox>
                                            </b-field>
                                        </div>
                                    </div>
                                </div>
                                <!-- Display Extra Options -->
                                <b-collapse 
                                    :open="false" 
                                    position="is-bottom" 
                                    aria-id="contentIdForA11y4">
                                    <template #trigger="props" >
                                        <a  aria-controls="contentIdForA11y4"
                                            :aria-expanded="props.open">
                                            <span id="showAllActivitiesContainer">{{ !props.open ? 'Show all' : 'Fewer options' }}</span>
                                        </a>
                                    </template>
                                        <div id="selectContainer"> 
                                            <div id="selection" style="margin-top: 0.5em; margin-left: 0.75em;"> 
                                                <p>Sport</p>
                                                <b-field style="justify-self: end;">
                                                    <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Sport"></b-checkbox>
                                                </b-field>
                                            </div>
                                            <div id="selection" style="margin-top: 0.75em; margin-bottom: 1em; margin-left: 0.75em;"> 
                                                <p>Touring</p>
                                                <b-field style="justify-self: end;">
                                                    <b-checkbox size="is-medium" v-model="currentActivitiesChosen" type="is-warning" native-value="Touring"></b-checkbox>
                                                </b-field>
                                            </div>
                                        </div>
                                </b-collapse>
                            </section>
                        </div>
                    </div>

                    <!-- APPLY BUTTON -->
                    <div class="column" id="applyContainer">
                        <div id="applyButtonContainer">
                            <b-button id="applyButton_activity" type="is-dark" disabled expanded style="background: #f1bc68" @click="submitFilterByActivity">
                                <span style="font-weight: bold; color: #3a3a3a; font-family: Merriweather">APPLY</span>
                            </b-button>
                        </div>
                    </div>

                </div>
            </b-sidebar>
        </section>

        <!-- Sidebar Activator -->
        <!-- <div id="buttonAndFilter" v-if="mobileView"> -->
        <div id="buttonAndFilter">
            <div id="searchModule" @click="filterByArea = true"> 
                <p id="searchTitle">
                    <span v-if="defaultSearch">Showing All Activities</span>
                    <span v-else>{{currentActivitiesChosen_formatted}} Activities</span>
                </p>
                <p id="searchDescription">
                    <span>in {{savedState_currentArea}}</span>
                </p>
            </div>
            <div id="filterModuleContainer">
                <div id="icon" @click="filterByActivity = true">
                    <b-icon pack="fa" icon="fa-sliders" size="is-small"/>
                </div>           
            </div>
        </div>

        <!-- Activity Tag Container -->
        <!-- <div id="activityTagContainer" v-if="mobileView"> -->
        <div id="activityTagContainer">
            <!-- Bind @close to a function! + make an @click function for whole tag -->
            <b-tag v-if="artsAndCultureFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Art and Culture`)" id="tag" type="is-primary" size="is-medium" rounded>
                <span id="tagFont">Art and Culture</span>
            </b-tag> 
            <b-tag v-if="entertainmentFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Entertainment`)" id="tag" type="is-warning" size="is-medium" rounded>
                <span id="tagFont">Entertainment</span>
            </b-tag> 
            <b-tag v-if="natureAndOutdoorFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Nature and Outdoor`)" id="tag" type="is-success" size="is-medium" rounded>
                <span id="tagFont">Nature and Outdoor</span>
            </b-tag> 
            <b-tag v-if="sightseeingFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Sightseeing`)" id="tag" type="is-warning is-light" size="is-medium" rounded>
                <span id="tagFont">Sightseeing</span>
            </b-tag> 
            <b-tag v-if="sportFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Sport`)" id="tag" type="is-danger" size="is-medium" rounded>
                <span id="tagFont">Sport</span>
            </b-tag> 
            <b-tag v-if="touringFlag" closable aria-close-label="Close tag" @close="removeSpecificTag(`Touring`)" id="tag" type="is-primary is-light" size="is-medium" rounded>
                <span id="tagFont">Touring</span>
            </b-tag>                                                     
        </div>

        <div id="activityBorder"></div>

        <!-- Empty Activities Error Message -->
        <!-- <div id="errorMessageContainer" v-if="mobileView && errorMessage"> -->
        <div id="errorMessageContainer" v-if="errorMessage">
            <p>No current search results!</p>
        </div>

        <!-- MOBILE VIEW ONLY (1024 px and below): Rendered Activities (From loadedActivities array)  -->
            <!-- <div id="cardContainer" v-else-if="mobileView"> -->
            <div id="cardContainer">
                <div class="card" v-for="activity in loadedActivities" :key="activity.id">
                    <router-link :to="{name: 'ActivityDetails', params: {id : activity.id}}"  @click.native="scrollToTop">
                        <div class="card-image">
                            <div class="module lr" :style='{ backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url("${activity.externalPictureURL}")`}'>
                                <div id="accommodationInfo">
                                    <div>
                                        <b-tag type="is-warning" v-if="activity.type === `Entertainment`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-primary" v-else-if="activity.type === `Art and Culture`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-success" v-else-if="activity.type === `Nature and Outdoor`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-warning is-light" v-else-if="activity.type === `Sightseeing`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>
                                        <b-tag type="is-danger" v-else-if="activity.type === `Sport`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>    
                                        <b-tag type="is-primary is-light" v-else-if="activity.type === `Touring`" elipsis>
                                            <span style="font-weight: bold;">
                                                {{activity.type}}
                                            </span>
                                        </b-tag>                                                                                
                                    </div>

                                    <div id="accommodationNameLocation">
                                        <p id="cardview_accommodation">{{activity.title}}</p>
                                        <p id="cardview_area">
                                            <b-icon pack="fa" icon="fa-map-marked-alt" size="is-small"/>
                                            {{activity.area}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>
import BannerArray from "../BannerArray.vue";
import Dropdown from "../../components/activities/dropdown.vue";
import { getAllActivities, getActivityByArea, getActivityByTypes } from "../../data/Activities.js"

    export default {
        name: "ActivityMain",
        data() {    
            return {
                mobileView: false,
                defaultSearch: true, //Initially true (Renders all activities for both areas)

                // Sidebar Module Switches
                filterByArea: false, //<= Turns on filter By Area sidebar
                filterByActivity: false, //<= Turns on filter by Activity sidebar
                right: true,
                overlay: true,
                fullheight: true,
                fullwidth: true,
                bothFlag: false,

                //v-if variables
                isSelected: false,

                // Main Variables 
                currentArea: "Pender Harbour & Egmont", //Default value (to be passed in to fetch from Database)
                currentActivitiesChosen: [], 
                currentActivitiesChosen_formatted: "All Activities",
                savedState_currentArea: "Pender Harbour & Egmont",
                savedState_currentActivitiesChosen: [],
                
                //Activities to be loaded from database and RENDER
                loadedActivities: null,

                //Rendered Activity Tags
                artsAndCultureFlag: false,
                entertainmentFlag: false,
                natureAndOutdoorFlag: false,
                sightseeingFlag: false,
                sportFlag: false,
                touringFlag: false,

                // Error Message
                errorMessage: false,

                pictures: [
                    "https://www.wcwl.com/wp-content/uploads/2018/04/SDP-140703-canada-princess-louisa-124-2-LR-1200x.jpg",
                    "https://www.wcwl.com/wp-content/uploads/2018/04/SDP-140627-canada-egmont-758-LR-1200x.jpg",
                    "https://www.wcwl.com/wp-content/uploads/2018/04/D803435-ret-sml-2000x968.jpg",
                    "https://www.wcwl.com/wp-content/uploads/2018/04/JetSkiing-20170626-09-2000x968.jpg",
                    "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/img-0377a_orig.jpg",
                    "https://www.wcwl.com/wp-content/uploads/2018/04/SDP-140722-canada-egmont-171-LR-1200x.jpg",
                    "http://www.beneathbc.com/uploads/1/4/4/5/14454276/pgh52864_orig.jpg",
                    "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/published/kayaks.jpg?1579581191",
                    "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/16862222089-995d8dce52-o_orig.jpg",
                    "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/img-2410-orig_3_orig.jpg",
                    "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/10506867-828556780488355-6177737709229505056-o_1_orig.jpg",
                    "https://backeddy.ca/wp-content/uploads/2020/08/header-marina.jpg",
                ],
            }
        },
        methods: {
            toggleMobileView() {
                this.mobileView = window.innerWidth <= 1024; //Becomes TRUE when it hits below this threshold
            },
        // AREA FILTER METHODS
            clickPenderHarbour() {
                // Negate the other choice's styling (when selected initially)
                document.getElementById("choiceTextContainer_egmont").style.fontWeight = "unset";
                document.getElementById("map_egmont").style.transform = "none";
                document.getElementById("map_egmont").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_egmont").style.boxShadow = "none";

                // Setting the current styling to the image choice
                document.getElementById("map_pender").style.transform = "translateY(-5px)";
                document.getElementById("map_pender").style.border = "2px #f1bc68 solid";
                document.getElementById("map_pender").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
                document.getElementById("choiceTextContainer_pender").style.fontWeight = "bold";

                //Apply values
                this.isSelected = true;
                this.currentArea = "Pender Harbour";

                //Enable Apply Button
                document.getElementById("applyButton").disabled = false;
            },
            clickEgmont() {
                // Negate the other choice's bold font (when selected initially)
                document.getElementById("choiceTextContainer_pender").style.fontWeight = "unset";
                document.getElementById("map_pender").style.transform = "none";
                document.getElementById("map_pender").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_pender").style.boxShadow = "none";

                // Setting the current styling to the image choice
                document.getElementById("map_egmont").style.transform = "translateY(-5px)";
                document.getElementById("map_egmont").style.border = "2px #f1bc68 solid";
                document.getElementById("map_egmont").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
                document.getElementById("choiceTextContainer_egmont").style.fontWeight = "bold";

                //Apply values
                this.isSelected = true;
                this.currentArea = "Egmont";

                //Enable Apply Button
                document.getElementById("applyButton").disabled = false;
            }, 
            // Resets Filter Parameters
            resetFilterParameters() {
                // Unsetting Pender Harbour styling choices
                document.getElementById("choiceTextContainer_pender").style.fontWeight = "unset";
                document.getElementById("map_pender").style.transform = "none";
                document.getElementById("map_pender").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_pender").style.boxShadow = "none";

                // Unsetting Egmont styling choices
                document.getElementById("choiceTextContainer_egmont").style.fontWeight = "unset";
                document.getElementById("map_egmont").style.transform = "none";
                document.getElementById("map_egmont").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_egmont").style.boxShadow = "none";

                //Apply values (Don't reset "this.currentArea" because activities is going to need it for QUERYING)
                this.isSelected = false;

                //Disable Apply Button
                document.getElementById("applyButton").disabled = true;
            },
            scrollToTop() {
                window.scrollTo(0,0);
            },
            // Closes SideBar (by X button)
            closeSidebar_Area() {
                this.resetFilterParameters();
                document.getElementById("applyButton").disabled = true;
                this.filterByArea = false;
            },
            clickBoth() {
                // If not chosen for both
                if(this.bothFlag === false) {
                    document.getElementById("map_egmont").style.transform = "translateY(-5px)";
                    document.getElementById("map_egmont").style.border = "2px #f1bc68 solid";
                    document.getElementById("map_egmont").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
                    document.getElementById("map_egmont").style.transition = "0.8s";
                    document.getElementById("choiceTextContainer_egmont").style.fontWeight = "bold";

                    document.getElementById("map_pender").style.transform = "translateY(-5px)";
                    document.getElementById("map_pender").style.border = "2px #f1bc68 solid";
                    document.getElementById("map_pender").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
                    document.getElementById("map_pender").style.transition = "0.8s";
                    document.getElementById("choiceTextContainer_pender").style.fontWeight = "bold";

                    //Apply values
                    this.isSelected = true;
                    this.currentArea = "Pender Harbour & Egmont";

                    //Disable Apply Button
                    document.getElementById("applyButton").disabled = false;

                    return;
                }

                // If both is already chosen
                this.resetFilterParameters();
            },
            // On onClick event on SideBar
            submitFilterByArea() {
                // Unsetting Pender Harbour styling choices
                document.getElementById("choiceTextContainer_pender").style.fontWeight = "unset";
                document.getElementById("map_pender").style.transform = "none";
                document.getElementById("map_pender").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_pender").style.boxShadow = "none";

                // Unsetting Egmont styling choices
                document.getElementById("choiceTextContainer_egmont").style.fontWeight = "unset";
                document.getElementById("map_egmont").style.transform = "none";
                document.getElementById("map_egmont").style.border = "1px rgb(175, 175, 175) solid";
                document.getElementById("map_egmont").style.boxShadow = "none";

                // Saving state (b/c currentArea can change from simple sidebar interaction)
                this.savedState_currentArea = this.currentArea;

                // CHECK: If chosen activities is empty, then simply getActivityByArea()
                if(this.savedState_currentActivitiesChosen.length === 0) {
                    this.loadedActivities = getActivityByArea(this.savedState_currentArea);
                    document.getElementById("applyButton").disabled = true;
                    this.isSelected = false;
                    this.filterByArea = false;
                    // console.log("Activity Chosen: " + this.loadedActivities);
                    return;
                }

                // OTHERWISE, execute getActivityByType()
                this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                document.getElementById("applyButton").disabled = true;
                this.isSelected = false;
                this.filterByArea = false;

                // console.log(this.loadedActivities);
            },

        // FILTER ACTIVITY METHODS
            submitFilterByActivity() {
                // CHECK: Remove tags that are shown (if unchecked)
                this.savedState_currentActivitiesChosen.forEach(activeActivity => {
                    for (const chosenActivity of this.currentActivitiesChosen) {
                        //If activity is already an activity tag    
                        if(activeActivity === chosenActivity) {
                            continue;
                        }
                    }
                    switch(activeActivity) {
                        case "Art and Culture":
                            this.artsAndCultureFlag = false;
                            break;
                        case "Entertainment":
                            this.entertainmentFlag = false;
                            break;
                        case "Nature and Outdoor":
                            this.natureAndOutdoorFlag = false;
                            break;
                        case "Sightseeing":
                            this.sightseeingFlag = false;
                            break;
                        case "Sport":
                            this.sportFlag = false;
                            break;     
                        case "Touring":
                            this.touringFlag = false;
                            break;      
                    }
                });

                //Saving state
                this.savedState_currentActivitiesChosen = this.currentActivitiesChosen;

                //Execute Query 
                this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                //Changes the "All Activities" string to the desired activity types
                this.defaultSearch = false;

                this.filterByActivity = false;
                document.getElementById("applyButton_activity").disabled = true;

                console.log(this.loadedActivities);
            },
            resetFilterActivityParameters() {
                // NOTE: Each element in currentActivitiesChosen array is being observed by the Buefy checkBoxes, so therefore, elements in the array are mapped to individual checkboxes.
                // Thats how reset button works here (boxes are automatically unchecked when array is emptied out) => OBSERVER
                var emptyArray = [];
                this.currentActivitiesChosen = emptyArray;
                this.savedState_currentActivitiesChosen = this.currentActivitiesChosen;

                //Get all activities based on current area
                this.loadedActivities = getActivityByArea(this.savedState_currentArea);

                // Reset the string displayed on filter bar to "All Activities"
                this.defaultSearch = true;

                // Set all the activity tabs to FALSE
                this.artsAndCultureFlag = false;
                this.entertainmentFlag = false;
                this.sportFlag = false;
                this.natureAndOutdoorFlag = false;
                this.sightseeingFlag = false;
                this.touringFlag = false;

                // Close activity Sidebar
                this.filterByActivity = false;

                // console.log(this.loadedActivities);

                return;
            },
            // Closes SideBar (by X button)
            closeSidebar_Activity() {
                //Restoring Activity State
                this.currentActivitiesChosen = this.savedState_currentActivitiesChosen;

                this.filterByActivity = false;
                document.getElementById("applyButton_activity").disabled = true;
            },

        // ACTIVITY TAG METHODS
            removeSpecificTag(inputTag) {
                var stringValue = inputTag;
                var temp = [];

                // Remove element that has Art and Culture + deselects the checkBox option
                temp = this.currentActivitiesChosen.filter(chosenActivity => chosenActivity !== stringValue);

                this.currentActivitiesChosen = temp;

                //Dependency is the watcher (savedState_currentActivitiesChosen)
                this.savedState_currentActivitiesChosen = this.currentActivitiesChosen;

                switch(inputTag) {
                        case "Art and Culture":
                            // CHECK: If no more types chosen, then render every activity for current area
                            if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.artsAndCultureFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            // CHECK 2: If still more than one type chosen, re-render this.loadedActivities with residual from this.savedState_currentActivitiesChosen
                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.artsAndCultureFlag = false;
                            // console.log(this.loadedActivities);
                            break;
                        case "Entertainment":
                            if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.entertainmentFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.entertainmentFlag = false;
                            // console.log(this.loadedActivities);
                            break;
                        case "Nature and Outdoor":
                            if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.natureAndOutdoorFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.natureAndOutdoorFlag = false;
                            // console.log(this.loadedActivities);
                            break;
                        case "Sightseeing":
                             if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.sightseeingFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.sightseeingFlag = false;
                            // console.log(this.loadedActivities);
                            break;
                        case "Sport":
                            if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.sportFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.sportFlag = false;
                            // console.log(this.loadedActivities);
                            break;     
                        case "Touring":
                            if(this.savedState_currentActivitiesChosen.length === 0) {
                                this.defaultSearch = true;
                                this.loadedActivities = getActivityByArea(this.currentArea);
                                this.touringFlag = false;
                                // console.log(this.loadedActivities);
                                return;
                            }

                            this.loadedActivities = getActivityByTypes(this.savedState_currentArea, this.savedState_currentActivitiesChosen);

                            this.touringFlag = false;
                            // console.log(this.loadedActivities);
                            break;      
                }
            }
        },
        watch: {
            currentActivitiesChosen(newValue) {
                // If currentActivities array is empty, DISABLE BUTTON
                if(this.currentActivitiesChosen.length === 0) {
                    document.getElementById("applyButton_activity").disabled = true;
                    return;
                } 
                document.getElementById("applyButton_activity").disabled = false;
            },
            savedState_currentActivitiesChosen(newValue) {
                var stringCounter = "";
                var formattedString = "";

                // Converting the array into a string readable format
                // Switch cases activates the tags
                this.savedState_currentActivitiesChosen.forEach(activity => {
                    switch (activity) {
                        case "Art and Culture":
                            this.artsAndCultureFlag = true;
                            break;
                        case "Entertainment":
                            this.entertainmentFlag = true;
                            break;
                        case "Nature and Outdoor":
                            this.natureAndOutdoorFlag = true;
                            break;
                        case "Sightseeing":
                            this.sightseeingFlag = true;
                            break;
                        case "Sport":
                            this.sportFlag = true;
                            break;     
                        case "Touring":
                            this.touringFlag = true;
                            break;      
                    }

                    stringCounter+=activity;
                    stringCounter+=", ";
                });

                formattedString = stringCounter.slice(0, -2);
                
                this.currentActivitiesChosen_formatted = formattedString;
            }, 
            loadedActivities(newValue) {
                if(this.loadedActivities.length === 0) {
                    this.errorMessage = true;
                    return;
                } 
                this.errorMessage = false;
            }
        },
        components: {
            BannerArray,
            Dropdown
        },
        created() {
            this.toggleMobileView();
            window.addEventListener("resize", this.toggleMobileView);
        },
        mounted() {
            // Load activities from DB (can be optimized)
            this.loadedActivities = getAllActivities();
        }
    }
</script>

<style scoped>


#applyContainer {
    width: 100%; 
    position:fixed; 
    bottom: 0;
    background: white;
    box-shadow: 0px 0 2px rgba(0, 0, 0, 0.3);
}

#applyButtonContainer {
    background: white;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
}

#topMenu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1.25em;
    align-items: center;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
} 

#border {
    border-bottom: 1px solid gainsboro;
    margin-top: 1em;
    margin-bottom: 0.5em;
}

#changeAreaBox {
    margin-top: 0.5em;
}

#filterTitleContainer {
    text-align: center;
    font-size: 12pt;
    font-weight: bold;
    color: #3a3a3a;
}

#resetButtonContainer {
    justify-self: end;
    background: pink;
}

.box {
    display: grid;
}

/* Choices */
#choiceContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
}

#choiceTitleContainer {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.85em;
}

#checkBox {
    justify-self: end;
}

#choiceTitleContainer > p {
    margin-bottom: 0.5em;
    color: #3a3a3a;
    font-weight: bold;
    font-size: 14pt;
    margin-top: -0.25em;
    margin-left: 0.25em;
}

#choiceTextContainer_pender {
    font-size: 11pt;
    margin-top: 0.5em;
    padding-left: 0.25em;
    color: #3a3a3a;
}

#choiceTextContainer_egmont {
    font-size: 11pt;
    margin-top: 0.5em;
    padding-left: 0.25em;
    color: #3a3a3a;
}

#map_pender {
    border-radius: 15px; 
    overflow: hidden;
    border: 1px rgb(175, 175, 175) solid;
}

#map_pender:hover {
    border: 2px rgb(190, 190, 190) solid;
    transition: 0.8s;
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#map_egmont {
    border-radius: 15px; 
    overflow: hidden;
    border: 1px rgb(175, 175, 175) solid;
}

#map_egmont:hover {
    border: 2px rgb(190, 190, 190)solid;
    transition: 0.8s;
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* ACTIVITY FILTER SECTION */
.content {
    margin-bottom: 0 !important;
    color: #3a3a3a;
    margin-left: 0.75em;
}

#activityTitle {
    font-weight: bold;
    color: #3a3a3a;
    font-size: 14pt;
}

#selectContainer {
    display: grid;
    row-gap: 0.5em;
    font-weight: 300;
}

#selection {
    display: grid;
    grid-template-columns: auto auto;
}

#showAllActivitiesContainer {
    font-weight: bold;
    text-decoration: underline;
    color: #3a3a3a;
    margin-left: 0.75em;
}

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

/* Button and Filter */
#buttonAndFilter {
    display: grid;
    grid-template-columns: 90% auto;
    background: #f7f7f7;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em;
    /* height: 55px; */
    border-radius: 45px;
}

/* Activity Tags */
#activityTagContainer {
    margin-top: 1.25em;
    margin-bottom: 1em;
    margin-left: 2em;
    margin-right: 2em;

    /* Enable horizontal scroll */
    overflow: auto; 
    white-space: nowrap; 
}

#tag {
    border: 2px gainsboro solid;
    margin-right: 0.5em;
}

#searchModule {
    margin-left: 2em; 
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

#searchTitle {
    color: #3a3a3a;
    font-weight: bold;
    font-size: 11pt;
}

#searchDescription {
    font-size: 10pt;
    margin-top: -0.15em;
    color: #777777;
}

#filterModuleContainer {
    display: grid;
    align-items: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-right: 1em; 
    justify-self: end;    
}
/* Card */
#cardContainer {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 1em;
    row-gap: 2em;
    margin-left: 2em;
    margin-top: 2em;
    margin-right: 2em;
}
.card {
    display: grid;
    grid-template-rows: auto auto;
    border-radius: 20px;
}
.card:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    transition: 0.5s;
}
#activityBorder {
    border-bottom: 1px gainsboro solid;
    margin-bottom: 1.25em;
    margin-left: 2em;
    margin-right: 2em;
}
#accommodationNameLocation {
    display: grid;
    grid-template-rows: auto auto;
    margin-top: 0.6rem;
    row-gap: 0.25em;
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
    font-size: 14pt;
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
    border-radius: 20px;
    min-height: 35vh;
}
#accommodationInfo {
    position: absolute;
    bottom: 5%;
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
    font-size: 11pt;
}
.card-content {
    background: white;
}
#cardview_area {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    font-weight: 300;
    font-size: 11pt;
}
#tagFont {
    font-size: 11pt;
}

/* Error Message */
#errorMessageContainer {
    margin-left: 2em;
    margin-right: 2em;
}

@media screen and (max-width: 420px) {
    #errorMessageContainer {
        text-align: center;
    }

    #buttonAndFilter {
        display: grid;
        grid-template-columns: 80% auto;
        background: #f7f7f7;
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 1em;
        /* height: 55px; */
        border-radius: 45px;
    }

    #cardContainer {
        grid-template-columns: auto;
    }
}

@media (min-width: 420px) and (max-width: 525px) {
    #buttonAndFilter {
        display: grid;
        grid-template-columns: 80% auto;
        background: #f7f7f7;
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 1em;
        /* height: 55px; */
        border-radius: 45px;
    }

    #cardContainer {
        grid-template-columns: auto;
    }
}

@media (min-width: 525px) and (max-width: 651px) {
    #buttonAndFilter {
        display: grid;
        grid-template-columns: 88% auto;
        background: #f7f7f7;
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 1em;
        /* height: 55px; */
        border-radius: 45px;
    }
    #cardContainer {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 651px) and (max-width: 744px) {
    #cardContainer {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 744px) and (max-width: 1024px) {

}

</style>
