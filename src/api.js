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

router.get("/global", (req, res) => {
  res.json({
    "Translates" : {
        "OnboardScreen" : {
            "CampsitesTotal" : 3197,
            "CountriesTotal" : 40,
            "Get_discounts_in" : "Get discounts in",
            "Campsites_in" : "campsites in",
            "Countries" : "countries",
        },
        "SwipeScreen" : {
            "Please_rotate_device" : "Please rotate your device to portrait",
            "App_support_portrait" : "This app support portrait mode only",
        },
        "NotFoundScreen" : {
            "Page_not_fond" : "Page not fond",
            "Go_back" : "Go Back",
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
            "Register_now" : "Register now",
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
            "Edit_profile" : "Edit Profile",
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
            "Map" : "Map",
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
            "Select_all" : "Select All",
        },
        "Profile" : {
            "Profile" : "Profile",
            "Digital_card" : "Digital card",
            "Help" : "Help",
            "Contacts" : "Contacts",
            "Front_card" : "Front Card",
            "Back_card" : "Back Card",
            "Campsites" : "Campsites",
            "How_to_reset_my_password?" : "How to reset my password?",
            "How_to_get_my_CCI?" : "How to get my CCI?",
            "Address" : "Address",
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
  });
});
router.get("/signup", (req, res) => {
router.get("/help", (req, res) => {
  res.json({
    "helpList" : [
        {
            "title": "How to reset my password?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "title": "How to get my CCI?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "title": "How to reset my password?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        },
        {
            "title": "How to get my CCI?",
            "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque turpis. Morbi non justo dolor. Proin non diam vulputate, mollis nisl et, fringilla ipsum. Nulla id bibendum ex."
        }
    ]
});

router.post("/login", function(req, res) {
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
    let isValidUser = false
    
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
router.post("/account", function(req, res) {
    let isValidFields = false
    
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
                text: "Invalid Fields, Please try again!"
            }
        })
    }
})


app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);