import { Request, Response } from "express";
import { prisma } from "../../prisma";

export async function DeleteTransaction(req: Request, res: Response) {
  const { id } = req.body;

  await prisma.transaction.delete({
    where: {
      id: id,
    },
  });

  return res.send();
}
