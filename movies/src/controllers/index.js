const {catchedAsync}= require('../utils');

module.exports={
    getMovies: catchedAsync(require('./getMovies')),
    getMovie: catchedAsync(require('./getMovie')),
    createMovie: catchedAsync(require('./createMovie')),
}