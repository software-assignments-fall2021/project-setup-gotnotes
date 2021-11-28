var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../Controllers");

router.post("/", userController.user_detail);

router.post("/edit", (req, res) => {
  res.send("Account edit req by user: USER_ID");
});

/* /// COURSE ROUTES ///

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', userController.user_create_get);

// POST request for creating Book.
router.post('/book/create', userController.user_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', userController.user_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', userController.user_delete_post);

// GET request to update Book.
router.get('/book/:id/update', userController.user_update_get);

// POST request to update Book.
router.post('/book/:id/update', userController.user_update_post);

// GET request for one Book.
router.get('/book/:id', userController.user_detail);

// GET request for list of all Book items.
router.get('/books', userController.user_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', user_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance/create', user_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', user_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', user_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', user_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', user_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', user_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', user_instance_controller.bookinstance_list); */

module.exports = router;
