import express from "express";
const router = express.Router();
import User from "./controllers/user";

router.get("/", (req, res) => {
	res.send({ welcome: "Welcome Boy!" });
});
router.get("/user", User.helloUser);

export default router;
