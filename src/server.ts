import cors from "cors";
import express from "express";
import { transactionRoutes } from "./routes/transactions/transactions.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(transactionRoutes);

app.listen(process.env.PORT || 3333, () => {
  console.log("server running");
});
