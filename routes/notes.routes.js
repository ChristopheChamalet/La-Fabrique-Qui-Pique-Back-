const router = require("express").Router();
const postController = require("../controllers/notes.controller");

router.get("/", postController.readNote);
router.post("/", postController.createNote);
router.put("/:id", postController.updateNote);
router.delete("/:id", postController.deleteNote);
module.exports = router;
