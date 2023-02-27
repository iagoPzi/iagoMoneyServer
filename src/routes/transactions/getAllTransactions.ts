import { Request, Response } from "express";
import { prisma } from "../../prisma";


export async function GetAllTransactions(req: Request, res: Response) {
  const transactions = await prisma.transaction.findMany();

  return res.send(transactions);
}
