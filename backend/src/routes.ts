import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.send({ welcome: "Welcome Boy!" });
});

export default router;
