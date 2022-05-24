<template>
  <div id="mainContainer">
    <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div>
    
    <div id="contentContainer">

        <div style="display: none;" id="subscribeContainer">
            <div id="subscribeDesc">
                <!-- MOBILE VERSION -->
                <div id="subscribeDesc_Mobile" v-if="isMobileView">
                    <h1>Subscribe to Our Newsletter</h1>
                    <p>Stay up to date with exciting news and exclusive offers.</p> 
                </div>

                <!-- DESKTOP VERSION -->
                <h1 v-else>Subscribe to our newsletter to stay up to date with exciting news and exclusive offers.</h1>
            </div>

            <!-- MOBILE VERSION -->
            <form v-if="isMobileView">
                <div id="email_mobile">
                    <input type="email" required="true" placeholder="Your Email Address"/>
                    <button type="submit">
                        <span><b>SUBSCRIBE</b></span>
                    </button>
                </div>
            </form>

            <!-- DESKTOP VERSION -->
            <form v-else>
                <div id="email">
                    <input type="email" required="true" placeholder="Your Email Address"/>
                    <button type="submit">
                        <span><b>SUBSCRIBE</b></span>
                    </button>
                </div>
            </form>
        </div>

        <div id="contactDirectoriesContainer">
            <div id="bannerContainer">
                <img 
                    class ="logo"
                    src="../assets/images/penderHarborLogo-white.png"
                    alt="Pender Harbor Logo"
                >
            </div>

            <!-- Dropdown Navigation for Directories (when equal or less than 441px) -->
            <div id="mobileDropdown" v-if="enableNav">
                 <b-collapse
                    class="card"
                    animation="slide"
                    v-for="(directory, index) of directories"
                    :key="index"
                    :open="isOpen == index"
                    @open="isOpen = index"
                    :aria-id="'contentIdForA11y5-' + index"
                    style="background: #262633">
                    <template #trigger="props">
                        <div
                            class="card-header"
                            role="button"
                            :aria-controls="'contentIdForA11y5-' + index"
                            :aria-expanded="props.open"
                        >
                            <p class="card-header-title" style="color: white;">
                                {{ directory.title }}
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                    :icon="props.open ? 'fa-angle-up' : 'fa-angle-down'"
                                    style="color: white; margin-top: -3px;"
                                    size="is-small">
                                </b-icon>
                            </a>
                        </div>
                    </template>
                    <div class="card-content">
                        <!-- Iterating through directory array -->
                        <div 
                        v-for="subDirectory in directory.sub_directories" 
                        :key="subDirectory.title" 
                        class="content">
                            <b-navbar-item id="navItem" tag="router-link" :to="subDirectory.link">
                                <span style="color: white;">{{ subDirectory.title }}</span>
                            </b-navbar-item>
                        </div>
                    </div>
                </b-collapse>   

                <!-- CONTACT DROPDOWN -->
                <b-collapse
                    class="card"
                    animation="slide"
                    :key="index"
                    :open="isOpen == index"
                    @open="isOpen = index"
                    :aria-id="'contentIdForA11y5-' + index"
                    style="background: #262633">
                    <template #trigger="props">
                        <div
                            class="card-header"
                            role="button"
                            :aria-controls="'contentIdForA11y5-' + index"
                            :aria-expanded="props.open"
                        >
                            <p class="card-header-title" style="color: white;">
                                CONTACT INFO
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                    :icon="props.open ? 'fa-angle-up' : 'fa-angle-down'"
                                    style="color: white; margin-top: -3px;"
                                    size="is-small">
                                </b-icon>
                            </a>
                        </div>
                    </template>
                    <div class="card-content" style="text-align: center; color: white;">
                        <p>Email: {{contactInformation.email}}</p>
                        <p>Phone: {{contactInformation.phone}}</p>
                        <p>Toll-Free: {{contactInformation.tollFree}}</p>
                        <br>
                        <p>Follow Us on Social Media</p>
                        <div id="socialMediaIcons">
                            <a :href="contactInformation.facebook">
                                <b-icon pack="fab" icon="fa-facebook" style="color: #ccccc" size="is-medium"></b-icon>
                            </a>
                            <a :href="contactInformation.instagram">
                                <b-icon pack="fab" icon="fa-instagram" style="color: #ccccc" size="is-medium"></b-icon>
                            </a>
                        </div>
                    </div>
                </b-collapse>   
            </div>

            <!-- 1024px mobile view -->
            <div id="directoriesContainer" v-else>
                <div id="experience">
                    <h1 >EXPERIENCE</h1>
                    <br><router-link class="link" to="/Activity" >
                        Activities
                    </router-link><br>
                    <br><router-link class="link" to="/Experience_Events" >
                        Events
                    </router-link><br>
                    <br><router-link class="link" to="/Experience_Restaurant" >
                        Restaurant & Leisure
                    </router-link><br>
                    <br><router-link class="link" to="/Experience_Area" >
                        Pender Harbour & Egmont
                    </router-link><br>
                    
                </div>
                <div id="travelInformation">
                    <h1>TRAVEL INFORMATION</h1>
                    <br><router-link class="link" to="/travel/howToGetHere" >
                        How to Get Here & Maps
                    </router-link><br>
                    <br><router-link class="link" to="/travel_information/Accommodations" >
                        Accomodations
                    </router-link><br>
                    <br><router-link class="link" to="/travel_information/InfoCentres" >
                        Visitor's Information Center
                    </router-link><br>
                    <br><a class="link" href="https://www.visitpenderharbouregmont.com/" target="_blank">
                        Visitor's Guidebook
                    </a><br>                  
                </div>
                <div id="business">
                    <h1>BUSINESS</h1>
                    <br><router-link class="link" to="/business/opportunity" >
                        Business Opportunity
                    </router-link><br>
                    <br><router-link class="link" to="/business/directory" >
                        Business Directory
                    </router-link><br>
                     
                </div>
                <div id="about">
                    <h1>ABOUT US</h1>
                    <br><router-link class="link" to="/about/contactUs" >
                        Contact Us
                    </router-link><br> 
                    <br><router-link class="link" to="/about/boardOfDirectors" >
                        Board of Directors
                    </router-link><br>
                    <br><router-link class="link" to="/about/roleMission" >
                        Our Role, Mission, Goals
                    </router-link><br>   
                     <br><router-link class="link" to="/about/relatedWebsites" >
                        Related Websites
                    </router-link>  
                
                </div>           

                <div id="contactInfo_container" v-show="!(isMobileView)">
                    <h1>CONTACT</h1>
                    <p id="emailURL">Email: 
                        <a :href="contactInformation.emailURL">{{contactInformation.email}}</a>
                    </p>
                    <p>Phone: {{contactInformation.phone}}</p>
                    <p>Toll-Free: {{contactInformation.tollFree}}</p>
                </div>          

                <!-- SHOW THIS ONLY ON DESKTOP VIEW -->
                <div id="socialMedia_Container" v-show="!(isMobileView) && !(enableNav)">
                    <h1>FOLLOW US ON SOCIAL MEDIA</h1>
                    <div id="socialMediaIcons">
                        <a id="facebook" :href="contactInformation.facebook">
                            <b-icon pack="fab" icon="fa-facebook"></b-icon>
                        </a>
                        <a id="instagram" :href="contactInformation.instagram">
                            <b-icon pack="fab" icon="fa-instagram"></b-icon>
                        </a>
                    </div>
                </div>  
            </div>

            <!-- DISPLAYS ONLY WHEN IT IS WITHIN ABOVE ENABLE NAV (441px) && MOBILE VIEW (1024px) -->
            <div id="contactSocialMediaContainer" v-show="isMobileView && !(enableNav)">
                <div id="contactInfo_container">
                    <h1>CONTACT</h1>
                    <p id="emailURL">Email: 
                        <a :href="contactInformation.emailURL">{{contactInformation.email}}</a>
                    </p>
                    <p>Phone: {{contactInformation.phone}}</p>
                    <p>Toll-Free: {{contactInformation.tollFree}}</p>
                </div>
                <div id="socialMedia_Container">
                    <h1>FOLLOW US ON SOCIAL MEDIA</h1>
                    <div id="socialMediaIcons">
                        <a id="facebook" :href="contactInformation.facebook">
                            <b-icon pack="fab" icon="fa-facebook" style="color: #cccccc"></b-icon>
                        </a>
                        <a id="instagram" :href="contactInformation.instagram">
                            <b-icon pack="fab" icon="fa-instagram" style="color: #cccccc"></b-icon>
                        </a>
                    </div>
                </div>  
            </div>               
        </div>

        <div id="copyrightContainer">
            © Copyright 1949-2022 Pender Harbour & District Chamber of Commerce
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            isOpen: 0,
            directories: [
                {
                    title: "EXPERIENCE",
                    sub_directories: [
                        {
                            title: "Activities",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Events",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Restaurant & Leisure",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Pender Harbour",
                            link: { name: 'Pender Harbour' },
                        },
                        {
                            title: "Egmont",
                            link: { name: 'Egmont' },
                        },
                    ]
                },
                {
                    title: "TRAVEL INFORMATION",
                    sub_directories: [
                        {
                            title: "Visitor's Guidebook",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Accommodations",
                            link: { name: 'Accomodation' },
                        },
                        {
                            title: "How to Get Here & Maps",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Visitor's Information Center",
                            link: { name: 'Pender Harbour' },
                        },
                    ]
                },
                {
                    title: "BUSINESS",
                    sub_directories: [
                        {
                            title: "Business Directory",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Government Reports",
                            link: { name: 'Accomodation' },
                        },
                        {
                            title: "Related Websites",
                            link: { name: 'Activities' },
                        },
                    ]
                },
                {
                    title: "ABOUT US",
                    sub_directories: [
                        {
                            title: "Board of Directors",
                            link: { name: 'Activities' },
                        },
                        {
                            title: "Our Role, Missions, and Goals",
                            link: { name: 'Accomodation' },
                        },
                    ]
                },
            ],
            contactInformation: {
                email: "chamber@penderharbour.ca",
                emailURL: "mailto:chamber@penderharbour.ca",
                phone: "604-883-2561",
                tollFree: "1-877-873-6337",
                facebook: "https://www.facebook.com/penderharbouranddistrict",
                instagram: "https://www.instagram.com/pender_harbour/",
            }
        };
    },
    props:[
        "isMobileView",
        "enableNav"
    ],
};
</script>

