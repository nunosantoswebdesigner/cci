const express = require("express");
const serverless = require("serverless-http");
const cors =require("cors");

const origin = process.env.NODE_ENV !== "production"
 ? "http://localhost:3000" : "https://cciapp.shareit.dev/"

const app = express();
app.use(cors({ origin }))

const router = express.Router();

router.get("/global", (req, res) => {
  res.json({
    "Translates" : {
        "campsitesTotal" : 3197,
        "countriesTotal" : 40,
        "currentLanguage" : "EN",
        "loginText" : "Welcome Back!",
        "splashTextOne" : "Get discounts in",
        "splashTextTwo" : "campsites in",
        "splashTextThree" : "countries",
        "forgotPassWordText" : "Forgot password?",
        "haveAccountText": "Don´t have an account?",
        "signUpText": "Sign Up",
        "reciveNewsText": "Receive news from cci",
        "registerNowText": "Register Now"
    },
    "languagesList" : [
        {
            "value": "399",
            "label": "English"
        },
        {
            "value": "400",
            "label": "Fraçais"
        },
        {
            "value": "401",
            "label": "Deutsch"
        },
        {
            "value": "402",
            "label": "Italian"
        },
        {
            "value": "403",
            "label": "Español"
        },
        {
            "value": "404",
            "label": "Nederla"
        },
        {
            "value": "405",
            "label": "Svenska"
        }
    ]
  });
});


