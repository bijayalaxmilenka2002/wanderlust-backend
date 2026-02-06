//copied from usage part 
const cloudinary = require('cloudinary');
const  CloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.v2.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
});


//next we will define our storage part 
//this is copied from npmjs multer-storage
//from there usages

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedFormats: ["png","jpg","jpeg"], // supports promises as well
  },
});

module.exports={
    cloudinary,
    storage, 
};