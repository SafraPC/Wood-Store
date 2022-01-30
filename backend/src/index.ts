/* eslint-disable no-console */
import express from "express";
import routes from "./routes";
import cors from "cors";
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(port, () => {
	console.log(`Server is Running on Port ${port}`);
});
