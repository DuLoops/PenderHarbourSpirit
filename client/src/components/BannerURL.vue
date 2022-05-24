<template>
    <div id="banner">
        <div id="background"></div>
        <div id="content">
            <div id="title">
                <!-- Page Root Title -->
                    <div id="rootDirectory_and_location_mobile" v-if="isMobileView">
                        <router-link v-if="isActivityID" :to="{name: 'Activities'}">
                            <p id="root" v-if="isRootDirectoryAvailable">{{rootDirectory}}</p> 
                            <p id="root" v-else>Input Root Directory</p> 
                        </router-link>
                        <router-link v-else :to="{name: 'Accomodation'}">
                            <p id="root" v-if="isRootDirectoryAvailable">{{rootDirectory}}</p> 
                            <p id="root" v-else>Input Root Directory</p> 
                        </router-link>
                    </div>

                <div id="rootDirectory_and_location" v-else>
                    <router-link :to="{name: 'Accomodation'}">
                        <p id="root" style="color: white;" v-if="isRootDirectoryAvailable">{{rootDirectory}}</p> 
                        <p id="root" v-else>Input Root Directory</p> 
                    </router-link>

                    <p id="location" v-if="isLocationAvailable && isAreaAvailable">{{childLocation}}, {{childArea}}</p>
                    <p id="location" v-else-if="isLocationAvailable">{{childLocation}}</p>
                    <p id="location" v-else-if="isAreaAvailable">{{childArea}}</p>
                </div>

                <!-- Child Page Title -->
                <h1 v-if="isChildDirectoryAvailable">{{childDirectory}}</h1>
                <h1 v-else>Input Child Directory</h1>
                
                <!-- Description -->
                <div id="description" v-if="isDescriptionAvailable">
                    <p>{{description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerURL",
        data() {
            return {
                // Initially set all flags to null
                isLocationAvailable: null,
                isAreaAvailable: null,
                isDescriptionAvailable: null,
                isRootDirectoryAvailable: null,
                isChildDirectoryAvailable: null,
                isActivityID: null,
                childArea: null,
                childLocation: null,

                // Theses take the image file name as "keys"
                // Key = Image File Name
                // Value = Accomodation Name 
                defaultImages: new Map ([
                    ['RubyLakeResort', "Ruby Lake Resort"], 
                    ['WestCoastWildernessLodge', "West Coast Wilderness Lodge"], 
                    ['moondancevacations', "Moon Dance Vacations"], 
                    ['JohnHenry', "John Henry's Marina & Resort"], 
                    ['PenderHarbourHotel', "Pender Harbour Hotel"], 
                    ['RockWater', "Rockwater Secret Cove Resort"], 
                    ['StoneWater', "The Stonewater Hotel"], 
                ]),

                // Key = Accommodation Name
                // Value = Area/Region
                areaAssociatedWithAccommodations: new Map([
                    ["Ruby Lake Resort", "Egmont"],
                    ["West Coast Wilderness Lodge", "Egmont"],
                    ["Moon Dance Vacations", "Garden Bay"],
                    ["John Henry's Marina & Resort", "Garden Bay"],
                    ["Pender Harbour Hotel", "Madeira Park"],
                    ["Rockwater Secret Cove Resort", "Halfmoon Bay"],
                    ["The Stonewater Hotel", "Madeira Park"],
                ])
            }
        },
        props: [
            "id",
            "img",
            "isMobileView",
            "location",
            "area",
            "description",
            "rootDirectory",
            "childDirectory",
            "imageFormat",
        ],
        // Mounted: This lifecycle hook allows you to perform extra tasks when component is mounted onto the DOM
        mounted() {
            //If no image is provided as props, then set to a placeHolder image
            if(this.img === undefined || this.img === "") {
                var banner = document.getElementById('banner');

                //Generate Random Number (Values: 0-6)
                var randomIndex = Math.floor(Math.random() * 7); 

                //Get random image from a list of accommodations (Key)
                var fileName = Array.from(this.defaultImages.keys())[randomIndex];

                //Replace the Image
                banner.style.backgroundImage = 'url(' + require('@/assets/images/'+ fileName +'.jpeg') + ')';

                //Getting the Accommodation as String
                var accommodation = this.defaultImages.get(fileName);

                //Getting the Area/Region of the Accommodation
                var area = this.areaAssociatedWithAccommodations.get(accommodation);

                //Setting the Area and Location
                this.childArea = area;
                this.childLocation = accommodation;
            } else {
                var banner = document.getElementById('banner');
                banner.style.backgroundImage = `url(${this.img})`;

                this.childArea = this.area; 
                this.childLocation = this.location; 
            }

            //If location is not given as props, then set isLocationAvailable to false
            if(this.location === undefined && (this.img === undefined || this.img === "")) {
                this.isLocationAvailable = true;
            } else if(this.location === undefined) {
                this.isLocationAvailable = false;
            } else {
                this.isLocationAvailable = true;
            }

            //If area is not given as props, then set isAreaAvailable to false
            if(this.area === undefined  && (this.img === undefined || this.img === "")) {
                this.isAreaAvailable = true;
            } else if(this.area === undefined) {
                this.isAreaAvailable = false;
            } else {
                this.isAreaAvailable = true;
            }

            //If description is not given as props, then set isDescriptionAvailable to false
            if(this.description === undefined) {
                this.isDescriptionAvailable = false;
            } else {
                this.isDescriptionAvailable = true;
            }

            //If root directory is not given as props, then set isRootDirectoryAvailable to false
            if(this.rootDirectory === undefined || this.rootDirectory === "") {
                this.isRootDirectoryAvailable = false;
            } else {
                this.isRootDirectoryAvailable = true;
            }

            //If child directory is not given as props, then set isChildDirectoryAvailable to false
            if(this.childDirectory === undefined || this.childDirectory === "") {
                this.isChildDirectoryAvailable = false;
            } else {
                this.isChildDirectoryAvailable = true;
            }

            //If component is used for activities (TRUE if id is passed in as argument)
            if(this.id === undefined || this.id === "") {
                this.isActivityID = false;
            } else {
                this.isActivityID = true;
            }
        },
    }
</script>

<style scoped>

#banner {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 45vh;
    color: white;
    z-index: 0;
}

