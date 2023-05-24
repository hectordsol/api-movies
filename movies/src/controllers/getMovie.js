const Movie = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const id = req.params;
    const movie = await Movie.get(id);
    response(res,201,movie);
}