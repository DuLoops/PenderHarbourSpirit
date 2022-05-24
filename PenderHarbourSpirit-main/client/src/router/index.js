import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Experience_Activities from '@/pages/experience/activities'
import Experience_Events from '@/pages/experience/events'
import Experience_Restaurant from '@/pages/experience/restaurant'
import Experience_PenderHarbour from '@/pages/experience/pender'
import Experience_Egmont from '@/pages/experience/egmont'
import Experience_Area from '@/pages/experience/area'

import Activity from '@/components/activities/ActivityMain'
import ActivityDetails from '@/components/activities/ActivityDetails'
import Activity_Boating from '@/components/activities/boating'

import TravelInformation from '../pages/travel-information/TravelInformation'
import Accomodation from '../pages/travel-information/accomodation'
import howToGetHere from '../pages/travel-information/howToGetHere.vue'
import AccommodationDetails from '../pages/travel-information/accommodationDetails.vue'
import InfoCentres from '../pages/travel-information/infoCentres.vue'


import ContactUs from '../pages/about/contactUs'
import boardOfDirectors from '../pages/about/boardOfDirectors'
import roleMission from '../pages/about/roleMission.vue'
import relatedWebsites from '../pages/about/relatedWebsites.vue'

import businessOpportunity from '../pages/businessDirectory/businessOpportunity.vue'
import businessDirectory from '../pages/businessDirectory/businessDirectory.vue'


import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //Experience routes
    {
      path: '/Experience_Activities',
      name: "Experience_Activities",
      component: Experience_Activities
    },
    {
      path: '/Experience_Events',
      name: "Experience_Events",
      component: Experience_Events
    },
    {
      path: '/Experience_Restaurant',
      name: 'Experience_Restaurant',
      component: Experience_Restaurant
    },
    {
      path: '/Experience_PenderHarbour',
      name: 'Experience_PenderHarbour',
      component: Experience_PenderHarbour
    },
    {
      path: '/Experience_Egmont',
      name: 'Experience_Egmont',
      component: Experience_Egmont
    },
    {
      path: '/Experience_Area',
      name: 'Experience_Area',
      component: Experience_Area
    },
    // Activities routes
    {
      path: '/Activity',
      name: "Activity",
      component: Activity
    },
    // Route Parameter for a specific item detail in Accommodation (/:propertyName)
    //        - Loads this component when a param is passed.
    {
      path: '/Activity/:id',
      name: 'ActivityDetails',
      component: ActivityDetails,
      props: true //Allows props to be passed in to each unique item link
    },
    {
      path: '/Activity/Boating',
      name: 'Activity_Boating',
      component: Activity_Boating
    },
    {
      path: '/travel_information',
      name: 'Travel_Information',
      component: TravelInformation,
    },
    {
      path: '/travel_information/Accommodations',
      name: 'Accomodation',
      component: Accomodation,
      props: true,
     }, 
     {
      path: '/travel_information/InfoCentres',
      name: 'InfoCentres',
      component: InfoCentres,
      props: true,
     }, 
    // Route Parameter for a specific item detail in Accommodation (/:propertyName)
    //        - Loads this component when a param is passed.
    {
      path: '/travel_information/Accommodations/:title',
      name: 'AccommodationDetails',
      component: AccommodationDetails,
      props: true //Allows props to be passed in to each unique item link
    },
    {
      path: '/about/contactUs',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/about/boardOfDirectors',
      name: 'boardOfDirectors',
      component: boardOfDirectors,
    },
    {
      path: '/about/roleMission',
      name: 'roleMission',
      component: roleMission,
    },
    {
      path: '/business/opportunity',
      name: 'businessOpportunity',
      component: businessOpportunity,
    },
    {
      path: '/about/relatedWebsites',
      name: 'relatedWebsites',
      component: relatedWebsites,
    },
    {
      path: '/business/directory',
      name: 'businessDirectory',
      component: businessDirectory,
    },
    {
      path: '/travel/howToGetHere',
      name: 'howToGetHere',
      component: howToGetHere,
    },
     {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,

    },    
  ]
})