<style scoped>

#mainContainer {
    
  background: #262633;
  color: white;
  margin-top: 75px;
}

#contentContainer {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

#subscribeContainer {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;
}

#subscribeDesc > h1 {
    font-size: 30pt;
    font-weight: bold;
    font-family: "Merriweather";
}

#subscribeDesc_Mobile {
    display: grid;
    grid-template-rows: auto auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
}

#subscribeDesc_Mobile > h1 {
    font-size: 30pt;
    font-weight: bold;
    font-family: "Merriweather";
}

#email {
    display: grid;
    grid-template-columns: 65% auto;
    column-gap: 1em;
    padding-top: 7vh;
    padding-bottom: 7vh;
}

#email_mobile {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 1em;
}

#contactDirectoriesContainer {
    display: grid;
    grid-template-rows: auto auto;
    color: white;
    row-gap: 3em;
}

.logo {
    max-width: 15em;
    padding-bottom: 0.75em;
}

#bannerContainer {
    border-bottom: 1px solid white;
}

#directoriesContainer {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 2em;
    row-gap: 2em;
    border-bottom: 1px solid white;
}

#experience {
    font-size: 12pt;
}

#travelInformation {
    font-size: 12pt;
}

#business {
    font-size: 12pt;
}

#about {
    font-size: 12pt;
}

