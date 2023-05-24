const  mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports ={
    Movie: conn.model("Movie", require("./schemas/movieSchema")),
}