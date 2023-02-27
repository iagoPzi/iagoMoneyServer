import { Request, Response } from "express";
import { prisma } from "../../prisma";

export async function DeleteAllTransactions(req: Request, res: Response) {
  await prisma.transaction.deleteMany({});

  return res.status(201).send();
}
