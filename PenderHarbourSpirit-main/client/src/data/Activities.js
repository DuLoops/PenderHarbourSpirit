// Watch out for warnings/advisories for some of these activities
const activities = [
    // HIKING & BIKING
    {
        id: 1,
        title: "Hiking and Biking Adventures",
        type: "Sport",
        area: "Pender Harbour",
        outerDescription: "Pender Harbour has some of the most scenic hikes and mountain biking trails in the Sunshine Coast, ranging from simple lakeside strolls to challenging mountain paths",
        externalPictureURL: "https://www.scrd.ca/files/Image/Community/Parks/DanielPoint.jpg",

        // Information to be used for inside activity pages
        advisoryTitle: "Wildlife Safety",
        advisoryDescription: "Please keep dogs on leashes. If you spot bears, wolves or cougars while hiking, don't run! For more information, please visit the link below: ", //Can be null
        advisoryURL: "https://bcparks.ca/visiting/wildlife-safety/",
        subActivities: [
            {
                title: "Places to Go for Hiking",
                description: "Pender Harbour has many spots for you to hike. For more information, please resort to the Sunshine Coast Super Map. It has a complete listing of addresses, businesses, boat launches, marinas, parks and trails.",
                externalURL: "https://www.facebook.com/SCSuperMap/",
                locations: [
                    {
                        name: "Francis Point Marine Park",
                        area: "Madeira Park", 
                        difficulty: "Moderate", //Can be null
                        price: null,
                        description: "Only a 5 minute drive from Madeira Park on Francis Peninsula Road, you will find Merrill Road and the parking lot for this beautiful marine park. Hike a few steps in to find the cliff overlooking the ocean. If you go right, you will reach the 42 steps that take you up to a lookout with breathtaking views. If you go left, you can hike for 30 minutes right on the edge of the water to a light beacon.",
                        pictureURL: "https://www.vancouvertrails.com/images/photos/francis-point-1.jpg",
                        resourcesURL: "http://www.env.gov.bc.ca/bcparks/explore/parkpgs/francis_pt/",
                        pictureCourtesy: "www.vancouvertrails.com",
                    },
                    {
                        name: "Iris Griffith Wetlands Park",
                        area: "Madeira Park",
                        difficulty: "Easy", //Can be null
                        price: null,
                        description: "For a more leisurely stroll, take a walk along the boardwalk of the Iris Griffith Wetlands Park, situated behind the fire hall by the church and the post office at the end of Gonzales Rd in Madeira Park. There are seats and interpretive signage creating a quiet and fascinating place for residents and visitors to spend time.",
                        pictureURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f5/b4/54/photo1jpg.jpg?w=2200&h=-1&s=1",
                        resourcesURL: "https://www.ehcanadatravel.com/british-columbia/sunshine-coast/pender-harbour/parks-places/4824-pender-harbour-bc.html",
                        pictureCourtesy: "Ruby Lake Lagoon Society",
                    },
                    {
                        name: "Tyner Park",
                        area: "Madeira Park",
                        difficulty: "Easy", //Can be null
                        price: null,
                        description: "Located on the south side of Lily Lake in Madeira Park, this 2.5 km walking trail borders the lake where there is a conservation effort to save Western Painted Turtles. Look for the turtles sunbathing on the rocks and logs. One trailhead is located next to the entrance to Lily Lake Place, and the other across from the Pender Harbour Clinic on Francis Peninsula Road where you can park your car.",
                        pictureURL: "https://www.scrd.ca/files/Image/Community/Parks/Tyner%20Park%2C%20Lilly%20Lake%201.JPG",
                        resourcesURL: "https://www.scrd.ca/Tyner-Park",
                        pictureCourtesy: "www.scrd.ca",
                    },
                    {
                        name: "Mount Daniel",
                        area: "Garden Bay",
                        price: null,
                        difficulty: "Challenging", //Can be null
                        description: "Mount Daniel is only a 15 minute drive north of Madeira Park. The trailhead is off Garden Bay Road and it is a challenging one-hour hike up to the top where a 360 degree spectacular view awaits intrepid hikers.",
                        pictureURL: "https://www.vancouvertrails.com/images/photos/mount-daniel-3.jpg",
                        resourcesURL: "http://www.sunshine-coast-trails.com/mount-daniel.html",
                        pictureCourtesy: "www.vancouvertrails.com",
                    },
                    {
                        name: "Pender Hill Park",
                        area: "Garden Bay",
                        price: null,
                        difficulty: "Challenging", //Can be null
                        description: "Pender Hill is a steep 1.5 km hiking trail that takes 30 minutes to climb up. Turn into Garden Bay Road, off Highway 101 and follow this road for approximatley 8.6 kms to Lee Road. At Lee Road turn right and proceed 1.1 kms to where the trail head begins. Challenging hike but are well worth the effort for the views.",
                        pictureURL: "https://www.vancouvertrails.com/images/photos/pender-hill-6.jpg",
                        resourcesURL: "http://www.scrd.ca/Pender-Hill-Park",
                        pictureCourtesy: "www.vancouvertrails.com",
                    },
                    {
                        name: "Daniel Point Park",
                        area: "Garden Bay",
                        price: null,
                        difficulty: "Challenging", //Can be null
                        description: "Daniel Point Park is a fairly steep hike down to the water, but the views of the Strait of Georgia are magnificent. Take Garden Bay Road to Irvine's Landing Road. Turn right onto Lee Rd at 800 m turn left onto Orca Rd. The access to the park is on Orca Road. Undeveloped beach access, 2.5 km trail. Approximately 1 hour up hill.",
                        pictureURL: "https://www.scrd.ca/files/Image/Community/Parks/DanielPoint.jpg",
                        resourcesURL: "https://www.scrd.ca/daniel-point-park",
                        pictureCourtesy: "www.scrd.ca",
                    },
                ]
            },
            {
                title: "Places to Go for Biking",
                //Provide link @ end of this sentence
                description: "The Sunshine Coast has 385 km of mountain bike trails spread throughout the Sechelt Peninsula. You will find tight and twisty cross-country trails, wide-open descents, rock rolls and wooden ladders. Or rolling paths that are heavy on scenery and less on skill. For more information on the various trails, read here: ", 
                externalURL: "https://sunshinecoastcanada.com/blog/2018/06/in-the-zone-the-best-mountain-bike-zones-on-the-sunshine-coast/",
                locations: [
                    {
                        name: "Suncoaster Trail",
                        area: "Klein Lake, Sakinaw Lake, Pender Harbour, Secret Cove", //Areas Covered: ____, ____, _____
                        price: null,
                        difficulty: "Challenging",
                        description: "The Suncoaster Trail moves through rural communities and wilderness settings, the condition of the trail is often a reflection of its setting. The 37 kilometres of natural trail travels through old crown land forest roadways along a series of lakes and connects trails blazed through the brush with exit points near Sunshine Coast communities.",
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2018/06/Screen-Shot-2018-06-05-at-5.51.54-PM.png",
                        resourcesURL: "http://www.sunshine-coast-trails.com/suncoaster-trail.html",
                        pictureCourtesy: "Christopher Peters / Dirt Coast Photography",
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Hiking and Biking Adventures",
        type: "Sport",
        area: "Egmont",
        outerDescription: "Egmont has many trails for you to leisurely hike or bike. Simply enjoy and embrace the view, or challenge yourself to a good workout.",
        externalPictureURL: "https://sunshinecoastcanada.com/app/uploads/2018/06/Screen-Shot-2018-06-05-at-5.51.54-PM.png",

        advisoryTitle: "Wildlife Safety",
        advisoryDescription: "Please keep dogs on leashes. If you spot bears, wolves or cougars while hiking, don't run! For more information, please visit the link below: ", //Can be null
        advisoryURL: "https://bcparks.ca/visiting/wildlife-safety/",
        subActivities: [
            {
                title: "Places to Go for Hiking",
                description: "There are many areas within Egmont and nearby for you to enjoy hiking. For more information, please resort to the Sunshine Coast Super Map. It has a complete listing of addresses, businesses, boat launches, marinas, parks and trails.",  
                externalURL: null,
                locations: [
                    {
                        name: "Skoomkumchuck Narrows Provinicial Park",
                        area: "Egmont",
                        price: null,
                        difficulty: "Easy", //Can be null
                        description: "The Skookumchuck Rapids are located in this provincial park in Egmont, and the rapids are the #1 attraction in the Sunshine Coast! This is an easy one-hour long hike to the rapids and the whirlpools. A must for anyone who loves hiking and who also wants to appreciate the power of nature and ocean tides. Check the tide tables to ensure you're visiting at extra-large tides for the best viewing of the rapids where you might catch kayakers surfing.",
                        pictureURL: "https://www.vancouvertrails.com/images/hikes/skookumchuck-narrows.jpg",
                        resourcesURL: "https://sunshinecoastcanada.com/things-to-do/hidden-gems/skookumchuck-narrows/",
                        pictureCourtesy: "www.vancouvertrails.com",
                    },
                ]
            },
            {
                title: "Places to Go for Biking",
                 //Provide link @ end of this sentence
                description: "The Sunshine Coast has 385 km of mountain bike trails spread throughout the Sechelt Peninsula. You will find tight and twisty cross-country trails, wide-open descents, rock rolls and wooden ladders. Or rolling paths that are heavy on scenery and less on skill. For more information on other biking trails, read here: ", 
                externalURL: "https://sunshinecoastcanada.com/blog/2018/06/in-the-zone-the-best-mountain-bike-zones-on-the-sunshine-coast/",
                locations: [
                    {
                        name: "Suncoaster Trail",
                        area: "Klein Lake, Sakinaw Lake, Pender Harbour, Secret Cove", //Areas Covered: ____, ____, _____
                        price: null,
                        difficulty: "Challenging",
                        description: "The Suncoaster Trail moves through rural communities and wilderness settings, the condition of the trail is often a reflection of its setting. The 37 kilometres of natural trail travels through old crown land forest roadways along a series of lakes and connects trails blazed through the brush with exit points near Sunshine Coast communities.",
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2018/06/Screen-Shot-2018-06-05-at-5.51.54-PM.png",
                        resourcesURL: "http://www.sunshine-coast-trails.com/suncoaster-trail.html",
                        pictureCourtesy: "Christopher Peters / Dirt Coast Photography",
                    },
                ]
            }
        ]
    },

    // Heritage Tour
    {
        id: 3,
        title: "Take the Self-Guided Heritage Tour!",
        type: "Art and Culture", 
        area: "Pender Harbour",
        outerDescription: "Pender Harbour has some of the most scenic hikes and mountain biking trails in the Sunshine Coast, ranging from simple lakeside strolls to challenging mountain paths",
        externalPictureURL: "https://doc-14-bk-mymaps.googleusercontent.com/untrusted/hostedimage/ihucu48q9m5s1hftel5u85tfdc/p9ksas5pgrcfhgg3qrvmrb3dro/1653075900000/iHllLW2LtBUC_Zz3HQWtIM_Oiv4QGMQ_/*/6AIsG_va6eZkoYlDm8ITOeM6_hSFDYfSAmtps0zt7SDZywzNNXyVuNqxlErkf_8F1CgE1Cc3BvFginkgj5appW6AvvWip0L3Z_EIbRKSG7XcAa5LEGj1krOJ9ieXom5jgeFGn7DcVFvqs3-hc0efYJXvWm7TUCHrv86KA2LB3AVGR_K6LmihS63mXhLOpi0b1Pe-kwjA?session=0&fife=s16383", //Used for rendering card picture
        
        advisoryTitle: "",
        advisoryDescription: null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Take the Self-Guided Heritage Tour!",
                description: "Take a self-guided heritage tour of historic places throughout the Pender Harbour area, including in Francis Peninsula, Madeira Park, Kleindale, and Garden Bay. Use the map on the Pender Harbour Living Heritage Society's website, or go directly to the map in Google maps.", 
                externalURL: "http://www.penderharbourheritage.ca/self-guided-heritage-tour.html",
                locations: [
                    {
                        name: "Online (via. Google Maps)",
                        area: "Virtual",
                        price: null,
                        difficulty: null,
                        description: "This is a virtual tour of the history of Pender Harbour. Want to learn more about how Pender Harbour was established? Click the link above to get started!",
                        pictureURL: "https://doc-14-bk-mymaps.googleusercontent.com/untrusted/hostedimage/ihucu48q9m5s1hftel5u85tfdc/p9ksas5pgrcfhgg3qrvmrb3dro/1653075900000/iHllLW2LtBUC_Zz3HQWtIM_Oiv4QGMQ_/*/6AIsG_va6eZkoYlDm8ITOeM6_hSFDYfSAmtps0zt7SDZywzNNXyVuNqxlErkf_8F1CgE1Cc3BvFginkgj5appW6AvvWip0L3Z_EIbRKSG7XcAa5LEGj1krOJ9ieXom5jgeFGn7DcVFvqs3-hc0efYJXvWm7TUCHrv86KA2LB3AVGR_K6LmihS63mXhLOpi0b1Pe-kwjA?session=0&fife=s16383",
                        resourcesURL: "http://www.penderharbourheritage.ca/self-guided-heritage-tour.html",
                        pictureCourtesy: "Pender Harbour Living Heritage Society",
                    }
                ]
            }
        ]
    },

    // Fishing, Crabbing and Prawning
    {
        id: 4,
        title: "Fishing, Crabbing and Prawning",
        type: "Nature and Outdoor",
        area: "Pender Harbour",
        outerDescription: "Pender Harbour area offers incredible fishing opportunities for multiple species year-round in one of the country's most scenic marine settings and prettiest lakes in the Sunshine Coast.",
        externalPictureURL: "http://cdn.lightgalleries.net/5591b2c0e4261/images/OTB-Charters-32-1.jpg", //Used for rendering card picture

        advisoryTitle: "B.C. Tidal Waters Sport Fishing Licence is Required",
        advisoryDescription: "A valid B.C. Tidal Waters Sport Fishing Licence is required to fish or harvest all fish, including shellfish. A maximum of two crab traps or rings (or a combination of both) may be fished by each person in possession of a valid licence. In many areas of British Columbia, fishing is not allowed or is restricted. It is illegal to harvest shellfish from closed or contaminated areas. For more information, please visit the link: ",
        advisoryURL: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/index-eng.html",
        subActivities: [
            {
                title: "Fishing Charters are a must!",
                description: "At Pender Harbour, we offer exciting year round fishery for both saltwater and freshwater fishing! We have a variety of venders that will supply everything you need to start fishing.",
                externalURL: null,
                locations: [
                    {
                        name: "Gulf Rascal Charters",
                        description: "The Gulf Rascal offers custom fishing charters based upon your preference.  Whether you would like to fish for Salmon, Pacific Ling, Rockfish, Spot Prawns, crabs or a combination, Captain Rick can tailor a day just for you. The Gulf Rascal can accommodate a maximum of 8 people and uses descending devices to safely release unintentional rockfish catches. Buy Spot prawns straight off the Gulf Rascal when she is moored at the Madeira Park Government Dock.",
                        area: "Madeira Park",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://scontent.fyvr4-1.fna.fbcdn.net/v/t31.18172-8/10562618_712729548821248_7361958206260895509_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uMCjtXei9y4AX88aMqL&_nc_ht=scontent.fyvr4-1.fna&oh=00_AT99TsiR5xiwfgGIH2jZy-bRgjdyZE_3lDZg5u0Oa8708A&oe=62ACE858",
                        resourcesURL: "http://gulfrascalcharters.com/",
                        pictureCourtesy: "Gulf Rascal Charters"
                    },
                    {
                        name: "OTB Charters",
                        description: "OTB Fishing Charters offers full, half day, and custom fishing charters aboard their Aluminum Pilothouse Saturday Pants.  You can troll for athletic and beautiful salmon; jig for exotic bottom fish; and set traps for delicious spot prawns. Let OTB know what you want to do and they will build a package around your interests. OTB also offers whale watching, marine tours/expeditions, boat-supported Stand Up Paddleboarding trips, beach camping, and more!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "http://cdn.lightgalleries.net/5591b2c0e4261/images/satp3-1.jpg",
                        resourcesURL: "http://www.otbcharters.com/",
                        pictureCourtesy: "OTB Charters"
                    },
                    {
                        name: "Osprey Ocean Charters",
                        description: "Osprey Ocean Charters operate out of Pender Harbour, on the beautiful Sunshine Coast. Here we are surrounded by fertile fishing grounds, in one of the most scenic marine areas on the British Columbia coastline. Nature is plentiful, and we regularly encounter seals, sea lions, humpback and orca whales, as well as bald eagles and many other coastal bird species. Whether it is a day of fishing, a scenic tour, or you just want to travel the coastal waters in style, Osprey Ocean Charters can help you achieve all of your aquatic aspirations. OTB Fishing Charters offers full, half day, and custom fishing charters aboard their Aluminum Pilothouse Saturday Pants.  You can troll for athletic and beautiful salmon; jig for exotic bottom fish; and set traps for delicious spot prawns. Let OTB know what you want to do and they will build a package around your interests. OTB also offers whale watching, marine tours/expeditions, boat-supported Stand Up Paddleboarding trips, beach camping, and more!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://ospreyoceancharters.com/osprey-wp/wp-content/uploads/duckworth-crop.jpg.webp",
                        resourcesURL: "https://ospreyoceancharters.com/",
                        pictureCourtesy: "Osprey Ocean Charters"
                    }
                ]
            },
            {
                title: "Places to Go Fishing Around",
                description: "Whether your looking to go freshwater fishing or saltwater fishing, Pender Harbour has an abundance of spots for you to start fishing!",
                externalURL: null,
                locations: [
                    {
                        name: "Garden Bay Marine Provincial Park",
                        description: "Garden Bay Marine Provincial Park provides 200 metres of shoreline, with a backdrop rising to the summit of Mount Daniel. This park provides excellent opportunities for fishing, picnicking and swimming.",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "hhttps://farm6.static.flickr.com/5481/12548152085_ed68c14d1c_c.jpg",
                        resourcesURL: "https://bcparks.ca/explore/parkpgs/garden_bay/",
                        pictureCourtesy: "https://www.britishcolumbia.com/" 
                    },
                    {
                        name: "Pender Harbour Resort and Marina",
                        description: "Pender Harbour Resort and Marina rents motorboats in Pender Harbour and you can also fish off the resort's pier. They also provide accommodation services as well!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2020/02/DE08E658-8DE9-4D08-98DD-152D3021308B-1-1438x1024.jpeg",
                        resourcesURL: "https://www.penderharbourresort.com/",
                        pictureCourtesy: "Sunshine Coast Canada",
                    },
                    {
                        name: "Sakinaw Lake",
                        description: "Sakinaw Lake is just north of Pender Harbour and known for its large Cutthroat trout which can reach over 4 lbs. Kokanee, Sockeye and Coho salmon are also found in the lake. This beautiful lake is the largest on Sechelt Peninsula and is best fished in the spring and fall months. Boats can be launched at the lake.",
                        area: "North of Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2017/02/Sakinaw-Lake-Chris-Thorn_web-1440x900.jpg",
                        resourcesURL: "https://sunshinecoastcanada.com/explore/lakes/sakinaw-lake/",
                        pictureCourtesy: "Sunshine Coast Canada",
                    }, 
                    {
                        name: "Katherine Lake",
                        description: "Katherine Lake is one of the most popular spots, offering picnic facilities, sandy swimming beach, small playground, 26 RV spots and 10 campsites, washroom facilities with showers and an onsite caretaker.  Boat access is through Katherine Lake Park.. Anglers can challenge themselves against the healthy populations of cutthroat trout, and Coho salmon spawn in the creek between Katherine Lake and Mixal Lake. The lake is not stocked.",
                        area: "North of Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/katherine-lake-swimming_orig.jpg",
                        resourcesURL: "https://www.scrd.ca/Katherine-Lake",
                        pictureCourtesy: "",
                    }, 
                    {
                        name: "Garden Bay Lake",
                        description: "Garden Bay Lake is easy to access and large enough to find a good fishing spot away from swimmers and sunbathers. This lake is known for its Cutthroat trout and Salmon recreational fisheries.",
                        area: "North of Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/100960766_3478813188814610_6984158367132418048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=TYnithYp8s8AX_ka580&_nc_ht=scontent.fyvr4-1.fna&oh=00_AT-8DzIhBCfwAqG1Ii3ZOBtkjNFZiRPgMu32966dI3KfTg&oe=62ACDB4A",
                        resourcesURL: "https://sunshinecoastcanada.com/explore/lakes/garden-bay-lake/",
                        pictureCourtesy: "Ross Pearce (via. Picture Perfect Sunshine Coast BC Canada)",
                    }, 
                ]
            },
            {
                title: "Crabbing",
                description: "BC has strict fishing regulations and shellfish closures that may limit the areas that you can safely and legally harvest crab. You can read the full list of BC crab fishing regulations here.",
                externalURL: "http://www.pac.dfo-mpo.gc.ca/publications/pdfs/Crab_english.pdf",
                locations: null,
            },
            {
                title: "Prawning",
                description: "Prawn fishing in the Pacific Region has grown in popularity and recreational fishers share responsibility for the conservation of Spot Prawns. When you set your traps, remember your day limit is not a fishing target and prawns are seasonally variable and short-lived, so fish safely and responsibly and respect seasonal closures.",
                externalURL: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/docs/prawn-trap-piege-crevette-eng.pdf",
                locations: null,
            }
        ]
    },
    {
        id: 5,
        title: "Fishing, Crabbing and Prawning",
        type: "Nature and Outdoor",
        area: "Egmont",
        outerDescription: "Looking for wanting to go fishing, catch crabs or prawns? Egmont is located on the Skookumchuck Narrows, a popular destination for anglers because of the abundance in marine wildlife.  However, please beware of strong currents!",
        externalPictureURL: "http://cdn.lightgalleries.net/5591b2c0e4261/images/boatbum-1.jpg",

        advisoryTitle: "B.C. Tidal Waters Sport Fishing Licence is Required",
        advisoryDescription: "A valid B.C. Tidal Waters Sport Fishing Licence is required to fish or harvest all fish, including shellfish. A maximum of two crab traps or rings (or a combination of both) may be fished by each person in possession of a valid licence. In many areas of British Columbia, fishing is not allowed or is restricted. It is illegal to harvest shellfish from closed or contaminated areas. For more information, please visit the link:",
        advisoryURL: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/index-eng.html",
        subActivities: [
            {
                title: "Need a Boat?",
                description: "At Egmont, we offer exciting year round fishery for both saltwater and freshwater fishing! We have a variety of venders that will supply everything you need to start fishing.",
                externalURL: null,
                locations: [
                    {
                        name: "Bathgate Resort & Marina",
                        description: "Bathgate Resort & Marina rents motorboats in Egmont. The Resort's general store offers fishing gear and bait. There is also a fuel dock, washrooms, showers and a laundromat.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://bathgate.com/home/wp-content/uploads/2016/10/marina-slider.jpg",
                        resourcesURL: "https://bathgate.com/activities/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Bathgate Resort & Marina"
                    },
                    {
                        name: "Ruby Lake Resort",
                        description: "Ruby Lake Resort has boats, canoes and SUPs for you to rent. What's even better is that it is located around Ruby Lake, which is home to Kokanee and Cutthroat Trout. However, be sure to obtain a fresh water fishing license and also bring your fishing gear should you intend to fish on the lake.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://www.rubylakeresort.com/uploads/6/7/3/0/6730067/5117784_orig.jpg",
                        resourcesURL: "https://www.rubylakeresort.com/swimming-paddling-boating-fishing.html",
                        pictureCourtesy: "Ruby Lake Resort"
                    },
                ]
            },
            {
                title: "Places to Go Fishing in Egmont",
                description: "At Egmont, we offer exciting year round fishery for both saltwater and freshwater fishing! We have a variety of venders that will supply everything you need to start fishing.",
                externalURL: null,
                locations: [
                    {
                        name: "Ruby Lake",
                        description: "Ruby Lake just north of Sakinaw Lake, supports a Cutthroat and Kokanee fishery. The size for the Cutthroat is usually about 1 lb. but there are reports of them reaching to 3 lbs. Spring, fall and winter are the best months for fishing. Closed all year at the outlet bay within 100m of Ruby Creek.",
                        area: "Egmont",
                        difficulty: null,
                        pictureURL: "http://fishnbc.com/cpg/albums/userpics/10001/the-pier-on-ruby-lake5B15D.jpg",
                        resourcesURL: "https://sunshinecoastcanada.com/explore/lakes/ruby-lake/",
                        pictureCourtesy: "www.fishnbc.com"
                    },
                    {
                        name: "Waugh Lake",
                        description: "Waugh Lake is located at the entrance to the tiny Village of Egmont. There is parking and a floating dock to dive off into the warm lake waters. Great place to launch kayaks and canoes!",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://lakeapedia.files.wordpress.com/2013/12/p1010395.jpg",
                        resourcesURL: "https://www.wcwl.com/things-to-do/local-lakes/",
                        pictureCourtesy: "Lakeapedia"
                    },
                    {
                        name: "Klein Lake",
                        description: "Klein Lake is located in the mountains closer to Egmont, and offers 2 fishing piers, day use picnic area, pit-toilets, camping, wheelchair accessible  Electric motors boats only. Some species of fish include Cutthroat Trout.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "http://www.sitesandtrailsbc.ca/resources/REC0134/siteimages/Klein%20Lake1.JPG",
                        resourcesURL: "https://sunshinecoastcanada.com/explore/lakes/klein-lake/",
                        pictureCourtesy: "sitesandtrailsbc.ca"
                    }
                ]
            },
            {
                title: "Crabbing",
                description: "BC has strict fishing regulations and shellfish closures that may limit the areas that you can safely and legally harvest crab. You can read the full list of BC crab fishing regulations here.",
                externalURL: "http://www.pac.dfo-mpo.gc.ca/publications/pdfs/Crab_english.pdf",
                locations: null,
            },
            {
                title: "Prawning",
                description: "Prawn fishing in the Pacific Region has grown in popularity and recreational fishers share responsibility for the conservation of Spot Prawns. When you set your traps, remember your day limit is not a fishing target and prawns are seasonally variable and short-lived, so fish safely and responsibly and respect seasonal closures.",
                externalURL: "https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/docs/prawn-trap-piege-crevette-eng.pdf",
                locations: null,
            }
        ]
    }, 

    // Tours
    {
        id: 6,
        title: "Boat Cruises",
        type: "Touring",
        area: "Pender Harbour",
        outerDescription: "Pender Harbour has many boat touring services for you to enjoy the view and appreciate the diverse wildlife the area has to offer!",
        externalPictureURL: "https://pbs.twimg.com/media/D_hLEfHVUAIQa6_.jpg", //Used for rendering card picture

        advisoryTitle: "",
        advisoryDescription: null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Toured Cruises and Services",
                description: "Discover the elaborate history of the area, from First Nations settlements to the eras of logging and fishing, with great opportunities to view incredible wildlife up close, plus wonderful examples of West Coast architecture.",
                externalURL: null,
                locations: [
                    {
                        name: "Slocat Pender Harbour Tours",
                        description: "At the Madeira Park government dock, take a fully-narrated 90 minute harbour cruise on the Slocat Pender Harbour Tours for best viewing of the whole harbour. You are guaranteed to spot eagles and seals!",
                        area: "Madeira Park",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://pbs.twimg.com/media/Df_fgGXVQAEueBk?format=jpg&name=large",
                        resourcesURL: "https://www.slocat.ca/",
                        pictureCourtesy: "Slocat Pender Harbour Tours"
                    },
                    {
                        name: "Alpha Adventures",
                        description: "At the Madeira Park government dock, rent a kayak or take a kayak tour with Alpha Adventures.",
                        area: "Sechelt",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/282038558_726400725060800_6202939549830349122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rx1qm3Grp1wAX_d5Sa8&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AT-JJvO4-pdQ4mUxgIBeDGa9Wn9hSe6hUv6ODIhnbp9PVw&oe=628D15F3",
                        resourcesURL: "https://www.outdooradventurestore.ca/",
                        pictureCourtesy: "Alpha Adventures"
                    },
                    {
                        name: "OTB Charters",
                        description: "OTB Fishing Charters offers full, half day, and custom fishing charters aboard their Aluminum Pilothouse Saturday Pants.  You can troll for athletic and beautiful salmon; jig for exotic bottom fish; and set traps for delicious spot prawns. Let OTB know what you want to do and they will build a package around your interests. OTB also offers whale watching, marine tours/expeditions, boat-supported Stand Up Paddleboarding trips, beach camping, and more!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "http://cdn.lightgalleries.net/5591b2c0e4261/images/satp3-1.jpg",
                        resourcesURL: "http://www.otbcharters.com/",
                        pictureCourtesy: "OTB Charters"
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Boat Tours",
        type: "Touring",
        area: "Egmont",
        outerDescription: "Egmont is a popular destination for boaters because it's the closest jumping off point to cruise north to the Harmony Islands in Hotham Sound and the beautiful Princess Louisa Inlet and Chatterbox Falls, and south into Sechelt Inlet after crossing the Skookumchuck Rapids.",
        externalPictureURL: "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/52674265_302993133732498_4419659624056094720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fsWHFFLR88sAX_Cvisj&_nc_ht=scontent.fyvr4-1.fna&oh=00_AT9Ih8kOWBSrk1AyLdRWWrXRK__q4RRRr5q3uj1csiXgzA&oe=62B011AB", //Used for rendering card picture

        advisoryTitle: "",
        advisoryDescription: null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Toured Cruises and Services",
                description: "Discover the elaborate history of the area, from First Nations settlements to the eras of logging and fishing, with great opportunities to view incredible wildlife up close, plus wonderful examples of West Coast architecture. Below are a few touring services available in Egmont: ",
                externalURL: null,
                locations: [
                    {
                        name: "Skookumchuck Boat Tours",
                        description: "The Skookumchuck Boat Tours will take you for a tour to see the Skookumchuck Rapids and any other local areas you want to visit. These boat tours leave from the Egmont government dock.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://static.wixstatic.com/media/586d3d_572df935a613405594a6c09808153128~mv2.png/v1/fill/w_1077,h_463,q_90/586d3d_572df935a613405594a6c09808153128~mv2.webp",
                        resourcesURL: "https://www.skookumchuckboattours.com/",
                        pictureCourtesy: "Skookumchuck Boat Tours"
                    },
                    {
                        name: "West Coast Wilderness Lodge",
                        description: "The West Coast Wilderness Lodge offers great kayak and boat tour packages that includes lunch in their restaurant Inlets with amazing ocean views.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://www.wcwl.com/wp-content/uploads/2018/04/SDP-140624-canada-egmont-48-LR-1200x.jpg",
                        resourcesURL: "https://www.wcwl.com/packages/",
                        pictureCourtesy: "West Coast Wilderness Lodge"
                    },
                    {
                        name: "Malibu Yacht Charters",
                        description: "Further down the road is the Malibu Yacht Charters, specializing on taking visitors to the Malibu Rapids Christian Youth Camp and Desolation Sound.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://tours.boatersbluepages.com/siteAssets/headers/princesslouisa.jpg",
                        resourcesURL: "https://www.boatersbluepages.com/ChartersAndBoatRentals/MalibuYachtCharters.html/",
                        pictureCourtesy: "Boaters Blue Pages"
                    },
                ]
            }
        ]
    },
    // Sailing (Include Mooring, Anchoring, and Repairing Services)
    {
        id: 8,
        title: "Sailing and Boating",
        type: "Sport",
        area: "Pender Harbour",
        outerDescription: "Sailing and Boating is popular in the calm waters of Pender Harbour where sailors participate in races every Saturday.",
        externalPictureURL: "https://s3.wasabisys.com/default-01/default/PenderHarbourKayakOptimized.jpg", //Used for rendering card picture

        advisoryTitle: "",
        advisoryDescription: null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Participate in Weekly Sailing Races!",
                description: "Check out Garden Bay Sailing Club for more info about races, including the popular Malaspina Regatta is in July.",
                externalURL: "https://www.gardenbaysailingclub.com/",
                locations: null,
            }, 
            {
                title: "Motorboat Rentals",
                description: "Looking to shred some tides? Some accommodations around Pender Harbour offer boat rentals at a reasonable price!",
                externalURL: "null",
                locations: [
                    {
                        name: "Pender Harbour Resort & Marina",
                        description: "They have two 19-foot motorboats available for rent, both KingFisher 1825 Falcons. Each seats up to six and has a 90-hp outboard motor. Boats must be reserved in advance of your stay. Maximum number of people allowed aboard is six. Boats are equipped with a fish finder and GPS.",
                        area: "Garden Bay",
                        price: null,
                        price: "$560/full day",
                        difficulty: null,
                        pictureURL: "https://s3.wasabisys.com/default-01/default/53B87FA1-574D-4199-A822-9EFCCC1AB92AOptimized.jpg",
                        resourcesURL: "https://www.penderharbourresort.com/marina",
                        pictureCourtesy: "Pender Harbour Resort & Marina"
                    },
                    {
                        name: "Sunshine Coast Resort Hotel & Marina",
                        description: "Sunshine Coast Resort & Marina offers a selection of motorboats for sightseeing and fishing. They're boats are all equipped with GPS Marine Navigation and range in design, size and horsepower!",
                        area: "Madeira Park",
                        price: null,
                        price: "$600-$700/full day",
                        difficulty: null,
                        pictureURL: "https://sunshinecoast-resort.com/wp-content/uploads/2015/04/motorboat08.jpg",
                        resourcesURL: "https://sunshinecoast-resort.com/the-marina/motorboat-rentals/",
                        pictureCourtesy: "Sunshine Coast Resort Hotel & Marina"
                    },
                    {
                        name: "John Henry's Resort and Marina",
                        description: "John Henry's offer multiple ways to explore Pender Harbour: by kayak, stand-up paddleboard and motorboat. They also rent to both marina and resort guests as well as others who are visiting Garden Bay.",
                        area: "Garden Bay",
                        price: null,
                        price: "$400-$500/full day",
                        difficulty: null,
                        pictureURL: "https://www.johnhenrys.ca/wp-content/uploads/2021/02/JH-Rental-Boat-6.jpg",
                        resourcesURL: "https://www.johnhenrys.ca/rentals/",
                        pictureCourtesy: "John Henry's Resort and Marina",
                    },
                    {
                        name: "Westcoast Water Cowboys Rentals",
                        description: "Westcoast Water Cowboys Rentals rent jet skis in the Sunshine Coast. For more information, call 604-839-8097.",
                        area: "Madeira Park",
                        price: null,
                        price: "Unknown",
                        difficulty: null,
                        pictureURL: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_447,w_669,x_0,y_0/v1640552974/tenants/76b6a622-c4bd-4cfc-9508-2d7abd453917/a0d48395074f45339fc0234b268d529b/Watercowboys-photo.jpg",
                        resourcesURL: "http://business.penderharbour.ca/penderharbourdirectory/Details/westcoast-water-cowboys-rentals-1781871",
                        pictureCourtesy: null,
                    },
                ]
            }, 
            {
                title: "Anchoring Spots",
                description: "There are good anchoring grounds in Pender Harbour. Below are a list of popular spots for anchoring your vessel. ",
                externalURL: "null",
                locations: [
                    {
                        name: "Pender Harbour Resort and Marina",
                        description: "Pender Harbour Resort and Marina rents motorboats in Pender Harbour and you can also fish off the resort's pier. They also provide accommodation services as well!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2020/02/DE08E658-8DE9-4D08-98DD-152D3021308B-1-1438x1024.jpeg",
                        resourcesURL: "https://www.penderharbourresort.com/",
                        pictureCourtesy: "Sunshine Coast Canada",
                    },
                    {
                        name: "John Henry's Resort and Marina",
                        description: "John Henry's is a full service marina & resort and includes a unique country General Store (open 7 days a week year round), a liquor store, fresh produce & groceries, an ATM, propane, bait, ice, gifts and fishing & boating supplies.",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_979,w_798,x_0,y_0/v1640648855/tenants/76b6a622-c4bd-4cfc-9508-2d7abd453917/e74efb44bf9b418d91039fd9e0b02301/John-Henry-s-photo.jpg",
                        resourcesURL: "http://www.johnhenrysresortmarina.com/",
                        pictureCourtesy: "John Henry's Resort and Marina",
                    },
                    {
                        name: "Gunboat Bay",
                        description: "This is the most protected anchoring spot available, however - be mindful of favourable tides when entering and exiting.",
                        area: "Garden Bay",
                        difficulty: null,
                        pictureURL: "https://i.ytimg.com/vi/mKkRGGu2TH0/maxresdefault.jpg",
                        resourcesURL: null,
                        pictureCourtesy: null
                    },
                    {
                        name: "Bargain Bay",
                        description: "Located to the east of Francis Peninsula. It offers shelter from northeasterly winds.",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://mapio.net/images-p/2239083.jpg",
                        resourcesURL: null,
                        pictureCourtesy: null
                    },
                    {
                        name: "Madeira Park Government Dock",
                        description: "Oversees government docks in Welbourne Cove (Madeira Park Wharf), Gerran's Bay (Whiskey Slough), Hospital Bay, & Secret Cove.",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_1362,w_2048,x_0,y_0/v1644002632/tenants/76b6a622-c4bd-4cfc-9508-2d7abd453917/86c1ff65b8d9412fa316cff0e4040997/HospBay-JohnFarrer.jpg",
                        resourcesURL: null,
                        pictureCourtesy: null
                    }, 
                ],
            },
            {
                title: "Moorage Spots and Accommodation",
                description: "You can find moorage areas around Garden Bay and Madeira Park areas, usually in Resorts and Marinas.",
                externalURL: "null",
                locations: [
                    {
                        name: "Pender Harbour Resort and Marina",
                        description: "Pender Harbour Resort and Marina rents motorboats in Pender Harbour and you can also fish off the resort's pier. They also provide accommodation services as well!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://sunshinecoastcanada.com/app/uploads/2020/02/DE08E658-8DE9-4D08-98DD-152D3021308B-1-1438x1024.jpeg",
                        resourcesURL: "https://www.penderharbourresort.com/",
                        pictureCourtesy: "Sunshine Coast Canada",
                    },
                    {
                        name: "John Henry's Resort and Marina",
                        description: "John Henry's is a full service marina & resort and includes a unique country General Store (open 7 days a week year round), a liquor store, fresh produce & groceries, an ATM, propane, bait, ice, gifts and fishing & boating supplies.",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_979,w_798,x_0,y_0/v1640648855/tenants/76b6a622-c4bd-4cfc-9508-2d7abd453917/e74efb44bf9b418d91039fd9e0b02301/John-Henry-s-photo.jpg",
                        resourcesURL: "http://www.johnhenrysresortmarina.com/",
                        pictureCourtesy: "John Henry's Resort and Marina",
                    },
                ]
            },
        ]
    },
    {
        id: 9,
        title: "Sailing and Boating",
        type: "Sport",
        area: "Egmont",
        outerDescription: "Egmont has one the best waters for sailing and boating. Some famous locations are the Agamemnon Channel, Jervis Inlet, Hotham Sound and the Royal Reaches. They all converge on the north end of the Skookumchuck Narrows.",
        externalPictureURL: "https://backeddy.ca/wp-content/uploads/2020/08/gallery-marina-08.jpg", //Used for rendering card picture

        advisoryTitle: "Beware of the strong currents in the Skookumchuck Narrows!",
        advisoryDescription: "Unless you are cruising in a very large vessel, do not attempt to anchor in the Skookumchuck Narrows off Egmont. Current speeds can exceed 16 knots (30 km/h or 18 mph)",
        advisoryURL: null,
        subActivities: [
            {
                title: "Motorboat Rentals",
                description: "Looking to shred some tides? Many resorts around Egmont offer boat rentals at a reasonable price!",
                externalURL: "null",
                locations: [
                    {
                        name: "Egmont Adventure Centre",
                        description: "The Egmont Adventure Centre is run by the West Coast Wilderness Lodge and offers Lunch & Play packages that include boat tours to the Skookumchuck Rapids and the Chatterbox Falls in Princess Louisa Inlet. Rent a jet ski or take a kayaking tour with a lunch stop. There's so much to explore in the Egmont area!",
                        area: "Egmont",
                        price: "May Vary (depending on activity)",
                        difficulty: null,
                        pictureURL: "https://fh-sites.imgix.net/sites/3661/2020/01/23022053/ChatterboxFalls-170626-54.jpg?auto=compress%2Cformat&w=400&fit=max&q=40&sharp=10&",
                        resourcesURL: "https://www.egmontadventurecentre.com/",
                        pictureCourtesy: "Egmont Adventure Centre"
                    },
                    {
                        name: "Bathgate Resort & Marina",
                        description: "Bathgate Resort & Marina rents motorboats in Egmont. The Resort's general store offers fishing gear and bait. There is also a fuel dock, washrooms, showers and a laundromat.",
                        area: "Egmont",
                        price: "May Vary (depending on activity)",
                        difficulty: null,
                        pictureURL: "https://bathgate.com/home/wp-content/uploads/2016/10/marina-slider.jpg",
                        resourcesURL: "https://bathgate.com/marina/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Bathgate Resort & Marina"
                    },
                    {
                        name: "Malibu Yacht Charters",
                        description: "Based in the village of Egmont, charter a yacht to any popular nearby destinations, including Desolation Sound, Nelson Island, Sechelt Inlet, and more. For more information, contact malibuyachts@uniserve.com (by email)",
                        area: "Egmont",
                        price: "Unknown",
                        difficulty: null,
                        pictureURL: null,
                        resourcesURL: "http://business.penderharbour.ca/penderharbourdirectory/Details/malibu-yacht-charters-476427",
                        pictureCourtesy: null,
                    },
                ]
            }, 
            {
                title: "Moorage Spots and Accommodation",
                description: "You can find moorage areas around Egmont, usually in Resorts and Marinas.",
                externalURL: "null",
                locations: [
                    {
                        name: "Egmont Harbour Authority",
                        description: "The Egmont Harbour Authority runs the government dock with power and water available.",
                        area: "Egmont",
                        price: "Unknown",
                        difficulty: null,
                        pictureURL: "https://img.marinas.com/v2/0ff5d17c41af8c5d251203bd494eb59cb9cebf4889abf404b8f2d32e75beee5b.jpg",
                        resourcesURL: "https://marinas.com/view/marina/x1cxdl_Egmont_Harbour_Authority_Egmont_BC_Canada#&gid=1&pid=1", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "www.marinas.com"
                    },
                    {
                        name: "Bathgate Resort & Marina",
                        description: "Bathgate Resort & Marina rents motorboats in Egmont. The Resort's general store offers fishing gear and bait. There is also a fuel dock, washrooms, showers and a laundromat.",
                        area: "Egmont",
                        price: "may vary (depending on vessel size and ft)",
                        difficulty: null,
                        pictureURL: "https://bathgate.com/home/wp-content/uploads/2016/10/marina-slider.jpg",
                        resourcesURL: "https://bathgate.com/activities/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Bathgate Resort & Marina"
                    },
                    {
                        name: "Backeddy Resort & Marina",
                        description: "With over 300 feet of transient moorage space, fuel, water and supplies, our marina is a perfect place to stay or provision before exploring our local waters on the Sunshine Coast. The Backeddy dock crew is on standby to assist you and can be contacted on VHF Channel 66A. Reservations are recommended during the summer months",
                        area: "Egmont",
                        price: "may vary (depending on vessel size and ft)",
                        difficulty: null,
                        pictureURL: "https://backeddy.ca/wp-content/uploads/2020/08/header-marina.jpg",
                        resourcesURL: "https://backeddy.ca/marina/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Backeddy Resort & Marina"
                    },
                ]
            },
            {
                title: "Anchoring Spots",
                description: "There are good anchoring grounds pretty much anywhere in Pender Harbour. Below are a list of popular spots for anchoring your vessel.",
                externalURL: "null",
                locations: [
                    {
                        name: "Storm Bay",
                        description: "Storm Bay is found in the Sechelt Inlet of the Pacific Ocean, near the mouth of Narrows Inlet. It is accessible by boat or seaplane.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://kennethmcmillan.files.wordpress.com/2013/02/storm-bay-3.jpg",
                        resourcesURL: "http://ahoybc.com/showcase-directory/2719/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Kenneth Mcmillan Photography"
                    },
                    {
                        name: "Princess Louisa Inlet",
                        description: "Princess Louisa Inlet Marine Park opens up — renowned around the world for its beauty and protected waters. The air up at Princess Louisa is so moist with spray from the Falls that you will see trees covered with thick, emerald-like moss and ferns as you hike along the cedar boardwalks.",
                        area: "North of Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://www.wcwl.com/wp-content/uploads/2018/04/ChatterboxFalls-170626-60.jpg",
                        resourcesURL: "https://www.wcwl.com/things-to-do/princess-louisa-inlet/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "West Coast Wilderness Lodge"
                    },
                ],
            },
        ]
    },
    // Jet Skiing
    {
        id: 10,
        title: "Jet Skiing",
        type: "Sport",
        area: "Pender Harbour & Egmont",
        outerDescription: "Feeling for speed and shredding the waves? Pender Harbour and Egmont areas have plenty of accommodations that offer jet ski rentals!",
        externalPictureURL: "https://www.wcwl.com/wp-content/uploads/2018/04/BRI_5146-sml.jpg", //Used for rendering card picture

        advisoryTitle: null,
        advisoryDescription: null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Where to Rent Jet Skis?",
                description: "Below is a list of places to satisfy your cravings for speed and adrenaline.",
                externalURL: "null",
                locations: [
                    {
                        name: "Egmont Adventure Centre",
                        description: "The Egmont Adventure Centre is run by the West Coast Wilderness Lodge and offers Lunch & Play packages that include boat tours to the Skookumchuck Rapids and the Chatterbox Falls in Princess Louisa Inlet. Rent a jet ski or take a kayaking tour with a lunch stop. There's so much to explore in the Egmont area!",
                        area: "Egmont",
                        price: "From $135-up",
                        difficulty: null,
                        pictureURL: "https://fh-sites.imgix.net/sites/3661/2020/01/23022053/ChatterboxFalls-170626-54.jpg?auto=compress%2Cformat&w=400&fit=max&q=40&sharp=10&",
                        resourcesURL: "https://www.egmontadventurecentre.com/",
                        pictureCourtesy: "Egmont Adventure Centre"
                    },
                    {
                        name: "Westcoast Water Cowboys Rentals",
                        description: "Westcoast Water Cowboys Rentals rent jet skis in the Sunshine Coast. For more information, call 604-839-8097.",
                        area: "Madeira Park",
                        price: "Unknown",
                        difficulty: null,
                        pictureURL: "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_447,w_669,x_0,y_0/v1640552974/tenants/76b6a622-c4bd-4cfc-9508-2d7abd453917/a0d48395074f45339fc0234b268d529b/Watercowboys-photo.jpg",
                        resourcesURL: "http://business.penderharbour.ca/penderharbourdirectory/Details/westcoast-water-cowboys-rentals-1781871",
                        pictureCourtesy: null,
                    },
                    {
                        name: "Garden Bay RV Resort",
                        description: "At Garden Bay RV Resort, you can rent Kayaks, SUPs, Water Skiing equipment, as well as Jet Skis. For more information, contact info@gardenbayresort.com (by email).",
                        area: "Garden Bay",
                        price: "Unknown",
                        difficulty: null,
                        pictureURL: "https://gardenbayresort.com/images/wr-act-waterski.jpg",
                        resourcesURL: "https://gardenbayresort.com/area.html",
                        pictureCourtesy: "Garden Bay RV Resort",    
                    },
                ]
            }, 
        ]
    },
        // Live Music Venues & Festivals​
        {
            id: 11,
            title: "Live Music Venues & Festivals",
            type: "Entertainment",
            area: "Pender Harbour",
            outerDescription: "Looking for local vibes and entertainment? From free outdoor concerts to big dances, there are multiple venues offering live music!",
            externalPictureURL: "https://www.penderharbourbluesfestival.com/wp-content/uploads/2021/03/PHBLues-5.jpg", //Used for rendering card picture
    
            advisoryTitle: "Looking for More Live Venues and Upcoming Events?",
            advisoryDescription: "Please check our Facebook page to keep updated!",
            advisoryURL: "https://www.facebook.com/penderharbouranddistrict/",
            subActivities: [
                {
                    title: "Places and Events with Live Music",
                    description: "Experience some local classical, blues music from the Chamber of Music. There are also various music festivals hosted at various dates such as weekends and holidays, so be sure to keep updated on our Facebook page.",
                    externalURL: "null",
                    locations: [
                        {
                            name: "Pender Harbour: Chamber of Music",
                            description: "Classical music at its best, don't miss the Chamber Music Festival and the concert series. The monthly Coffee House at the School of Music showcases local performing artists, complete with stage, lights and sound.  The proceeds, after expenses, is split among the performers. Coffee and sweets are sold.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "https://penderharbourmusic.ca/wp-content/uploads/2017/03/chamber4.jpg",
                            resourcesURL: "https://penderharbourmusic.ca/chamber-music",
                            pictureCourtesy: "Pender Harbour Chamber of Music"
                        },
                        {
                            name: "Pender Harbour Blues Festival",
                            description: "Produced by the Pender Harbour Blues Society, is a weekend long popular music festival that promotes BC's blues in all its forms.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "https://www.penderharbourbluesfestival.com/wp-content/uploads/2021/03/PHBLues-5.jpg",
                            resourcesURL: "https://www.penderharbourbluesfestival.com/",
                            pictureCourtesy: null,
                        },
                        {
                            name: "Pender Harbour Days",
                            description: "Another fun filled weekend of a celebration of our heritage featuring historical boats, land-based heritage displays,  a boat parade, sailing competitions, and more combined with arts, live music, kids activities, and entertainment.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/img-0015-2_orig.jpg",
                            resourcesURL: "http://www.penderharbour.ca/pender-harbour-days.html",
                            pictureCourtesy: null,
                        },
                        {
                            name: "Pender Harbour Community Hall",
                            description: "Pender Harbour Community Hall holds concerts and dances, as well as many other events including free Thanksgiving and Christmas dinner celebrations courtesy of the Rotary Club of Pender Harbour.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: null,
                            resourcesURL: "http://www.penderharbourcommunity.club/community-hall.html",
                            pictureCourtesy: null,    
                        },
                    ]
                }, 
                {
                    title: "Enjoy Live Music in Our Local Eateries!",
                    description: "Want to have a good time and enjoy food at the same time? Spice things up with live music offered at venues listed below.",
                    externalURL: "null",
                    locations: [
                        {
                            name: "Badabing (Triple B's) Burgers",
                            description: " Badabing Burgers serves the best burgers as well as fish and chips. Look for the funky food trailer located among the picnic tables in the garden across from the IGA. On Saturday afternoons, BBB hosts free live music in the garden.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "https://scontent.fyvr4-1.fna.fbcdn.net/v/t39.30808-6/279909404_4959668004117057_5233530912308192378_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Kbod-EkSojEAX_c5RE6&_nc_ht=scontent.fyvr4-1.fna&oh=00_AT8gdG8PST1Uh9tc8T0K1TpwaDqnJlNB_5KbDFckOau1JQ&oe=6291564C",
                            resourcesURL: "https://www.facebook.com/pages/Triple-Bs-Burger-Shack/536192643228987",
                            pictureCourtesy: "Badabing (Triple B's) Burgers",
                        },
                        {
                            name: "Pender Harbour Golf Course Clubhouse",
                            description: "Pender Harbour Golf Course Clubhouse serves delicious food and holds many fun events, including the popular Sunday afternoon jam sessions.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "http://www.pendergolf.ca/uploads/1/0/1/6/101623494/c97b1631ed7df93012c7db34f74ca311_orig.jpg",
                            resourcesURL: "http://www.pendergolf.ca/",
                            pictureCourtesy: "Pender Harbour Golf Course Clubhouse",
                        },
                        {
                            name: "Pender Harbour Hotel",
                            description: "Pender Harbour Hotel has a popular waterfront pub and restaurant on a hill with stunning views of the harbour called the Grasshopper. Great pub + Indian food! Check their website for live entertainment nights.",
                            area: "Madeira Park",
                            price: null,
                            difficulty: null,
                            pictureURL: "https://images.squarespace-cdn.com/content/v1/624628fc3bc7f75bcdc2c34e/1648917815448-HJATI8LTR8BSRZOBGUPM/DSC_8795.jpg?format=1500w",
                            resourcesURL: "https://www.penderharbourhotel.com/",
                            pictureCourtesy: "Pender Harbour Hotel",    
                        },
                    ]
                }, 
            ]
        },
        {
            id: 12,
            title: "Tune In and Jam to Local Music",
            type: "Entertainment",
            area: "Egmont",
            outerDescription: "Looking for local vibes and entertainment? From free outdoor concerts to big dances, there are multiple venues offering live music!",
            externalPictureURL: "http://www.penderharbour.ca/uploads/2/4/9/3/24939859/published/joe-stanton.jpg?1578953943", //Used for rendering card picture
    
            advisoryTitle: "Looking for More Live Venues and Upcoming Events?",
            advisoryDescription: "Please check our Facebook page to keep updated!",
            advisoryURL: "https://www.facebook.com/penderharbouranddistrict/",
            subActivities: [
                {
                    title: "Enjoy Live Music in Our Local Eateries!",
                    description: "Want to have a good time and enjoy food at the same time? Spice things up with live music offered at venues listed below.",
                    externalURL: "null",
                    locations: [
                        {
                            name: "Egmont Community Hall",
                            description: "The Egmont Community Hall has a busy calendar that includes concerts and dances, as well as many other social activities including Thanksgiving and Christmas dinner celebrations. Don't miss Egmont Days!",
                            area: "Egmont",
                            price: null,
                            difficulty: null,
                            pictureURL: null,
                            resourcesURL: "https://egmontcommunityclub.webs.com/",
                            pictureCourtesy: null,
                        },
                        {
                            name: "Backeddy Resort & Marina",
                            description: "Backeddy Marina and Resort has a popular Pub patio overlooking the Skookumchuck Narrows. Check out their Pub Events and Live Music Calendar.",
                            area: "Egmont",
                            price: null,
                            difficulty: null,
                            pictureURL: "https://backeddy.ca/wp-content/uploads/2020/08/header-pub-events.jpg",
                            resourcesURL: "https://backeddy.ca/", //Dont show URL link in text (it's not profressional)
                            pictureCourtesy: "Backeddy Resort & Marina"
                        },
                    ]
                }, 
            ]
        },
    // Kayaking, Canoeing, Paddleboarding
    {
        id: 13,
        title: "Kayaking, Canoeing, Paddle Boarding",
        type: "Entertainment",
        area: "Egmont",
        outerDescription: "Half way between Pender Harbour and Egmont is beautiful Ruby Lake, where you can rent kayaks and canoes at the Ruby Lake Resort and go explore the islets and coves. ",
        externalPictureURL: "https://backeddy.ca/wp-content/uploads/2020/04/gallery-skook-hike00.jpg", //Used for rendering card picture

        advisoryTitle: null,
        advisoryDescription:  null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Where to Rent Kayaks, Canoes, and Paddleboards",
                description: "Whether your starting your first lesson, or challenging yourself, everything starts with an equipment rental! Below are some of the places to rent Kayaks, Canoes, and Paddleboards around Egmont.",
                externalURL: "null",
                locations: [
                    {
                        name: "Egmont Adventure Centre",
                        description: "The Egmont Adventure Centre is run by the West Coast Wilderness Lodge and offers Lunch & Play packages that include boat tours to the Skookumchuck Rapids and the Chatterbox Falls in Princess Louisa Inlet. Rent a jet ski or take a kayaking tour with a lunch stop. There's so much to explore in the Egmont area!",
                        area: "Egmont",
                        price: "$20-$70 (depending on time)",
                        difficulty: null,
                        pictureURL: "https://fh-sites.imgix.net/sites/3661/2020/01/14010815/SDP-140701-canada-egmont-44-LR-1200x.jpg?",
                        resourcesURL: "https://www.egmontadventurecentre.com/kayaking/rentals/",
                        pictureCourtesy: "Egmont Adventure Centre"
                    },
                    {
                        name: "Backeddy Resort & Marina",
                        description: "Fun and easy to paddle, canoes are a good choice for those looking to get out on the water for a leisurely paddle with a friend. Start your morning with a peaceful paddle on the ocean leaving right from the Backeddy dock. For Kayaks, Single and double hull kayaks are available for rent by the hour or half-day.",
                        area: "Egmont",
                        price: "$65-$90 (depending on time)",
                        difficulty: null,
                        pictureURL: "https://backeddy.ca/wp-content/uploads/2020/04/gallery-rentals00.jpg",
                        resourcesURL: "https://backeddy.ca/rentals/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: "Backeddy Resort & Marina"
                    },
                    {
                        name: "West Coast Wilderness Lodge",
                        description: "The West Coast Wilderness Lodge offers great kayak and boat tour packages that includes lunch in their restaurant Inlets with amazing ocean views.",
                        area: "Egmont",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://www.wcwl.com/wp-content/uploads/2018/04/SDP-140624-canada-egmont-48-LR-1200x.jpg",
                        resourcesURL: "https://www.wcwl.com/packages/",
                        pictureCourtesy: "West Coast Wilderness Lodge"
                    },
                ]
            }, 
        ]
    },
    {
        id: 14,
        title: "Kayaking, Canoeing, Paddle Boarding",
        type: "Entertainment",
        area: "Pender Harbour",
        outerDescription: "Half way between Pender Harbour and Egmont is beautiful Ruby Lake, where you can rent kayaks and canoes at the Ruby Lake Resort and go explore the islets and coves. ",
        externalPictureURL: "https://s3.wasabisys.com/default-01/default/PenderHarbourKayakOptimizedcopy.jpg", //Used for rendering card picture

        advisoryTitle: null,
        advisoryDescription:  null,
        advisoryURL: null,
        subActivities: [
            {
                title: "Where to Rent Kayaks, Canoes, and Paddleboards",
                description: "Whether your starting your first lessons, or challenging yourself, everything starts with an equipment rental! Below are some of the places to rent Kayaks, Canoes, and Paddleboards around Pender Harbour.",
                externalURL: "null",
                locations: [
                    {
                        name: "Alpha Adventures",
                        description: "At the Madeira Park government dock, rent a kayak or take a kayak tour with Alpha Adventures.",
                        area: "Sechelt",
                        price: "$84-$150",
                        difficulty: null,
                        pictureURL: "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/282038558_726400725060800_6202939549830349122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rx1qm3Grp1wAX_d5Sa8&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AT-JJvO4-pdQ4mUxgIBeDGa9Wn9hSe6hUv6ODIhnbp9PVw&oe=628D15F3",
                        resourcesURL: "https://www.outdooradventurestore.ca/",
                        pictureCourtesy: "Alpha Adventures"
                    },
                    {
                        name: "Painted Boat Resort",
                        description: "Fun and easy to paddle, canoes are a good choice for those looking to get out on the water for a leisurely paddle with a friend. Start your morning with a peaceful paddle on the ocean leaving right from the Backeddy dock. For Kayaks, Single and double hull kayaks are available for rent by the hour or half-day.",
                        area: "Madeira Park",
                        price: "$65-$90 (depending on time)",
                        difficulty: null,
                        pictureURL: null,
                        resourcesURL: "http://www.paintedboat.com/", //Dont show URL link in text (it's not profressional)
                        pictureCourtesy: null,
                    },
                    {
                        name: "Sunshine Coast Resort Hotel & Marina",
                        description: "Sunshine Coast Resort & Marina offers Kayak rentals, alongside with boat charters and tours!",
                        area: "Madeira Park",
                        price: null,
                        price: "$45-$75/full day",
                        difficulty: null,
                        pictureURL: null,
                        resourcesURL: "https://sunshinecoast-resort.com/rates/tours-and-rentals/#kayak",
                        pictureCourtesy: null,
                    },
                    {
                        name: "Pender Harbour Resort and Marina",
                        description: "Pender Harbour Resort and Marina rents kayaks, canoes, and motorboats in Pender Harbour. They also provide accommodation services as well!",
                        area: "Garden Bay",
                        price: null,
                        difficulty: null,
                        pictureURL: "https://s3.wasabisys.com/default-01/default/PenderHarbourKayakOptimizedcopy.jpg",
                        resourcesURL: "https://www.penderharbourresort.com/",
                        pictureCourtesy: "Pender Harbour Resort and Marina",
                    },
                ]
            }, 
        ]
    },

];

