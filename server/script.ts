import "dotenv/config";
import express from "express";
import routes from "./src/routes/routes";

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3000, () => {});