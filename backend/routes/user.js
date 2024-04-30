const express = require('express');
const { register, login,user, logout, updatePassword, userFollowAndUnfollow, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, notifications, allUser, blockUser, allUsers, forgotPassword, resetPassword, checkusername, checkemail, removeFollower } = require('../controllers/User');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login)
router.route('/follow/:id').put(isAuthenticated,userFollowAndUnfollow);
router.route('/logout').put(isAuthenticated,logout);
router.route('/update/password').put(isAuthenticated,updatePassword);
router.route('/update/profile').put(isAuthenticated,updateProfile);
router.route('/delete/me').put(isAuthenticated,deleteMyProfile)
router.route('/me').put(isAuthenticated, myProfile);

router.route('/user/:id').put(isAuthenticated,getUserProfile);
router.route('/users').put(isAuthenticated, getAllUsers); 

router.route('/allusers').put(isAuthenticated,allUsers); 
router.route('/blockuser').put(isAuthenticated, blockUser)
router.route('/user').put(isAuthenticated,allUser)
router.route('/forget/password').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/checkemail' ).put(checkemail)
router.route('/checkusername' ).put(checkusername)
router.route('/removefollower' ).put(isAuthenticated,removeFollower)

module.exports = router;
// MONGO_URI = 'mongodb+srv://amanpanchal:amanpanchal@cluster0.u0kyvjj.mongodb.net/?retryWrites=true&w=majority'
// MONGO_URI = "mongodb://0.0.0.0:27017/social";