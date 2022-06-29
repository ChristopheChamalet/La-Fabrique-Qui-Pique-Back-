const router = require("express").Router();
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");
const notesRouter = require("./notes.routes");

router.use("/api/lafabp/user", userRouter);
router.use("/api/lafabp/auth", authRouter);
router.use("/api/lafabp/notes", notesRouter);

module.exports = router;
