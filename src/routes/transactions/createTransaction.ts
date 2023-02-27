import { Request, Response } from "express";
import { prisma } from "../../prisma";

export async function CreateTransaction(req: Request, res: Response) {
  const { title, amount, category, type } = req.body;

  const newTransaction = await prisma.transaction.create({
    data: {
      title,
      amount,
      category,
      type,
      createdAt: new Date(),
    },
  });

  return res.send(201);
}
