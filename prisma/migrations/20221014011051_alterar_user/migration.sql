-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_transactionId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
