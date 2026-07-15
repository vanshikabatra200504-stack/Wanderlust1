const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const User = require("./models/user.js");

const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
    
    const listingCount = await Listing.countDocuments();
    const userCount = await User.countDocuments();
    console.log(`Listing Count: ${listingCount}`);
    console.log(`User Count: ${userCount}`);
    
    if (listingCount > 0) {
        const firstListing = await Listing.findOne().populate("owner");
        console.log("Sample Listing owner:", firstListing.owner);
    }
    
    const users = await User.find({});
    console.log("Registered Users:", users);
    
    await mongoose.disconnect();
}

main().catch(err => console.error(err));
