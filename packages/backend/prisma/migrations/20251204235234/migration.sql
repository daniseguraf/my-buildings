/*
  Warnings:

  - Added the required column `capacity` to the `commonAreas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `commonAreas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `commonAreas` table without a default value. This is not possible if the table is not empty.
  - Made the column `buildingId` on table `commonAreas` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `role` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Made the column `buildingId` on table `staff` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('APARTMENT', 'OFFICE', 'COMMERCIAL');

-- CreateEnum
CREATE TYPE "UnitStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "StaffRole" AS ENUM ('MANAGER', 'SECURITY', 'MAINTENANCE', 'OTHER');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'RESIDENT', 'STAFF');

-- DropForeignKey
ALTER TABLE "commonAreas" DROP CONSTRAINT "commonAreas_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_buildingId_fkey";

-- AlterTable
ALTER TABLE "buildings" ADD COLUMN     "unitsCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "commonAreas" ADD COLUMN     "capacity" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "buildingId" SET NOT NULL;

-- AlterTable
ALTER TABLE "staff" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "role" "StaffRole" NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "buildingId" SET NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "buildingId" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,
    "type" "UnitType" NOT NULL,
    "status" "UnitStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commonAreas" ADD CONSTRAINT "commonAreas_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
