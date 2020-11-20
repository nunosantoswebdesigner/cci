const express = require("express");
const morgan = require("morgan");
const serverless = require("serverless-http");
const router = express.Router();
const app = express();
const cors =require("cors");
app.use(cors())
app.use(morgan('dev'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// GET
router.get("/global", (req, res) => {
    let lang = req.query.lang
    if (lang ===  'EN') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Get discounts in",
                    "Campsites_in" : "campsites in",
                    "Countries" : "countries"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Please rotate your device to portrait",
                    "App_support_portrait" : "This app support portrait mode only",
                    "Please_open_mobile_device" : "Please open on a mobile device",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Page not fond",
                    "Go_back" : "Go Back"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Recovery Password",
                    "Check_your_email_recover" : "To recover your password please check your email",
                    "Check_your_email_verification" : "Please check your email box to verification your account",
                    "Invalid_email" : "Invalid Email!",
                    "Invalid_fields" : "Invalid Fields",
                    "Please_try_again" : "Please try again!",
                    "Create_an_account" : "Please create a new account",
                    "Account_created_with_success" : "Account Created with Success",
                    "Created_account_fail" : "Failed to Created an Account"
                },
                "Login" : {
                    "Welcome_back": "Welcome back!",
                    "Email" : "Email",
                    "Password" : "Password",
                    "Language" : "Language",
                    "Select" : "Select",
                    "Login" : "Login",
                    "Forgot_password" : "Forgot password?",
                    "Dont_have_an_account" : "Don´t have an account?",
                    "Register_now" : "Register now"
                },
                "SignUp" : {
                    "Sign_up" : "Sign Up",
                    "Name" : "Name",
                    "Email" : "Email",
                    "Password" : "Password",
                    "Confirm_password" : "Confirm password",
                    "Password_question" : "Password Question",
                    "Password_answwer" : "Password Anwser",
                    "Next" : "Next",
                    "Club" : "Club",
                    "Card_number" : "Card Number",
                    "Expiration_date" : "Expiration Date",
                    "Country" : "Country",
                    "Language" : "Language",
                    "Receive_news_from_cci" : "Receive News From CCI",
                    "Register" : "Register",
                    "Select" : "Select",
                    "Back" : "Back",
                    "Edit_profile" : "Edit Profile"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Forgot Password?",
                    "Email" : "Email",
                    "Send_email" : "Send Email",
                    "Dont_have_an_account" : "Don´t have an account?",
                    "Register_now" : "Register now"
                },
                "Map" : {
                    "Search" : "Search",
                    "Allow_app_access" : "Allow the app to access the device's location?",
                    "Allow" : "Allow",
                    "Not_allow" : "Not allow",
                    "Campsites_near_you" : "Campsites near you",
                    "Campsites" : "Campsites",
                    "Digital_card" : "Digital Card",
                    "Redefine_your_search" : "Redefine your search",
                    "Country" : "Country",
                    "Category" : "Category",
                    "Discount" : "Discount",
                    "Clear_all" : "Clear All",
                    "Apply" : "Apply",
                    "Results" : "Results",
                    "Book_now" : "Book now",
                    "Bank_insurance" : "Bank & Insurance",
                    "Bars_restaurants" : "Bars & Restaurants",
                    "Books_newspapers" : "Books & Newspapers",
                    "Caravans_motorcaravans" : "Caravans & Motorcaravans",
                    "Children" : "Children",
                    "Clothes_fashion" : "Clothes & Fashion",
                    "Sport_hobbies" : "Sport & Hobbies",
                    "Technics_stuff" : "Technics & Stuff",
                    "Travel_adventure" : "Travel & Adventure",
                    "Select_all" : "Select All"
                },
                "MapDetail" : {
                    "Map" : "Map",
                    "Book_now" : "Book now",
                    "Other_Disconts" : "Other Disconts"
                },
                "Profile" : {
                    "Profile" : "Profile",
                    "Digital_card" : "Digital card",
                    "Help" : "Help",
                    "Contacts" : "Contacts",
                    "Campsites" : "Campsites",
                    "Address" : "Address",
                },
                "DigitalCard" : {
                    "Name" : "Name",
                    "Address" : "Address",
                    "Birth" : "Birth",
                    "Passport" : "Passport",
                    "Issue" : "Issue",
                    "Member" : "Member",
                    "Nacionality" : "Nacionality",
                    "Validity" : "Validity",
                    "Front_card" : "Front Card",
                    "Back_card" : "Back Card",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Required Filed!",
                    "Minimum_6_digits" : "Minimum 6 digits!",
                    "Password_do_not_match" : "Password do not match!",
                    "Please_write_your_email" : "Please write your email!",
                    "Please_confirm_your_password" : "Please confirm your password!",
                    "Please_write_your_name" : "Please write your name!",
                    "Please_write_your_password" : "Please write your password!",
                    "Please_write_valid_email" : "Please write a Valid Email!",
                    "Please_write_security_question" : "Please write a security question!",
                    "Please_write_security_answer" : "Please write a security answer!",
                    "Please_write_your_card_number" : "Please write your Card Number!",
                    "Please_write_a_valid_card_number" : "Please write your Card Number!",
                    "Please_select_your_language" : "Please select your Language!",
                    "Please_select_a_date" : "Please select a Date!",
                    "Please_select_a_valid_date" : "Please select a valid Date!",
                    "Please_select_your_country" : "Please select your Country!"
                }
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
          })
    } else if (lang === 'FR') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Obtenez des rabais dans",
                    "Campsites_in" : "campings en",
                    "Countries" : "des pays"
                },
                "SwipeScreen" : {
                    "Please_rotate_device": "Veuillez faire pivoter votre appareil en mode portrait",
                    "App_support_portrait" : "Cette application ne prend en charge que le mode portrait",
                    "Please_open_mobile_device" : "Veuillez ouvrir sur un appareil mobile",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Page pas aimée",
                    "Go_back" : "Revenir en arrière"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Mot de passe de récupération",
                    "Check_your_email_recover" : "Pour récupérer votre mot de passe, veuillez vérifier vos e-mails",
                    "Check_your_email_verification" : "Veuillez vérifier votre boîte e-mail pour vérifier votre compte",
                    "Invalid_email" : "Email invalide!",
                    "Invalid_fields" : "Champs non valides",
                    "Please_try_again" : "Veuillez réessayer!",
                    "Create_an_account" : "Veuillez créer un nouveau compte",
                    "Account_created_with_success" : "Compte créé avec succès",
                    "Created_account_fail" : "Impossible de créer un compte"
                },
                "Login" : {
                    "Welcome_back": "Bienvenue à nouveau!",
                    "Email" : "Email",
                    "Password" : "Mot de passe",
                    "Language" : "Langue",
                    "Select" : "Sélectionner",
                    "Login" : "Connexion",
                    "Forgot_password" : "Mot de passe oublié?",
                    "Dont_have_an_account" : "Vous n'avez pas de compte?",
                    "Register_now" : "Inscrivez-vous maintenant"
                },
                "SignUp" : {
                    "Sign_up" : "Inscription",
                    "Name" : "Nom",
                    "Email" : "Email",
                    "Password" : "Mot de passe",
                    "Confirm_password" : "Confirmer le mot de passe",
                    "Password_question" : "Question de mot de passe",
                    "Password_answwer" : "Password Anwser",
                    "Next" : "Suivant",
                    "Club" : "Club",
                    "Card_number" : "Card Number",
                    "Expiration_date" : "Date d'expiration",
                    "Country" : "Pays",
                    "Language" : "Langue",
                    "Receive_news_from_cci" : "Recevoir des nouvelles de CCI",
                    "Register" : "S'inscrire",
                    "Select" : "Sélectionner",
                    "Back" : "Retour ",
                    "Edit_profile" : "EModifier le profil"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Mot de passe oublié?",
                    "Email" : "Email",
                    "Send_email" : "Envoyer un e-mail",
                    "Dont_have_an_account" : "Vous n'avez pas de compte?",
                    "Register_now" : "Inscrivez-vous maintenant"
                },
                "Map" : {
                    "Search" : "Chercher",
                    "Allow_app_access" : "Autoriser l'application à accéder à la position de l'appareil?",
                    "Allow" : "Autoriser",
                    "Not_allow" : "Ne pas autoriser",
                    "Campsites_near_you" : "Campings à proximité",
                    "Campsites" : "Campings",
                    "Digital_card" : "Digital Card",
                    "Redefine_your_search" : "Redéfinissez votre recherche",
                    "Country" : "Pays",
                    "Category" : "Catégorie",
                    "Discount" : "Remise",
                    "Clear_all" : "Effacer tout",
                    "Apply" : "Appliquer",
                    "Results" : "Résultats",
                    "Book_now" : "Réservez maintenant",
                    "Bank_insurance" : "Banque & assurance",
                    "Bars_restaurants" : "Bars & Restaurants",
                    "Books_newspapers" : "Livres & Journaux",
                    "Caravans_motorcaravans" : "Caravanes & Motorcaravans",
                    "Children" : "Enfants",
                    "Clothes_fashion" : "Vêtements et mode",
                    "Sport_hobbies" : "Sport & Hobbies",
                    "Technics_stuff" : "Technics & Stuff",
                    "Travel_adventure" : "Voyage & Aventure",
                    "Select_all" : "Sélectionner tout"
                },
                "MapDetail" : {
                    "Map" : "Carte",
                    "Book_now" : "Réservez maintenant",
                    "Other_Disconts" : "Other Disconts"
                },
                "Profile" : {
                    "Profile" : "Profil",
                    "Digital_card" : "Digital card",
                    "Help" : "À l'aide",
                    "Contacts" : "Contacts",
                    "Campsites" : "Campings",
                    "Address" : "Adress",
                },
                "DigitalCard" : {
                    "Name" : "Nom",
                    "Address" : "Adresse",
                    "Birth" : "Naissance",
                    "Passport" : "Passeport",
                    "Issue" : "Problème",
                    "Member" : "Membre",
                    "Nacionality" : "Nacionality",
                    "Validity" : "Validité",
                    "Front_card" : "Front Card",
                    "Back_card" : "Back Card",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Obligatoire déposé!",
                    "Minimum_6_digits" : "Minimum 6 chiffres!",
                    "Password_do_not_match" : "Le mot de passe ne correspond pas!",
                    "Please_write_your_email" : "Veuillez écrire votre email!",
                    "Please_confirm_your_password" : "Veuillez confirmer votre mot de passe!",
                    "Please_write_your_name" : "Please write youVeuillez écrire votre nom!",
                    "Please_write_your_password" : "Veuillez écrire votre mot de passe!",
                    "Please_write_valid_email" : "Veuillez écrire un email valide!",
                    "Please_write_security_question" : "Veuillez écrire une question de sécurité!",
                    "Please_write_security_answer" : "Veuillez écrire une réponse de sécurité!",
                    "Please_write_your_card_number" : "Veuillez écrire votre numéro de carte!",
                    "Please_write_a_valid_card_number" : "Veuillez écrire votre numéro de carte!",
                    "Please_select_your_language" : "Veuillez sélectionner votre langue!",
                    "Please_select_a_date" : "Veuillez sélectionner une date!",
                    "Please_select_a_valid_date" : "Veuillez sélectionner une date valide!",
                    "Please_select_your_country" : "Veuillez sélectionner votre pays!"
                }
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
          })
    } else if (lang === 'DE') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Erhalten Sie Rabatte in",
                    "Campsites_in" : "Campingplätze in",
                    "Countries" : "Länder"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Bitte drehen Sie Ihr Gerät auf Hochformat",
                    "App_support_portrait" : "Diese App unterstützt nur den Porträtmodus",
                    "Please_open_mobile_device" : "Bitte auf einem mobilen Gerät öffnen",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Seite nicht gern",
                    "Go_back" : "Zurück"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Wiederherstellungskennwort",
                    "Check_your_email_recover" : "Um Ihr Passwort wiederherzustellen, überprüfen Sie bitte Ihre E-Mails",
                    "Check_your_email_verification" : "Bitte überprüfen Sie Ihr E-Mail-Kontrollkästchen, um Ihr Konto zu bestätigen",
                    "Invalid_email" : "Ungültige E-Mail!",
                    "Invalid_fields" : "Ungültige Felder",
                    "Please_try_again" : "Bitte versuchen Sie es erneut!",
                    "Create_an_account" : "Bitte erstellen Sie ein neues Konto",
                    "Account_created_with_success" : "Mit Erfolg erstelltes Konto",
                    "Created_account_fail" : "Fehler beim Erstellen eines Kontos"
                },
                "Login" : {
                    "Welcome_back": "Willkommen zurück!",
                    "Email" : "Email",
                    "Password" : "Passwort",
                    "Language" : "Sprache",
                    "Select" : "Auswählen",
                    "Login" : "Einloggen",
                    "Forgot_password" : "Passwort vergessen?",
                    "Dont_have_an_account" : "Passwort vergessen?",
                    "Register_now" : "Jetzt registrieren"
                },
                "SignUp" : {
                    "Sign_up" : "Anmelden",
                    "Name" : "Name",
                    "Email" : "Email",
                    "Password" : "Passwort",
                    "Confirm_password" : "Bestätigen Passwort",
                    "Password_question" : "Passwortfrage",
                    "Password_answwer" : "Passwort Antworten",
                    "Next" : "Weiter",
                    "Club" : "Verein",
                    "Card_number" : "Kartennummer",
                    "Expiration_date" : "Ablaufdatum",
                    "Country" : "Land",
                    "Language" : "Sprache",
                    "Receive_news_from_cci" : "Erhalten Sie Nachrichten von CCI",
                    "Register" : "Registrieren",
                    "Select" : "Auswählen",
                    "Back" : "Zurück",
                    "Edit_profile" : "Profil bearbeiten"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Passwort vergessen?",
                    "Email" : "Email",
                    "Send_email" : "E-Mail senden",
                    "Dont_have_an_account" : "Hast du kein Konto?",
                    "Register_now" : "Jetzt registrieren"
                },
                "Map" : {
                    "Search" : "Suche",
                    "Allow_app_access" : "Ermöglichen Sie der App, auf den Standort des Geräts zuzugreifen?",
                    "Allow" : "Ermöglichen",
                    "Not_allow" : "Nicht erlauben",
                    "Campsites_near_you" : "Campingplätze in Ihrer Nähe",
                    "Campsites" : "Campingplätze",
                    "Digital_card" : "Digitale Karte",
                    "Redefine_your_search" : "Definieren Sie Ihre Suche neu",
                    "Country" : "Land",
                    "Category" : "Kategorie",
                    "Discount" : "Rabatt",
                    "Clear_all" : "Alles löschen",
                    "Apply" : "Anwenden",
                    "Results" : "Ergebnisse",
                    "Book_now" : "Buchen Sie jetzt",
                    "Bank_insurance" : "Bank & Versicherung",
                    "Bars_restaurants" : "Bars & Restaurants",
                    "Books_newspapers" : "Bücher & Zeitungen",
                    "Caravans_motorcaravans" : "Wohnwagen & Wohnwagen",
                    "Children" : "Kinder",
                    "Clothes_fashion" : "Kleidung & Mode",
                    "Sport_hobbies" : "Sport & Hobbys",
                    "Technics_stuff" : "Technik & Sachen",
                    "Travel_adventure" : "Reisen & Abenteuer",
                    "Select_all" : "Wählen Sie Alle"
                },
                "MapDetail" : {
                    "Map" : "Karte",
                    "Book_now" : "Buchen Sie jetzt",
                    "Other_Disconts" : "Andere Disconts"
                },
                "Profile" : {
                    "Profile" : "Profil",
                    "Digital_card" : "Digitale Karte",
                    "Help" : "Hilfe",
                    "Contacts" : "Kontakte",
                    "Campsites" : "Campingplätze",
                    "Address" : "Adress",
                },
                "DigitalCard" : {
                    "Name" : "Name",
                    "Address" : "Adress",
                    "Birth" : "Geburt",
                    "Passport" : "Reisepass",
                    "Issue" : "Problem",
                    "Member" : "Mitglied",
                    "Nacionality" : "Nacionality",
                    "Validity" : "Gültigkeit",
                    "Front_card" : "Frontkarte",
                    "Back_card" : "Rückkarte",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Erforderlich Abgelegt!",
                    "Minimum_6_digits" : "Mindestens 6 Stellen!",
                    "Password_do_not_match" : "PassPasswort stimmt nicht überein!",
                    "Please_write_your_email" : "Bitte schreiben Sie Ihre E-Mail!",
                    "Please_confirm_your_password" : "Bitte bestätigen Sie Ihr Passwort!",
                    "Please_write_your_name" : "Bitte schreiben Sie Ihren Namen!",
                    "Please_write_your_password" : "Bitte schreiben Sie Ihr Passwort!",
                    "Please_write_valid_email" : "Bitte schreiben Sie eine gültige E-Mail!",
                    "Please_write_security_question" : "Bitte schreiben Sie eine Sicherheitsfrage!",
                    "Please_write_security_answer" : "Bitte schreiben Sie eine Sicherheitsantwort!",
                    "Please_write_your_card_number" : "Bitte schreiben Sie Ihre Kartennummer!",
                    "Please_write_a_valid_card_number" : "Bitte schreiben Sie Ihre Kartennummer!",
                    "Please_select_your_language" : "Bitte wählen Sie Ihre Sprache!",
                    "Please_select_a_date" : "Bitte wählen Sie ein Datum!",
                    "Please_select_a_valid_date" : "Bitte wähle ein gültiges Datum aus!",
                    "Please_select_your_country" : "Bitte wählen Sie Ihr Land!"
                }
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
          })
    } else if (lang === 'IT') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Ottieni sconti in",
                    "Campsites_in" : "campeggi in",
                    "Countries" : "paesi"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Ruota il dispositivo in verticale",
                    "App_support_portrait" : "Questa app supporta solo la modalità verticale",
                    "Please_open_mobile_device" : "Si prega di aprire su un dispositivo mobile",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Pagina non affezionata",
                    "Go_back" : "Torna indietro"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Password di ripristino",
                    "Check_your_email_recover" : "Per recuperare la tua password controlla la tua email",
                    "Check_your_email_verification" : "Controlla la tua casella di posta elettronica per verificare il tuo account,",
                    "Invalid_email" : "E-mail non valido!",
                    "Invalid_fields" : "Campi non validi",
                    "Please_try_again" : "Per favore riprova!",
                    "Create_an_account" : "Crea un nuovo account",
                    "Account_created_with_success" : " Account creato con successo",
                    "Created_account_fail" : "Impossibile creare un account"
                },
                "Login" : {
                    "Welcome_back": "Ben Tornato!",
                    "Email" : "Email",
                    "Password" : "Parola d'ordine",
                    "Language" : "Linguaggio",
                    "Select" : "Selezionare",
                    "Login" : "Accesso",
                    "Forgot_password" : "Ha dimenticato la password?",
                    "Dont_have_an_account" : "Non hai un account ?",
                    "Register_now" : "Iscriviti ora"
                },
                "Sign_up" : {
                    "Sign_up" : "Iscriviti",
                    "Name" : "Nome",
                    "Email" : "Email",
                    "Password" : "Parola d'ordine",
                    "Confirm_password" : "Conferma Parola d'ordine ",
                    "Password_question" : "Parola d'ordine Domanda",
                    "Password_answwer" : "Parola d'ordine Risposta",
                    "Next" : "Il prossimo",
                    "Club" : "Club",
                    "Card_number" : "Numero di carta",
                    "Expiration_date" : "Data di scadenza",
                    "Country" : "Nazione",
                    "Language" : "Linguaggio",
                    "Receive_news_from_cci" : "Ricevi notizie da CCI",
                    "Register" : "Registrati",
                    "Select" : "Selezionare",
                    "Back" : "Indietro",
                    "Edit_profile" : "Modifica Profilo"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Ha dimenticato la password?",
                    "Email" : "Email",
                    "Send_email" : "Invia una email",
                    "Dont_have_an_account" : "Non hai un account ?",
                    "Register_now" : "Iscriviti ora"
                },
                "Map" : {
                    "Search" : "Ricerca",
                    "Allow_app_access" : "Consentire all'app di accedere alla posizione del dispositivo ?",
                    "Allow" : "Permettere",
                    "Not_allow" : "Non consentire",
                    "Campsites_near_you" : "Campeggi vicino a te",
                    "Campsites" : "Campeggi",
                    "Digital_card" : "Carta digitale",
                    "Redefine_your_search" : "Ridefinisci la tua ricerca",
                    "Country" : "Nazione",
                    "Category" : "Categoria",
                    "Discount" : "Sconto",
                    "Clear_all" : "Cancella tutto",
                    "Apply" : "Applicare",
                    "Results" : "Risultati",
                    "Book_now" : "Prenota ora",
                    "Bank_insurance" : "Banca & Assicurazioni",
                    "Bars_restaurants" : "Bar & Ristoranti",
                    "Books_newspapers" : "Libri & Gornali",
                    "Caravans_motorcaravans" : "Roulotte & Camper",
                    "Children" : "Bambini",
                    "Clothes_fashion" : "Abbigliamento & Moda",
                    "Sport_hobbies" : "Sport & Passatempo",
                    "Technics_stuff" : "Tecniche & Roba",
                    "Travel_adventure" : "Viaggi & Avventura",
                    "Select_all" : "Seleziona tutto"
                },
                "MapDetail" : {
                    "Map" : "Carta geografica",
                    "Book_now" : "Prenota ora",
                    "Other_Disconts" : "Altri disagi"
                },
                "Profile" : {
                    "Profile" : "Profilo",
                    "Digital_card" : "Carta digitale",
                    "Help" : "Aiuto",
                    "Contacts" : "Contatti",
                    "Campsites" : "Campeggi",
                    "Address" : "Indirizzo",
                },
                "DigitalCard" : {
                    "Name" : "Nome",
                    "Address" : "Indirizzo",
                    "Birth" : "Nascita",
                    "Passport" : "Passaporto",
                    "Issue" : "Problema",
                    "Member" : "Membro",
                    "Nacionality" : "Nazionalità",
                    "Validity" : "Validità",
                    "Front_card" : "Carta Frontale",
                    "Back_card" : "Carta sul Retro",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Richiesto archiviato!",
                    "Minimum_6_digits" : "Minimo 6 cifre!",
                    "Password_do_not_match" : "La password non coincide!",
                    "Please_write_your_email" : "Scrivi la tua email!",
                    "Please_confirm_your_password" : "Conferma la tua password!",
                    "Please_write_your_name" : "Per favore scrivi il tuo nome!",
                    "Please_write_your_password" : "Scrivi la tua password!",
                    "Please_write_valid_email" : "Scrivi un'e-mail valida!",
                    "Please_write_security_question" : "Scrivi una domanda di sicurezza!",
                    "Please_write_security_answer" : "Scrivi una risposta di sicurezza!",
                    "Please_write_your_card_number" : "Scrivi il tuo numero di carta!",
                    "Please_write_a_valid_card_number" : "Scrivi il tuo numero di carta!",
                    "Please_select_your_language" : "Seleziona la tua lingua!",
                    "Please_select_a_date" : "Seleziona una data!",
                    "Please_select_a_valid_date" : "Seleziona una data valida!",
                    "Please_select_your_country" : "Selezionare il proprio paese!"
                }
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
        })
    } else if (lang === 'ES') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Obtenga descuentos en",
                    "Campsites_in" : "campings en",
                    "Countries" : "países"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Gire su dispositivo a retrato",
                    "App_support_portrait" : "Esta aplicación solo admite el modo retrato",
                    "Please_open_mobile_device" : "Abra en un dispositivo móvil",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Página no aficionada,",
                    "Go_back" : "Regresa"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Contraseña de recuperación",
                    "Check_your_email_recover" : "Para recuperar su contraseña, consulte su correo electrónico",
                    "Check_your_email_verification" : "Marque su casilla de correo electrónico para verificar su cuenta",
                    "Invalid_email" : "¡Email inválido!",
                    "Invalid_fields" : "Campos no válidos",
                    "Please_try_again" : "¡Inténtalo de nuevo!",
                    "Create_an_account" : "Cree una nueva cuenta",
                    "Account_created_with_success" : "Cuenta creada con éxito",
                    "Created_account_fail" : "Error al crear una cuenta"
                },
                "Login" : {
                    "Welcome_back": "¡Bienvenido de nuevo!",
                    "Email" : "Email",
                    "Password" : "Contraseña",
                    "Language" : "Idioma",
                    "Select" : "Seleccione",
                    "Login" : "Iniciar sesión",
                    "Forgot_password" : "Se te olvidó tu contraseña?",
                    "Dont_have_an_account" : "No tienes cuenta?",
                    "Register_now" : "Regístrate ahora"
                },
                "SignUp" : {
                    "Sign_up" : "Regístrate",
                    "Name" : "Nombre",
                    "Email" : "Email",
                    "Password" : "Contraseña",
                    "Confirm_password" : "Confirmar contraseña",
                    "Password_question" : "Pregunta secreta",
                    "Password_answwer" : "Contraseña Anwser",
                    "Next" : "Siguiente",
                    "Club" : "Club",
                    "Card_number" : "Número de tarjeta",
                    "Expiration_date" : "Fecha de caducidad",
                    "Country" : "País",
                    "Language" : "Idioma",
                    "Receive_news_from_cci" : "Recibir noticias de CCI",
                    "Register" : "Registrarse",
                    "Select" : "Seleccione",
                    "Back" : "Atrás",
                    "Edit_profile" : "Editar perfil"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Se te olvidó tu contraseña?",
                    "Email" : "Email",
                    "Send_email" : "Enviar correo electrónico",
                    "Dont_have_an_account" : "No tienes cuenta?",
                    "Register_now" : "Regístrate ahora"
                },
                "Map" : {
                    "Search" : "Buscar",
                    "Allow_app_access" : "Permitir que la aplicación acceda a la ubicación del dispositivo?",
                    "Allow" : "Permitir",
                    "Not_allow" : "No permitido",
                    "Campsites_near_you" : "Campings cerca de ti",
                    "Campsites" : "Campings",
                    "Digital_card" : "Tarjeta digital",
                    "Redefine_your_search" : "Redefina su búsqueda",
                    "Country" : "País",
                    "Category" : "Categoría",
                    "Discount" : "Descuento",
                    "Clear_all" : "Limpiar todo",
                    "Apply" : "Aplicar",
                    "Results" : "Resultados",
                    "Book_now" : "Reservar ahora",
                    "Bank_insurance" : "Banca y Seguros",
                    "Bars_restaurants" : "Bares y restaurantes",
                    "Books_newspapers" : "Libros y periódicos",
                    "Caravans_motorcaravans" : "Caravanas y Autocaravanas,",
                    "Children" : "Niños",
                    "Clothes_fashion" : "Ropa y moda",
                    "Sport_hobbies" : "Deporte y pasatiempos",
                    "Technics_stuff" : "Técnicas y demás",
                    "Travel_adventure" : " Viajes y aventuras",
                    "Select_all" : "Seleccionar todo"
                },
                "MapDetail" : {
                    "Map" : "Mapa",
                    "Book_now" : "Reservar ahora",
                    "Other_Disconts" : "Otros descontentos"
                },
                "Profile" : {
                    "Profile" : "Perfil",
                    "Digital_card" : "Tarjeta digital",
                    "Help" : "Ayuda",
                    "Contacts" : "Contactos",
                    "Campsites" : "Campings",
                    "Address" : "Habla a",
                },
                "DigitalCard" : {
                    "Name" : "Nombre",
                    "Address" : "Habla a",
                    "Birth" : "Nacimiento",
                    "Passport" : "Pasaporte",
                    "Issue" : "Problema",
                    "Member" : "Miembro",
                    "Nacionality" : "Nacionalidad",
                    "Validity" : "Validez",
                    "Front_card" : "Tarjeta frontal",
                    "Back_card" : "Tarjeta trasera",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Requerido Archivado!",
                    "Minimum_6_digits" : "Mínimo 6 dígitos!",
                    "Password_do_not_match" : "La contraseña no coincide!",
                    "Please_write_your_email" : "Por favor escriba su correo electrónico!",
                    "Please_confirm_your_password" : "Por favor, confirme su contraseña!",
                    "Please_write_your_name" : "Por favor escriba su nombre!",
                    "Please_write_your_password" : "Por favor escriba su contraseña",
                    "Please_write_valid_email" : "Por favor escriba un e-mail valido!",
                    "Please_write_security_question" : "Escriba una pregunta de seguridad!",
                    "Please_write_security_answer" : "Por favor escriba una respuesta de seguridad!",
                    "Please_write_your_card_number" : "Escriba su número de tarjeta!",
                    "Please_write_a_valid_card_number" : "Escriba su número de tarjeta!",
                    "Please_select_your_language" : "Seleccione su idioma!",
                    "Please_select_a_date" : "Seleccione una fecha!",
                    "Please_select_a_valid_date" : "Por favor seleccione una fecha valida!",
                    "Please_select_your_country" : "Por favor seleccione su país!!"
                }
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
        })
    } else if (lang === 'NL') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Krijg kortingen in",
                    "Campsites_in" : "campings in",
                    "Countries" : "landen"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Draai uw apparaat naar portret",
                    "App_support_portrait" : "Deze app ondersteunt alleen de portretmodus",
                    "Please_open_mobile_device" : "Open op een mobiel apparaat",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Pagina niet dol",
                    "Go_back" : "Ga terug"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Herstelwachtwoord",
                    "Check_your_email_recover" : "Controleer uw e-mail om uw wachtwoord te herstellen",
                    "Check_your_email_verification" : "Controleer uw e-mailbox om uw account te verifiëren",
                    "Invalid_email" : "Ongeldig e-mail!",
                    "Invalid_fields" : "Ongeldige velden",
                    "Please_try_again" : "Probeer het opnieuw!",
                    "Create_an_account" : "Maak een nieuw account aan",
                    "Account_created_with_success" : "Account gemaakt met succes",
                    "Created_account_fail" : "Kan geen account maken"
                },
                "Login" : {
                    "Welcome_back": "Welkom terug!",
                    "Email" : "Email",
                    "Password" : "Wachtwoord",
                    "Language" : "Taal",
                    "Select" : "Selecteer",
                    "Login" : "Log in",
                    "Forgot_password" : "Wachtwoord vergeten?",
                    "Dont_have_an_account" : "Heeft u geen account ?",
                    "Register_now" : "Registreer nu"
                },
                "SignUp" : {
                    "Sign_up" : "Aanmelden",
                    "Name" : "Naam",
                    "Email" : "Email",
                    "Password" : "Wachtwoord",
                    "Confirm_password" : "Bevestig Wachtwoord",
                    "Password_question" : "Wachtwoordvraag",
                    "Password_answwer" : "Wachtwoord antwoord",
                    "Next" : "De volgende",
                    "Club" : "Club",
                    "Card_number" : "Kaartnummer",
                    "Expiration_date" : "Uiterste houdbaarheidsdatum",
                    "Country" : "Land",
                    "Language" : "Taal",
                    "Receive_news_from_cci" : "Ontvang nieuws van CCI",
                    "Register" : "Registreren",
                    "Select" : "Selecteer",
                    "Back" : "Terug",
                    "Edit_profile" : "Bewerk profiel"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Wachtwoord vergeten?",
                    "Email" : "Email",
                    "Send_email" : "Email verzenden",
                    "Dont_have_an_account" : "Heeft u geen account ?",
                    "Register_now" : "Registreer nu"
                },
                "Map" : {
                    "Search" : "Zoeken",
                    "Allow_app_access" : "De app toegang geven tot de locatie van het apparaat ?",
                    "Allow" : "Toestaan",
                    "Not_allow" : "Niet toelaten",
                    "Campsites_near_you" : "Campings bij jou in de buurt",
                    "Campsites" : "Campings",
                    "Digital_card" : "Digitale kaart",
                    "Redefine_your_search" : "Herdefinieer uw zoekopdracht",
                    "Country" : "Land",
                    "Category" : "Categorie",
                    "Discount" : "Korting",
                    "Clear_all" : "Wis alles",
                    "Apply" : "Van toepassing zijn",
                    "Results" : "Resultaten",
                    "Book_now" : "Boek nu",
                    "Bank_insurance" : "Bank & Verzekering",
                    "Bars_restaurants" : "Bars & Restaurants",
                    "Books_newspapers" : "Boeken & Kranten",
                    "Caravans_motorcaravans" : "Caravans & Campers",
                    "Children" : "Kinderen",
                    "Clothes_fashion" : "Kleding & Mode",
                    "Sport_hobbies" : "Sport & Hobby's",
                    "Technics_stuff" : "Techniek & Spullen",
                    "Travel_adventure" : "Reizen & Avontuur",
                    "Select_all" : "Selecteer alles"
                },
                "MapDetail" : {
                    "Map" : "Kaart",
                    "Book_now" : "Boek nu",
                    "Other_Disconts" : "Andere disconts"
                },
                "Profile" : {
                    "Profile" : "Profiel",
                    "Digital_card" : "Digitale kaart",
                    "Help" : "Helpen",
                    "Contacts" : "Contacten",
                    "Campsites" : "Campings",
                    "Address" : "Adres",
                },
                "DigitalCard" : {
                    "Name" : "Naam",
                    "Address" : "Adres",
                    "Birth" : "Geboorte",
                    "Passport" : "Paspoort",
                    "Issue" : "Kwestie",
                    "Member" : "Lid",
                    "Nacionality" : "Nacionaliteit",
                    "Validity" : "Geldigheid",
                    "Front_card" : "Voorste kaart",
                    "Back_card" : "Achterkaart",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Vereist ingediend !",
                    "Minimum_6_digits" : "Minimaal 6 cijfers !",
                    "Password_do_not_match" : "Wachtwoord komt niet overeen!",
                    "Please_write_your_email" : "Schrijf uw e-mail!",
                    "Please_confirm_your_password" : "Bevestig alstublieft uw wachtwoord!",
                    "Please_write_your_name" : " Bevestig alstublieft uw wachtwoord!",
                    "Please_write_your_password" : "Schrijf alstublieft uw naam!",
                    "Please_write_valid_email" : "Schrijf uw wachtwoord!",
                    "Please_write_security_question" : "Schrijf een geldige e-mail!",
                    "Please_write_security_answer" : "Schrijf een beveiligingsvraag!",
                    "Please_write_your_card_number" : "Schrijf een beveiligingsantwoord!",
                    "Please_write_a_valid_card_number" : "Geef uw kaartnummer op!",
                    "Please_select_your_language" : "Selecteer uw taal!",
                    "Please_select_a_date" : "Selecteer een datum!",
                    "Please_select_a_valid_date" : "Selecteer een geldige datum alstublieft!",
                    "Please_select_your_country" : "Selecteer uw land alstublieft!"
                }
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
        })
    } else if (lang === 'SK') {
        res.json({
            "Translates" : {
                "OnboardScreen" : {
                    "CampsitesTotal" : 3197,
                    "CountriesTotal" : 40,
                    "Get_discounts_in" : "Získajte zľavy v",
                    "Campsites_in" : "kempingy v",
                    "Countries" : "krajiny"
                },
                "SwipeScreen" : {
                    "Please_rotate_device" : "Otočte zariadenie na výšku",
                    "App_support_portrait" : "Táto aplikácia podporuje iba režim na výšku",
                    "Please_open_mobile_device" : "Otvorte prosím na mobilnom zariadení",
                },
                "NotFoundScreen" : {
                    "Page_not_fond" : "Stránka nemá rada",
                    "Go_back" : "Vráť sa"
                },
                "SideBarScreen" : {
                    "Recovery_password" : "Obnovovacie heslo",
                    "Check_your_email_recover" : "Ak chcete získať späť svoje heslo",
                    "Check_your_email_verification" : "Skontrolujte svoj e-mail a overte svoj účet",
                    "Invalid_email" : "Neplatný email!",
                    "Invalid_fields" : "Neplatné polia",
                    "Please_try_again" : "Prosím skúste znova!",
                    "Create_an_account" : "Vytvorte si nový účet",
                    "Account_created_with_success" : "účet bol úspešne vytvorený,",
                    "Created_account_fail" : "Vytvorenie účtu zlyhalo"
                },
                "Login" : {
                    "Welcome_back": "Vitaj späť!",
                    "Email" : "Email",
                    "Password" : "Heslo",
                    "Language" : "Jazyk",
                    "Select" : "Vyberte",
                    "Login" : "Prihlásiť sa",
                    "Forgot_password" : "Zabudol si heslo?",
                    "Dont_have_an_account" : "Nemáte účet?",
                    "Register_now" : "Zaregistrujte sa hneď"
                },
                "SignUp" : {
                    "Sign_up" : "Prihlásiť Se",
                    "Name" : "Názov",
                    "Email" : "Email",
                    "Password" : "Heslo",
                    "Confirm_password" : "Potvrďte heslo",
                    "Password_question" : "Otázka na heslo",
                    "Password_answwer" : "Heslo Anwser",
                    "Next" : "Ďalšie",
                    "Club" : "klub",
                    "Card_number" : "Číslo karty",
                    "Expiration_date" : "Dátum spotreby",
                    "Country" : "Krajina",
                    "Language" : "Jazyk",
                    "Receive_news_from_cci" : "Dostávať správy z CCI",
                    "Register" : "Registrovať",
                    "Select" : "Vyberte",
                    "Back" : "Späť",
                    "Edit_profile" : "Upraviť profil"
                },
                "ForgotPassword" : {
                    "Forgot_password" : "Zabudol si heslo?",
                    "Email" : "Email",
                    "Send_email" : "Poslať email",
                    "Dont_have_an_account" : "Nemáte účet?",
                    "Register_now" : "Zaregistrujte sa hneď"
                },
                "Map" : {
                    "Search" : "Vyhľadávanie",
                    "Allow_app_access" : "Povoliť aplikácii prístup k polohe zariadenia ?",
                    "Allow" : "Povoliť",
                    "Not_allow" : "Nepovoliť",
                    "Campsites_near_you" : "kempy vo vašej blízkosti",
                    "Campsites" : "kempingy",
                    "Digital_card" : "Digitálna karta",
                    "Redefine_your_search" : "Predefinujte svoje hľadanie",
                    "Country" : "Krajina",
                    "Category" : "Kategória",
                    "Discount" : "Zľava",
                    "Clear_all" : "Zmazať všetko",
                    "Apply" : "Podať žiadosť",
                    "Results" : "Výsledky",
                    "Book_now" : "Rezervovať",
                    "Bank_insurance" : "Banka a poistenie",
                    "Bars_restaurants" : "Bary a reštaurácie",
                    "Books_newspapers" : "nihy a noviny",
                    "Caravans_motorcaravans" : "Karavany a karavany",
                    "Children" : "deti",
                    "Clothes_fashion" : "oblečenie a móda",
                    "Sport_hobbies" : "Šport a koníčky",
                    "Technics_stuff" : "Technika a veci",
                    "Travel_adventure" : "Cestovanie a dobrodružstvo",
                    "Select_all" : "Vybrať všetko"
                },
                "MapDetail" : {
                    "Map" : "Mapa",
                    "Book_now" : "Rezervovať",
                    "Other_Disconts" : "Iné diskotéky"
                },
                "Profile" : {
                    "Profile" : "Profil",
                    "Digital_card" : "Digitálna karta",
                    "Help" : "Pomoc",
                    "Contacts" : "Kontakty",
                    "Campsites" : "kempingy",
                    "Address" : "adresa",
                },
                "DigitalCard" : {
                    "Name" : "Názov",
                    "Address" : "Adresa",
                    "Birth" : "Narodenie",
                    "Passport" : "Cestovný pas",
                    "Issue" : "Problém",
                    "Member" : "Národnosť",
                    "Nacionality" : "Národnosť",
                    "Validity" : "Platnosť",
                    "Front_card" : "Predná karta",
                    "Back_card" : "Zadná karta",
                },
                "ErrorMessages" : {
                    "Required_filed" : "Povinné podanie!",
                    "Minimum_6_digits" : "Minimálne 6 číslic!",
                    "Password_do_not_match" : "Heslo sa nezhoduje!",
                    "Please_write_your_email" : "Prosím, napíšte svoj e-mail!",
                    "Please_confirm_your_password" : "Potvrďte svoje heslo!",
                    "Please_write_your_name" : "Prosím, napíš svoje meno!",
                    "Please_write_your_password" : "Prosím, napíšte svoje heslo!",
                    "Please_write_valid_email" : "Prosím, napíšte platný e-mail!",
                    "Please_write_security_question" : "Napíšte bezpečnostnú otázku!",
                    "Please_write_security_answer" : "Napíšte bezpečnostnú odpoveď!",
                    "Please_write_your_card_number" : "Prosím, napíšte číslo svojej karty!",
                    "Please_write_a_valid_card_number" : "Prosím, napíšte číslo svojej karty!",
                    "Please_select_your_language" : "Vyberte si svoj jazyk!",
                    "Please_select_a_date" : "Vyberte dátum!",
                    "Please_select_a_valid_date" : "Vyberte platný dátum!",
                    "Please_select_your_country" : "Vyberte svoju krajinu!!"
                }
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
        })
    }
})
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
router.get("/help", (req, res) => {
    res.json([
        {   
            "id": "1",
            "title": "How to reset my password?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "id": "2",
            "title": "How to get my CCI?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "id": "3",
            "title": "How to reset my password?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "id": "4",
            "title": "How to get my CCI?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        }
    ]);
});
router.get("/users", (req, res) => {
    res.json({
        "usersList" : 
            {   
                "id": 1,
                "name": "Joana Mendes",
                "email" : "joanamendes@shareit.dev",
                "password" : "123456",
                "passwordQuestion" : "My Favorite Color",
                "passwordAnswer" : "Green",
                "club" : "0102 - Camping und Caravaning Club Austria",
                "cardNumber" : "123456",
                "expirationDate" : "10-12-2023",
                "country" : "Austria",
                "language" : "EN",
                "subscrive" : true
            }
        
    });
})
router.get("/club", (req, res) => {
    res.json({
        "clubList" : {   
            "id": 1,
            "address": "Fédération Internationale de Camping, Caravanning et Autocaravaning A.I.S.B.L. (F.I.C.C.) - Rue Belliard 20 - BE - 1040 Bruxelles",
            "email" : "info@ficc.org",
            "phone" : "+32 2 513 87 82",
            "website" : "www.campingcardinternational.com"
        }
    });
})
router.get("/card", (req, res) => {
    res.json({
        "cardUserList" : {
            "id": 1,
            "front_img" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/1bda64bc5cb949476a3cf88dc230277d/card-front.png",
            "back_img" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/4bc8b5be06f077322875dda7bcd80c5f/card-back.png",
            "club_logo": "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/31edc9400e126c66895f081b2e324052/ccca-logo.png",
            "club_qrcode": "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/23af51e6cc9b10a347d511700337907b/qr-code.png",
            "number": "4000 0200 0001",
            "name": "Joana Mendes",
            "address_street": "Estrada Nacional 242, No 12",
            "address_local": "2450-138 Nazaré, Portugal",
            "birth_date": "01/10/2020",
            "birth_place": "Nazaré",
            "passport": "1234567890",
            "issue_date": "01/10/2020",
            "issue_place": "Nazaré",
            "member": "CCI123",
            "nacionality": "Potuguese",
            "validity": "16/19/2020"
        }
    });
})
router.get("/campsites", (req, res) => {
    res.json({
        "campSites" : [
            {
                "entity_id" : "8647",
                "data_name" : "Turiscampo", 
                "data_type" : "campsite", 
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/e05ff6a94a691203c1d47875b48b006a/map-campsites.png",
                "data_country" : "Portugal", 
                "data_latitude" : 37.1019, 
                "data_longitude" : -8.73276, 
                "data_discount" : "10",
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                "data_image" : [
                    {
                        "id" : "0001",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0002",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0003",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0004",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8816",
                "data_name" : "Peniche Praia Camping", 
                "data_type" : "campsite", 
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/e05ff6a94a691203c1d47875b48b006a/map-campsites.png",
                "data_country" : "Portugal", 
                "data_latitude" : 39.3696, 
                "data_longitude" : -9.392, 
                "data_discount" : "15",
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                "data_image" : [
                    {
                        "id" : "0005",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0006",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0007",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0008",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ],
                  
            },
            {
                "entity_id" : "8898",
                "data_name" : "Vale Paraíso Natur Park", 
                "data_type" : "campsite",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                "data_country" : "Portugal", 
                "data_latitude" : 39.601875, 
                "data_longitude" : -9.071212,
                "data_discount" : "35", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                "data_image" : [
                    {
                        "id" : "0009",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0010",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0011",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0012",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ],

            },
            {
                "entity_id" : "8950",
                "data_name" : "Quinta Chave Grande", 
                "data_type" : "campsite",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/e05ff6a94a691203c1d47875b48b006a/map-campsites.png",
                "data_country" : "Espanha",
                "data_latitude" : 37.439974, 
                "data_longitude" : -3.276112, 
                "data_discount" : "55", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ],
            },
            {
                "entity_id" : "8951",
                "data_name" : "Banco Millenio", 
                "data_type" : "bank",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/531c258351dae7bcd1b672c37a6db174/map-money.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601873, 
                "data_longitude" : -9.0712178,
                "data_discount" : "60", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8952",
                "data_name" : "Restaurante O Veleiro", 
                "data_type" : "restaurant",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/a50654a1ac67654775d58d0438d6e575/map-restaurant.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601879, 
                "data_longitude" : -9.071219, 
                "data_discount" : "30", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8953",
                "data_name" : "Biblioteca Municipal",
                "data_type" : "books",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/e4fd70849c073d8f1d013f7b352bdfe3/map-book.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601856, 
                "data_longitude" : -9.071224, 
                "data_discount" : "75", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8954",
                "data_name" : "Parque de Caravanas",
                "data_type" : "caravans",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/de8c65b7c396d45a58fffe643696eccc/map-caravan.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601878, 
                "data_longitude" : -9.071218,
                "data_discount" : "55", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8955",
                "data_name" : "Jardim de Infancia",
                "data_type" : "children",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/c508adbad9e1b34cd5a57fc3c5a0b77f/map-babies.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601878, 
                "data_longitude" : -9.071218, 
                "data_discount" : "5", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8956",
                "data_name" : "Nazaré Shopping",
                "data_type" : "clothes",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/8b459e193cddebe02bf0caa7ce4d117a/map-clothes.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.6018698, 
                "data_longitude" : -9.071252, 
                "data_discount" : "50", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8957",
                "data_name" : "Estadio Municipal",
                "data_type" : "sport",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/8f304b71119fe7b58ff83df9568c8773/map-sports.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601876, 
                "data_longitude" : -9.071216, 
                "data_discount" : "25", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8958",
                "data_name" : "PC Diga",
                "data_type" : "tech",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/af938e021b1ba2e9fbec8eecc4750fe7/map-phone.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601878, 
                "data_longitude" : -9.071218, 
                "data_discount" : "5", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            },
            {
                "entity_id" : "8960",
                "data_name" : "Rodoviária",
                "data_type" : "travel",
                "data_icon" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/a1bd6e89ee91e93340952d609cb864fa/map-travel.svg",
                "data_country" : "Portugal",
                "data_latitude" : 39.601873, 
                "data_longitude" : -9.071216, 
                "data_discount" : "10", 
                "data_description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit id erat convallis maximus. Praesent nibh quam, laoreet quis arcu sed, commodo molestie tellus. Ut massa lacus, varius eget aliquet non, tincidunt eu nibh. Maecenas velit velit, facilisis id nulla et.",
                "data_street" : "Estrada Nacional 242 - Km 31",
                "data_city" : "2450 – 138  Nazaré",
                "data_phone" : "00351910288425",
                "data_url" : "https://campingcard.shareit.dev/en/",
                    "data_image" : [
                    {
                        "id" : "0013",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/0c626515dd572657c3431d01db4c1699/vale-paraiso-naturpark-big-4.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-1"
                    },
                    {
                        "id" : "0014",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/22e62f2a04ba41d9f3e89120b55529f4/vale-paraiso-naturpark-big-3.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-2"
                    },
                    {
                        "id" : "0015",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/2339af0a3ecbbf7ff33b9b41799c6192/vale-paraiso-naturpark-big-1.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-3"
                    },
                    {
                        "id" : "0016",
                        "url" : "https://trello-attachments.s3.amazonaws.com/5e173df63eabb48375ed2fad/5fa53ef60180bc8340a6abde/b173cd2f9d0b3de3c34152040b65af56/vale-paraiso-naturpark-big-2.jpg",
                        "alt_text" : "vale-paraiso-naturpark-big-4"
                    },
                ]
            }
        ]
    });
})
 // POST
router.post("/login", (req, res) => {
    const user =  [
        {
            "isLogin": true, 
            "email" : "nuno.s@shareit.dev",
            "password" : "Pass12345",
            "cardNumber" : "123456",
            "language" : "399"
        }
    ]
     res.status(200).send({user})
})
router.post("/forgotpass", (req, res) => {
    let isValidUser = true
    if (isValidUser) {
        res.status(200).send({
            messageStatus: "Success",
            messageSuccess: {
                title: "Recovery Password ",
                text: "To recover your password please check your email"
            }
        })
    } else {
        res.status(400).send({
            messageStatus: "Error",
            messageError: {
                title: "Invalid Email",
                text: "Please try again"
            }
        })
    }
})
router.post("/account", (req, res) => {
    let isValidFields = true
    if (isValidFields) {
        res.status(200).send({
            messageStatus: "Success",
            messageSuccess: {
                title: "Account Created with Success",
                text: "Please check your email box to verification your account"
            }
        })
    } else {
        res.status(400).send({
            messageStatus: "Error",
            messageError: {
                title: "Failed to Created an Account",
                text: "Invalid Fields, Please try again!",
                fields: [
                    {
                        "field" : "cardNumber",
                        "error": "invalid field"
                    }
                ]
            }
        })
    }
})

app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);