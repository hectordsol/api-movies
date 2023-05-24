const axios = require("axios");
//const movies = require('./moviesDb.json');
module.exports = {
    list: async () => {
         const response = await axios.get("http://store:8004/Character");
         return response.data;
    },
    create: async(movie)=>{
        const response = await axios.post("http://store:8004/Character",movie);
        return response;
    },
    get: async(id)=>{
        const response = await axios.get(`http://store:8004/Character/${id}`);
        return response;
    }
}   