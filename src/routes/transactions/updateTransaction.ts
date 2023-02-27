
import { Request, Response} from "express";
import { prisma } from "../../prisma";


export async function UpdateTransaction(req:Request, res:Response) {
  const { titleUpdate, amountUpdate, categoryUpdate, typeUpdate } = req.body;

  const { id } = req.params;

  await prisma.transaction.update({
    where: {
      id: id,
    },
    data: {
      title: titleUpdate,
      amount: amountUpdate,
      category: categoryUpdate,
      type: typeUpdate,
    },
  });

  return res.status(201).send();
}
