const Movie = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const movies = await Movie.list();
    response(res, 200, movies);
}