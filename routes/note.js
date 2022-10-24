const noteController = require("../controllers/noteController");

const router = require("express").Router();

//ADD NOTE
router.post("/", noteController.addNote);

//GET ALL NOTE
router.get("/", noteController.getAllNote);

//GET BY ID
router.get("/:id", noteController.getNoteById);

//DELETE NOTE
router.delete("/:id", noteController.deleteANote);

// Update note
router.put("/:id", noteController.updateNote) ;

module.exports = router;