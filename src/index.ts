import express from "express";
import cors from 'cors';
import { setupSwagger } from './docs/swaggerConfig';
import corsOptions from "./config/corsConfig";

const app = express();


setupSwagger(app);
app.use(cors(corsOptions));



app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});