#contactSocialMediaContainer {
    column-gap: 2em;
    font-size: 12pt;
    padding-bottom: 2em;
    border-bottom: 1px solid white;
}

#contactInfo_container {
    margin-bottom: 3em;
}

#experience > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#experience > p {
    color: #cccccc;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    
}

#travelInformation > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#travelInformation > p {
    color: #cccccc;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    
}

#business > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#business > p {
    color: #cccccc;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#about > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#about > p {
    color: #cccccc;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#contactInfo_container > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#contactInfo_container {
    color: #cccccc;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#emailURL > a:hover {
    color: #f1bc68;
    transition: 0.5s;
}

#emailURL > a {
    color: #cccccc;
}

#copyrightContainer {
    padding-top: 1.5em;
    padding-bottom: 3em;
}

#mobileDropdown {
    border-bottom: 1px solid white;
    padding-bottom: 3em;
}

#navItem {
    background:#262633;   
}

#socialMedia_Container > h1 {
    color: white;
    font-weight: bold;
    font-size: 14pt;
}

#socialMediaIcons {
    display: inline-grid; 
    grid-template-columns: 1fr 1fr; 
    column-gap: 0.5em;
    margin-top: 0.3em;
}

#socialMediaIcons > a {
    color: #cccccc;
}

#socialMediaIcons > a:hover {
    color: #f1bc68;
    transition: 0.8s;
}

