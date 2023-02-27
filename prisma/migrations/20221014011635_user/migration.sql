/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_transactionId_fkey";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "usersId" TEXT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "transactionId";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
