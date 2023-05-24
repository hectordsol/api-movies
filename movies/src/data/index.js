const axios = require("axios");
//const movies = require('./moviesDb.json');
module.exports = {
    list: async () => {
         const response = await axios.get("http://store:8004/Movie");
         return response.data;
    },
    create: async(movie)=>{
        const response = await axios.post("http://store:8004/Movie",movie);
        return response;
    },
    get: async(id)=>{
        const response = await axios.get(`http://store:8004/Movie/${id}`);
        return response;
    }
}   