import { Request, Response } from "express";
import { prisma } from "../../prisma";


export async function GetUniqueTransaction(req: Request, res: Response) {
  const { id } = req.params;

  const uniqueTransaction = await prisma.transaction.findUnique({
    where: {
      id: id,
    },
  });

  return res.json(uniqueTransaction);
}