router.get("/signup", (req, res) => {
  res.json({
    "clubsList" : [
            {
                "label" : "0101 - Österreichischer Camping Club",
                "value" : "9892"
            },
            {
                "label" : "0102 - Camping und Caravaning Club Austria",
                "value" : "9880"
            },
            {
                "label" : "0201 - Vlaamse Kampeer-en Caravanning Federatie",
                "value" : "9878"
            },
            {
                "label" : "0202 - Federation Francophone des Clubs de Camping et de Caravaning de Belgique",
                "value" : "9879"
            },
            {
                "label" : "0203 - Touring Club Royal de Belgique ASBL",
                "value" : "9834"
            },
            {
                "label" : "0204 - Royal Automobile Club de Belgique",
                "value" : "9891"
            },
            {
                "label" : "0205 - Royal Camping &amp;#038; Caravanning Club de Belgique (R3CB)",
                "value" : "9825"
            },
            {
                "label" : "0206 - Association des Campeurs et Caravaniers Athois et de Wallonie (ACCAW)",
                "value" : "9824"
            },
            {
                "label" : "0301 - Bulgarian Association of Camping and Caravanning",
                "value" : "9877"
            },
            {
                "label" : "0401 - Fédération Quebecoise de Camping et de Caravaning",
                "value" : "9876"
            },
            {
                "label" : "0501 - Udruga Kampista Hrvatshe",
                "value" : "9833"
            },
            {
                "label" : "0701 - Klubi Eesti Karavan",
                "value" : "9826"
            },
            {
                "label" : "0901 - SF-Caravan",
                "value" : "9889"
            },
            {
                "label" : "0902 - Autocaravan Finland",
                "value" : "9874"
            },
            {
                "label" : "1001 - Fédération Française de Camping et de Caravaning",
                "value" : "9888"
            },
            {
                "label" : "1101 - Deutscher Camping Club",
                "value" : "9873"
            },
            {
                "label" : "1102 - Automobilclub von Deutschland e.V.",
                "value" : "9886"
            },
            {
                "label" : "1201 - The Camping and Caravanning Club",
                "value" : "9887"
            },
            {
                "label" : "1202 - The Motor Caravanners&amp;#8217; Club",
                "value" : "9872"
            },
            {
                "label" : "1203 - Hymer Club International",
                "value" : "9871"
            },
            {
                "label" : "1301 - Magyar Camping Caravanning Club",
                "value" : "9870"
            },
            {
                "label" : "1302 - Magyar Kemping Egyesuletek Orszagos Szovetsege (MAKEOS)",
                "value" : "9869"
            },
            {
                "label" : "1401 - Irish Federation of Camping, Caravanning and Motor Caravanning (ICCC)",
                "value" : "9868"
            },
            {
                "label" : "1501 - The Israel Camping Club",
                "value" : "9867"
            },
            {
                "label" : "1601 - Confederazione Italiana Campeggiatori",
                "value" : "9885"
            },
            {
                "label" : "1602 - A.C.T. Italia Federazione",
                "value" : "9866"
            },
            {
                "label" : "1603 - Camper Club Trentino",
                "value" : "9865"
            },
            {
                "label" : "1604 - Touring Club Italiano",
                "value" : "9884"
            },
            {
                "label" : "1605 - Club Camperisti Sardi",
                "value" : "9819"
            },
            {
                "label" : "1606 - Unione Club Amici",
                "value" : "9818"
            },
            {
                "label" : "1701 - Japan Autocamping Federation",
                "value" : "9864"
            },
            {
                "label" :"1801 - Federation Luxembourgeoise des Campeurs, Caravaniers et Camping-Caristes ASBL",
                "value" : "9831"
            },
            {
                "label" : "1802 - Automobile Club du Luxembourg",
                "value" : "9835"
            },
            {
                "label" : "1901 - Autocaravan Touring Club Malta",
                "value" : "9863"
            },
            {
                "label" : "2001 - Nederlandse Toeristen Kampeer Club (NTKC)",
                "value" : "9861"
            },
            {
                "label" : "2002 - Nederlandse Caravan Club",
                "value" : "9862"
            },
            {
                "label" : "2003 - Rally Club Nederland",
                "value" : "9859"
            },
            {
                "label" : "2004 - Nederlandse Kampeerauto Club (NKC)",
                "value" : "9860"
            },
            {
                "label" : "2005 - Kip Caravan",
                "value" : "9817"
            },
            {
                "label" : "2101 - Norsk Bobil og Caravan Club",
                "value" : "9858"
            },
            {
                "label" : "2102 - Kongelig Norsk Automobil Klub",
                "value" : "9857"
            },
            {
                "label" : "2103 - Norges Automobil-Forbund (NAF)",
                "value" : "9830"
            },
            {
                "label" : "2104 - Norsk Bobilforening",
                "value" : "9856"
            },
            {
                "label" : "2201 - Polska Federacja Campingu i Caravaningu",
                "value" : "9855"
            },
            {
                "label" : "2202 - Polska Zwiazek Motorowy",
                "value" : "9883"
            },
            {
                "label" : "2301 - Federação de Campismo e Montanhismo de Portugal (F.C.M.P.)",
                "value" : "9854"
            },
            {
                "label" : "2302 - Automóvel Club de Portugal",
                "value" : "9882"
            },
            {
                "label" : "2303 - CDP - Caravanismo de Portugal",
                "value" : "9816"
            },
            {
                "label" : "2401 - Asociatia Club RV-RO",
                "value" : "9837"
            },
            {
                "label" : "2501 - The Russian Club of Caravanners",
                "value" : "9853"
            },
            {
                "label" : "2502 - The Caravaners League",
                "value" : "9852"
            },
            {
                "label" : "2702 - Auto-Moto Association of Serbia (AMSS)",
                "value" : "9823"
            },
            {
                "label" : "2801 - Slovenská Federácia Campingu a Caravaningu",
                "value" : "9849"
            },
            {
                "label" : "2802 - Slovenská Asociácia Campingu a Caravaningu",
                "value" : "9850"
            },
            {
                "label" : "2901 - Caravan Club of Slovenia",
                "value" : "9848"
            },
            {
                "label" : "3101 - Federacion Espanola de Clubes Campistas",
                "value" : "9845"
            },
            {
                "label" : "3102 - Unio Caravanista de Catalunya",
                "value" : "9844"
            },
            {
                "label" : "3103 - Federacio Catalana de Clubs Campistes",
                "value" : "9843"
            },
            {
                "label" : "3104 - Federacion Espanola de Asociaciones Autocaravanistas (F.E.A.A.)",
                "value" : "9846"
            },
            {
                "label" : "3201 - Caravan Club of Sweden",
                "value" : "9842"
            },
            {
                "label" : "3301 - Schweizerischer Camping- und Caravanning Verband (SCCV)",
                "value" : "9836"
            },
            {
                "label" : "3302 - Touring Club Suisse",
                "value" : "9881"
            },
            {
                "label" : "3303 - Automobil Club der Schweiz (ACS)",
                "value" : "9829"
            },
            {
                "label" : "3401 - The Camping Association of the Republic of China",
                "value" : "9841"
            },
            {
                "label" : "3402 - Formosa Camping and Caravanning Club",
                "value" : "9840"
            },
            {
                "label" : "3501 - Turkiye Kamp ve Karavan Dernegi",
                "value" : "9839"
            },
            {
                "label" : "3502 - National Camping and Caravanning Federation (UKKF)",
                "value" : "9838"
            },
            {
                "label" : "3701 - Ukrainian Federation of Camping, Caravaning and Autotourism",
                "value" : "9822"
            },
            {
                "label" : "3801 - Australian Automobile Association (AAA)",
                "value" : "9828"
            },
            {
                "label" : "3901 - The Icelandic Automobile Association (FIB)",
                "value" : "9827"
            },
            {
                "label" : "4001 - The Association of Lithuanian Automobilistes",
                "value" : "9821"
            },
            {
                "label" : "4002 - Vs Kemperiu Klubas Lithuania",
                "value" : "9815"
            },
            {
                "label" :"5021 - Associação Share it",
                "value" : "41031"
            }
    ],
    "countriesList" : [
        {
            "label": "Afghanistan",
            "value":"416"
        },
        {
            "label": "Albania",
            "value":"417"
        },
        {
            "label": "Algeria",
            "value":"418"
        },
        {
            "label": "Argentina",
            "value":"419"
        },
        {
            "label": "Armenia",
            "value":"420"
        },
        {
            "label": "Australia",
            "value":"421"
        },
        {
            "label": "Austria",
            "value":"422"
        },
        {
            "label": "Azerbaijan",
            "value":"423"
        },
        {
            "label": "Bahrain",
            "value":"424"
        },
        {
            "label": "Bangladesh",
            "value":"425"
        },
        {
            "label": "Belarus",
            "value":"426"
        },
        {
            "label": "Belgium",
            "value":"427"
        },
        {
            "label": "Belize",
            "value":"428"
        },
        {
            "label": "Bhutan",
            "value":"429"
        },
        {
            "label": "Bolivia",
            "value":"430"
        },
        {
            "label": "Bosnia and Herzegovina",
            "value":"431"
        },
        {
            "label": "Botswana",
            "value":"432"
        },
        {
            "label": "Brazil",
            "value":"433"
        },
        {
            "label": "Brunei",
            "value":"434"
        },
        {
            "label": "Bulgaria",
            "value":"435"
        },
        {
            "label": "Cambodia",
            "value":"436"
        },
        {
            "label": "Cameroon",
            "value":"437"
        },
        {
            "label": "Canada",
            "value":"438"
        },
        {
            "label": "Chile",
            "value":"439"
        },
        {
            "label": "China",
            "value":"440"
        },
        {
            "label": "Colombia",
            "value":"441"
        },
        {
            "label": "Congo (DRC)",
            "value":"442"
        },
        {
            "label": "Costa Rica",
            "value":"443"
        },
        {
            "label": "Côte d’Ivoire",
            "value":"444"
        },
        {
            "label": "Croatia",
            "value":"445"
        },
        {
            "label": "Cuba",
            "value":"446"
        },
        {
            "label": "Czech Republic",
            "value":"447"
        },
        {
            "label": "Denmark",
            "value":"448"
        },
        {
            "label": "Djibouti",
            "value":"449"
        },
        {
            "label": "Dominican Republic",
            "value":"450"
        },
        {
            "label": "Ecuador",
            "value":"451"
        },
        {
            "label": "Egypt",
            "value":"452"
        },
        {
            "label": "El Salvador",
            "value":"453"
        },
        {
            "label": "Eritrea",
            "value":"454"
        },
        {
            "label": "Estonia",
            "value":"455"
        },
        {
            "label": "Ethiopia",
            "value":"456"
        },
        {
            "label": "Faroe Islands",
            "value":"457"
        },
        {
            "label": "Finland",
            "value":"458"
        },
        {
            "label": "France",
            "value":"459"
        },
        {
            "label": "Georgia",
            "value":"460"
        },
        {
            "label": "Germany",
            "value":"461"
        },
        {
            "label": "Greece",
            "value":"462"
        },
        {
            "label": "Greenland",
            "value":"463"
        },
        {
            "label": "Guatemala",
            "value":"464"
        },
        {
            "label": "Haiti",
            "value":"465"
        },
        {
            "label": "Honduras",
            "value":"466"
        },
        {
            "label": "Hong Kong SAR",
            "value":"467"
        },
        {
            "label": "Hungary",
            "value":"468"
        },
        {
            "label": "Iceland",
            "value":"469"
        },
        {
            "label": "India",
            "value":"470"
        },
        {
            "label": "Indonesia",
            "value":"471"
        },
        {
            "label": "Iran",
            "value":"472"
        },
        {
            "label": "Iraq",
            "value":"473"
        },
        {
            "label": "Ireland",
            "value":"474"
        },
        {
            "label": "Israel",
            "value":"475"
        },
        {
            "label": "Italy",
            "value":"476"
        },
        {
            "label": "Jamaica",
            "value":"477"
        },
        {
            "label": "Japan",
            "value":"478"
        },
        {
            "label": "Jordan",
            "value":"479"
        },
        {
            "label": "Kazakhstan",
            "value":"480"
        },
        {
            "label": "Kenya",
            "value":"481"
        },
        {
            "label": "Kuwait",
            "value":"482"
        },
        {
            "label": "Kyrgyzstan",
            "value":"483"
        },
        {
            "label": "Laos",
            "value":"484"
        },
        {
            "label": "Latvia",
            "value":"485"
        },
        {
            "label": "Lebanon",
            "value":"486"
        },
        {
            "label": "Libya",
            "value":"487"
        },
        {
            "label": "Liechtenstein",
            "value":"488"
        },
        {
            "label": "Lithuania",
            "value":"489"
        },
        {
            "label": "Luxembourg",
            "value":"490"
        },
        {
            "label": "Macao SAR",
            "value":"491"
        },
        {
            "label": "Macedonia",
            "value":"492"
        },
        {
            "label": "Malaysia",
            "value":"493"
        },
        {
            "label": "Maldives",
            "value":"494"
        },
        {
            "label": "Mali",
            "value":"495"
        },
        {
            "label": "Malta",
            "value":"496"
        },
        {
            "label": "Mexico",
            "value":"497"
        },
        {
            "label": "Moldova",
            "value":"498"
        },
        {
            "label": "Monaco",
            "value":"499"
        },
        {
            "label": "Mongolia",
            "value":"500"
        },
        {
            "label": "Montenegro",
            "value":"501"
        },
        {
            "label": "Morocco",
            "value":"502"
        },
        {
            "label": "Myanmar",
            "value":"503"
        },
        {
            "label": "Nepal",
            "value":"504"
        },
        {
            "label": "Netherlands",
            "value":"505"
        },
        {
            "label": "New Zealand",
            "value":"506"
        },
        {
            "label": "Nicaragua",
            "value":"507"
        },
        {
            "label": "Nigeria",
            "value":"508"
        },
        {
            "label": "Norway",
            "value":"509"
        },
        {
            "label": "Oman",
            "value":"510"
        },
        {
            "label": "Pakistan",
            "value":"511"
        },
        {
            "label": "Panama",
            "value":"512"
        },
        {
            "label": "Paraguay",
            "value":"513"
        },
        {
            "label": "Peru",
            "value":"514"
        },
        {
            "label": "Philippines",
            "value":"515"
        },
        {
            "label": "Poland",
            "value":"516"
        },
        {
            "label": "Portugal",
            "value":"517"
        },
        {
            "label": "Puerto Rico",
            "value":"518"
        },
        {
            "label": "Qatar",
            "value":"519"
        },
        {
            "label": "Réunion",
            "value":"520"
        },
        {
            "label": "Romania",
            "value":"521"
        },
        {
            "label": "Russia",
            "value":"522"
        },
        {
            "label": "Rwanda",
            "value":"523"
        },
        {
            "label": "Saudi Arabia",
            "value":"524"
        },
        {
            "label": "Senegal",
            "value":"525"
        },
        {
            "label": "Serbia",
            "value":"526"
        },
        {
            "label": "Singapore",
            "value":"527"
        },
        {
            "label": "Slovakia",
            "value":"528"
        },
        {
            "label": "Slovenia",
            "value":"529"
        },
        {
            "label": "Somalia",
            "value":"530"
        },
        {
            "label": "South Africa",
            "value":"531"
        },
        {
            "label": "South Korea",
            "value":"532"
        },
        {
            "label": "Spain",
            "value":"533"
        },
        {
            "label": "Sri Lanka",
            "value":"534"
        },
        {
            "label": "Sweden",
            "value":"535"
        },
        {
            "label": "Switzerland",
            "value":"536"
        },
        {
            "label": "Syria",
            "value":"537"
        },
        {
            "label": "Taiwan",
            "value":"538"
        },
        {
            "label": "Tajikistan",
            "value":"539"
        },
        {
            "label": "Thailand",
            "value":"540"
        },
        {
            "label": "Trinidad and Tobago",
            "value":"541"
        },
        {
            "label": "Tunisia",
            "value":"542"
        },
        {
            "label": "Turkey",
            "value":"543"
        },
        {
            "label": "Turkmenistan",
            "value":"544"
        },
        {
            "label": "Ukraine",
            "value":"545"
        },
        {
            "label": "United Arab Emirates",
            "value":"546"
        },
        {
            "label": "United Kingdom",
            "value":"547"
        },
        {
            "label": "United States",
            "value":"548"
        },
        {
            "label": "Uruguay",
            "value":"549"
        },
        {
            "label": "Uzbekistan",
            "value":"550"
        },
        {
            "label": "Venezuela",
            "value":"551"
        },
        {
            "label": "Vietnam",
            "value":"552"
        },
        {
            "label": "Yemen",
            "value":"553"
        },
        {
            "label": "Zimbabwe",
            "value":"554"
        }
    ]
});
});

router.get("/users", (req, res) => {
  res.json({
    "isUser" : true,
    "name" : "Nuno Santos",
    "email" : "nuno.s@sahreit.dev",
    "cardNumber" : "123456"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
