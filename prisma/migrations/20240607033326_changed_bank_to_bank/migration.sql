/*
  Warnings:

  - You are about to drop the column `banck` on the `suppliers` table. All the data in the column will be lost.
  - Added the required column `bank` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "banck",
ADD COLUMN     "bank" TEXT NOT NULL;