.link{
    color: white;
    text-decoration: none;
}

@media screen and (max-width: 481px) {
    #subscribeContainer {
        display: grid;
        grid-template-columns: none; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        text-align: center;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #directoriesContainer {
        display: grid;
        grid-template-columns: auto auto; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        row-gap: 5em;
    }

    button {
        background: #f1bc68;
        border: 0;
        color: #262633;
        border-radius: 20px;
        padding: 14px 6px;
    }

    #subscribeDesc_Mobile > h1 {
        font-size: 24pt;
        font-weight: bold;
        font-family: "Merriweather";
    }

    #socialMedia_Container {

    }

    #directoriesContainer {
        border-bottom: none;
    }

    #contactSocialMediaContainer {
        border-top: 1px white solid;
        padding-top: 2em;
    }
}

@media (min-width: 481px) and (max-width: 550px) {
   #subscribeContainer {
        display: grid;
        grid-template-columns: none; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        text-align: center;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #directoriesContainer {
        display: grid;
        grid-template-columns: auto auto; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        row-gap: 5em;
    }

    button {
        background: #f1bc68;
        border: 0;
        color: #262633;
        border-radius: 20px;
        padding: 14px 6px;
    }

    #subscribeDesc_Mobile > h1 {
        font-size: 24pt;
        font-weight: bold;
        font-family: "Merriweather";
    }

    #socialMedia_Container {

    }

    #directoriesContainer {
        border-bottom: none;
    }

    #contactSocialMediaContainer {
        border-top: 1px white solid;
        padding-top: 2em;
    }
}

@media (min-width: 550px) and (max-width: 805px) {
   #subscribeContainer {
        display: grid;
        grid-template-columns: none; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        text-align: center;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #directoriesContainer {
        display: grid;
        grid-template-columns: auto auto; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
        row-gap: 5em;
        text-align: center;
    }

    button {
        background: #f1bc68;
        border: 0;
        color: #262633;
        border-radius: 20px;
        padding: 14px 6px;
    }

    #subscribeDesc_Mobile > h1 {
        font-size: 24pt;
        font-weight: bold;
        font-family: "Merriweather";
    }

    #socialMedia_Container {

    }

    #directoriesContainer {
        border-bottom: none;
    }

    #contactSocialMediaContainer {
        text-align: center;
        border-top: 1px white solid;
        padding-top: 2em;
    }
}

@media (min-width: 805px) and (max-width: 1024px) {
    #subscribeContainer {
        display: grid;
        grid-template-columns: none; /* ADD THIS to nullify the parent grid styling */
        grid-template-rows: auto auto;
    }

    button {
        background: #f1bc68;
        border: 0;
        color: #262633;
        border-radius: 20px;
        padding: 14px 6px;
    }

    #socialMedia_Container {

    }

    #directoriesContainer {
        border-bottom: none;
    }
}

input {
  display: block;
  width: 100%;
  padding: 14px 6px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  border-bottom: 1px solid #ddd;
  color: #555;
}

::-webkit-input-placeholder { /* Edge */
  color: rgb(194, 194, 194);
  font-size: 13pt;
  padding-left: 0.5em;
}

:-ms-input-placeholder { /* Internet Explorer */
  color: rgb(194, 194, 194);
  font-size: 13pt;
  padding-left: 0.5em;
}

::placeholder {
  color: rgb(194, 194, 194);
  font-size: 13pt;
  padding-left: 0.5em;
}

button {
  background: #f1bc68;
  border: 0;
  color: #262633;
  border-radius: 20px;
  box-shadow: 1px 4px #ad8a51;
}

.wave .shape-fill {
    fill: #FFFFFF;
}
</style>