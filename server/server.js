const express = require("express")
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require("cors")


mongoose.connect("mongodb+srv://apoorv:12345abcd12345@cluster0.volt9.mongodb.net/")
.then(()=>{
    console.log("MongoDB connected")
})
.catch((error)=>{
    console.log(error)
})

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : "http://localhost:5173/",
        methods : ['GET', "POST", "DELETE", "PUT"],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})