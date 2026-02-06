// const mongoose=require("mongoose");
// const initdata=require("./data.js");
// const Listing = require("../models/listing.js");
// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

// main()
// .then(()=>{ 
//     console.log("connected to database");
// }).catch((err)=>{
//     console.log(err);   
// });

// async function main(){
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async()=>{
//     await Listing.deleteMany({});
//     initdata.data = initdata.data.map((obj) =>({...obj , owner :"6979e4dad1f353ebbe83c1a3"}));
//     const updatedData = initdata.data.map(listing => ({...listing,
//          image: listing.image.url 
//   }));
//     await Listing.insertMany(updatedData);
//     console.log("data was initialized:");

// };
//initDB();

const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to database");
}

main().catch(console.log);

const initDB = async () => {
  await Listing.deleteMany({});

  const updatedData = initdata.data.map(obj => ({
    ...obj,
    owner: "6979e4dad1f353ebbe83c1a3",
    image: {
      url: obj.image.url,
      filename: obj.image.filename
    }
  }));

  await Listing.insertMany(updatedData);
  console.log("data was initialized");
};

initDB();


