const express=require("express");
const router= express.Router({mergeParams:true});
const wrapAsyc= require("../utils/wrapAsyc.js");
const Listing=require("../models/listing.js");
const ExpressError= require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const{validateReview,isLoggedIn, isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");




//Post-review router
router.post("/" ,isLoggedIn,validateReview,wrapAsyc( reviewController.createReview));


//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsyc(reviewController.destroyReview));


module.exports=router;