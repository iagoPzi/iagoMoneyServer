import { Request, Response } from "express";
import { prisma } from "../../prisma";

export async function CreateUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const newUser = await prisma.users.create({
    data: {
      name,
      email,
    },
  });

  return res.send(201);
}
