import express from "express";
import flashCardRoutes from "./routes/flashCard.route.js";

// import cors from 'cors';
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";
dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 3000;
// app.use(cors());
app.use(express.json());

app.use("/api/v1/flashcard", flashCardRoutes);

app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
