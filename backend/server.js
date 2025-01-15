import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";

import productroutes from "./routes/product.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api.products", productroutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);

})
