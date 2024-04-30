const express = require('express');
const { createPost, likeAndUnlikePost, deletePost, allPosts, updateCaption, addComment, deleteComment, anypost, savePost, interestedPost, likeAndUnlikeCommment, likedPost, commentedPost } = require('../controllers/Post');
const { isAuthenticated } = require('../middlewares/auth');


const router = express.Router();
router.route("/post/upload").post(isAuthenticated,createPost)
router.route("/post/:id").post(isAuthenticated, anypost).put(isAuthenticated, updateCaption);
router.route('/deletepost/:id').put(isAuthenticated,deletePost)
router.route('/likeandunlike/:id').put(isAuthenticated,likeAndUnlikePost)
router.route('/posts').put(isAuthenticated,allPosts);
router.route("/post/comment/:id").post(isAuthenticated,addComment).delete(isAuthenticated,deleteComment)
router.route("/savepost").put(isAuthenticated,savePost)
router.route("/interestedpost").put(isAuthenticated,interestedPost)
router.route('/likeandunlikecomment/:id').put(isAuthenticated,likeAndUnlikeCommment)
router.route('/likedpost').put(isAuthenticated,likedPost)
router.route('/commentedpost').put(isAuthenticated,commentedPost)
 
module.exports = router;


