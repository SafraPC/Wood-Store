import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.listen(8080, () => {
	console.log("Server is Running on Port 8080");
});
