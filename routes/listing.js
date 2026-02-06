const express=require("express");
const router= express.Router();
const Listing=require("../models/listing.js");
const wrapAsyc= require("../utils/wrapAsyc.js");
const { isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");

const multer = require("multer");
const {storage} = require ("../cloudconfig.js");
const upload = multer({storage});


//New Route
router.get("/new", isLoggedIn , listingController.renderNewForm);

router
    .route("/")
    .get(wrapAsyc(listingController.index))

    .post(
        isLoggedIn, 
        validateListing,
        upload.single('listing[image]') ,//multer jo hai wo image ke format mein data le ayega req.file kii madat sa
        //validateListing,
        wrapAsyc(listingController.createListing)
    );


router.route("/:id")
.get(wrapAsyc (listingController.showListing))
.put(
    isLoggedIn,
    isOwner, 
    validateListing,
    upload.single('listing[image]'),
    //validateListing,
    wrapAsyc(listingController.updateListing))
.delete( 
    isLoggedIn,
    isOwner, 
    wrapAsyc (listingController.destroyListing)
);

//edit route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsyc(listingController.renderEditForm));

module.exports=router;