#background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: brightness(55%);
  z-index: -1;
}

#content {
    color: white;
}

#title {
    display: grid;
    grid-template-rows: auto auto;
    padding-left: 2.5em;
    padding-top: 1.5em;
    color: white;
}

#title > h1 {
    font-size: 36pt;
    font-weight: bold;
    font-family: Merriweather;
}

#rootDirectory_and_location {
    display: grid;
    grid-template-columns: auto auto;
    font-weight: bold;
    font-size: 16pt;
}

#rootDirectory_and_location_mobile {
    font-weight: bold;
    text-decoration: underline;
    font-size: 16pt
}

#root {
    text-decoration: underline;
    color: white;
}

#location {
    justify-self: end;
    padding-right: 2.5em;
}

#location_mobileView {
    text-decoration: none;
}

#description {
    display: block;
    width: 50%;
    font-size: 14pt;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
}

@media screen and (max-width: 375px) {
    #title {
        display: grid;
        grid-template-rows: auto auto;
        padding-top: 3em;
        color: white;
        text-align: center;
        padding-right: 2.5em;
    }

    #description {
        display: block;
        width: 80%;
        margin-left:auto;
        margin-right: auto;
        text-decoration: none;
        font-weight: 500;
        font-size: 11pt;
        padding-top: 2em;
        padding-bottom: 2em;
    }

    #title > h1 {
        font-size: 20pt;
        font-weight: bold;
        padding-top: 0.75em;
        font-family: Merriweather;
    }
}

@media (min-width: 375px) and (max-width: 525px) {
    #title {
        display: grid;
        grid-template-rows: auto auto;
        padding-top: 3em;
        color: white;
        text-align: center;
        padding-right: 2.5em;
    }

    #description {
        display: block;
        width: 75%;
        margin-left:auto;
        margin-right: auto;
        text-decoration: none;
        font-weight: 500;
        font-size: 12pt;
        padding-top: 2em;
        padding-bottom: 2em;
    }

    #title > h1 {
        font-size: 22pt;
        font-weight: bold;
        padding-top: 0.75em;
        font-family: Merriweather;
    }
}

@media (min-width: 525px) and (max-width: 825px) {
    #title {
        display: grid;
        grid-template-rows: auto auto;
        padding-top: 3em;
        color: white;
        text-align: center;
        padding-right: 2.5em;
    }

    #title > h1 {
        font-size: 24pt;
        font-weight: bold;
        padding-top: 0.75em;
        font-family: Merriweather;
    }

    #description {
        display: block;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        text-decoration: none;
        font-weight: 500;
        font-size: 13pt;
        padding-top: 2em;
        padding-bottom: 2em;
    }
}

@media (min-width: 825px) and (max-width: 1024px) {
    #title {
        display: grid;
        grid-template-rows: auto auto;
        padding-top: 3em;
        color: white;
        text-align: center;
        padding-right: 2.5em;
    }

    #title > h1 {
        font-size: 26pt;
        font-weight: bold;
        padding-top: 0.75em;
        font-family: Merriweather;
    }

    #description {
        display: block;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        text-decoration: none;
        font-weight: 500;
        font-size: 13pt;
        padding-top: 2em;
        padding-bottom: 2em;
    }
}
</style>