const userController = require("../controllers/userController");

const router = require("express").Router();

//ADD NOTE
router.post("/", userController.addUser);

//GET ALL NOTE
router.get("/", userController.getAllUser);

router.get("/login", userController.login);

//router.get("/findByEmail", userController.getUserByEmail);

//GET BY ID
router.get("/:id", userController.getUserById);

//DELETE NOTE
router.delete("/:id", userController.deleteAUser);

// Update note
router.put("/:id", userController.updateUser) ;


module.exports = router;