import { Router } from "express";
import { CreateTransaction } from "./createTransaction";
import { DeleteAllTransactions } from "./deleteAllTransaction";
import { DeleteTransaction } from "./deleteUniqueTransaction";
import { GetAllTransactions } from "./getAllTransactions";
import { GetUniqueTransaction } from "./getUniqueTransaction";
import { UpdateTransaction } from "./updateTransaction";


const transactionRoutes = Router();

transactionRoutes.post("/transactions", CreateTransaction);

transactionRoutes.get("/transactions", GetAllTransactions);

transactionRoutes.get("/transaction/:id", GetUniqueTransaction);

transactionRoutes.put("/transactionupdate/:id", UpdateTransaction);

transactionRoutes.delete("/transaction", DeleteTransaction);

transactionRoutes.delete("/transactions", DeleteAllTransactions);

export { transactionRoutes };
