const mongoose = require('mongoose');


const connectDB= async () =>{
    try{
        mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log("MongoDB connected"))
            .catch(err => console.log(err));
        }
        catch(err){
            console.log("DB connection error:", err);
        }
}

module.exports = connectDB;