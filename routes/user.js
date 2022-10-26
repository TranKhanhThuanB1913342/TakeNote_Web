const userController = require("../controllers/userController");

const router = require("express").Router();

//ADD NOTE
router.post("/", userController.addUser);

//GET ALL NOTE
router.get("/", userController.getAllUser);

//GET BY ID
router.get("/:id", userController.getUserById);

//DELETE NOTE
router.delete("/:id", userController.deleteAUser);

// Update note
router.put("/:id", userController.updateUser) ;

router.get("/findByEmail", userController.getUserByEmail);
module.exports = router;