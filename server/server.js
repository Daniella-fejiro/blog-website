if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config")
const Post = require("./models/post");
const app = express();
const postRoutes = require("./routes/postRoutes")
const authRoutes = require('./routes/authRoutes')

app.use(cors());
app.use(express.json());

connectDB();

app.use("/posts", postRoutes);
app.use('/auth', authRoutes)

app.listen(5000 || process.env.port, () => console.log("Server running on port 5000"));