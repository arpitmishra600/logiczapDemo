const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.log("Error connecting to the database", error);
    });
}