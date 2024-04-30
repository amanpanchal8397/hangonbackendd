const express = require('express');
const { isAuthenticated } = require('../middlewares/auth');
const { allNotifications, readNotifications } = require('../controllers/Notifications');
const router = express.Router();
// router.route('/notifications').get(isAuthenticated,allNotifications);
router.route('/notifications').put(isAuthenticated,allNotifications);
router.route('/notifications').post(isAuthenticated,readNotifications);




module.exports = router;