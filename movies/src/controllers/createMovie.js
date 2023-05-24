const Movie = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const movie = req.body;
    const newMovie = await Movie.create(movie);
    response(res,201,newMovie);
}