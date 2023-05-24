const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getMovies);
router.post('/',middlewares.movieValidation, controllers.createMovie);
router.get('/', middlewares.idMovieValidation, controllers.getMovie)
module.exports = router;    