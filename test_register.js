const mongoose = require("mongoose");
const User = require("./models/user.js");

const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
    
    await User.deleteMany({ username: "admin" });
    
    const defaultUser = new User({
        _id: "6756eb34fd1d8b85e449e576",
        email: "admin@wanderlust.com",
        username: "admin"
    });
    
    const registeredUser = await User.register(defaultUser, "admin123");
    console.log("Seeded user:", registeredUser);
    
    await mongoose.disconnect();
}

main().catch(err => console.error(err));
