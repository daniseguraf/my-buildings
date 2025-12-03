/*
  Warnings:

  - You are about to drop the column `avenue` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `buildings` table. All the data in the column will be lost.
  - Added the required column `address` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Made the column `yearBuilt` on table `buildings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "buildings" DROP COLUMN "avenue",
DROP COLUMN "number",
DROP COLUMN "street",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "yearBuilt" SET NOT NULL;
