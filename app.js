if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride = require("method-override");
const ejsmate=require("ejs-mate");
const ExpressError= require("./utils/ExpressError.js");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash= require("connect-flash");
const passport= require("passport");
const LocalStrategy = require("passport-local");
const User= require("./models/user.js");
const listingRouter= require("./routes/listing.js");
const reviewRouter= require("./routes/review.js");
const userRouter= require("./routes/user.js");
const {isLoggedin} = require ("./middleware.js");


const dburl = process.env.ATLASDB_URL;

main()
    .then(()=>{
        console.log("connected to DB");
    }).catch(err=>{
        console.log(err);   
    });

async function main(){
    await mongoose.connect(dburl);
}

//for views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));//for req.params and  res.body reading
app.use(methodOverride("_method"));//for method override
app.engine('ejs',ejsmate);//for ejs-mate
app.use(express.static(path.join(__dirname,"/public")));//for public folder



const store =MongoStore.create({

  mongoUrl:process.env.ATLASDB_URL,
  secret: process.env.SECRET,
  touchAfter: 24 * 3600
});

store.on("error" , (err) =>{
    console.log("ERROR in Mongo Session Store" , err)
});


const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave: false, 
    saveUninitialized : true,
    cookie:{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000, //1week time in milisecond form
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly : true, // in security we have cross-scripting attack un se prevent karneke liye hum httponly use kar te hein
    },
};



app.use(session(sessionOptions));
app.use(flash());
//to use passport session is needed.
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy (User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//access flash(middleware defined)
app.use((req,res,next) =>{
            //variables//
    res.locals.success=req.flash("success") ;
    res.locals.error=req.flash("error")  ;
    res.locals.currUser = req.user  ; //stores current user information

    next();
});



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});

app.use((err,req,res,next)=>{

    if (res.headersSent) {
        return next(err);
    }

    let {statusCode=500,message="something went wrong"}=err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});
 
app.listen(8080,(req,res)=>{
    console.log("Server is listening to port 8080");
});























