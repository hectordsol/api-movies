const Movie = require('../data');
const {ClientError} =require('../utils/errors')

module.exports = async (req, res, next) => {
    const id = req.params;
    const movie = await Movie.get(id);
    if (movie) return next;
    else throw new ClientError('id no existe', 401);
}