//****************|| Controller Functions ||****************

// 1) Get All Activities (Used initially on load of ActivityMain.vue)
export const getAllActivities = () => {
    return activities;
}

// 2) Get Activities by Area
export const getActivityByArea = (inputArea) => {
    var queryResult = [];

    //Handling "Pender Harbour & Egmont"
    if(inputArea === "Pender Harbour & Egmont") {
        activities.forEach(activity => {
            if(activity.area === "Pender Harbour") {
                queryResult.push(activity);
            }
        });
        activities.forEach(activity => {
            if(activity.area === "Egmont") {
                queryResult.push(activity);
            }
        });
    }

    //Works for either "Pender Harbour" or "Egmont" individual case
    activities.forEach(activity => {
        if(activity.area === inputArea) {
            queryResult.push(activity);
        }
    });

    return queryResult;
}

// 3) Get Activities by Activities
export const getActivityByTypes = (inputArea, inputActivities) => {
    var queryResult = [];
    var filteredResult = [];
    
    //a) First get the activity by area
    queryResult = getActivityByArea(inputArea);

    //b) Filter by activity (array.filter?)
    inputActivities.forEach(type => {
        queryResult.forEach(activity => {
            if(activity.type === type) {
                filteredResult.push(activity);
            }
        });
    });

    //c) Return the filteredResult
    return filteredResult;
}

export const getActivityByID = (activityID) => {
   //Avoid using for-each loop because it will cause a compiling error for using an abrupt "break statement"
   //Using for-each loop without a break statement can impact performance.
   //SOLUTION: Use a for-of loop instead...
    for (const activity of activities) {
        if(activity.id === activityID) {
            return activity;
        }
    }
}