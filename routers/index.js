const router = require('express').Router();
const UserController = require('../controllers/user-controller');
const Controller = require('../controllers/ygdb-controller');
const auth = require('../middlewares/auth');

router.get('/login', UserController.login);
router.post('/login', UserController.postLogin);
router.get('/signup', UserController.signup);
router.post('/signup', UserController.postSignup);
router.get('/logout', UserController.logout);

router.use(auth);

router.get('/', Controller.ladingPage);
router.get('/youtubers', Controller.listYoutuber);
router.get('/youtuber-profile/:name', Controller.youtuberProfile);
router.get('/games', Controller.listGame);
router.get('/game-profile/:name', Controller.gameProfile);
router.get('/profile', Controller.userProfile);
router.get('/subscribe/:id/:name', Controller.subscribe);
router.get('/unsubscribe/:id/:name', Controller.unsubscribe);
router.get('/edit-profile/:username', Controller.getEditProfile);
router.post('/edit-profile/:username', Controller.postEditProfile);
router.get('/youtuber-charts', Controller.youtuberCharts);

module.exports = router;
