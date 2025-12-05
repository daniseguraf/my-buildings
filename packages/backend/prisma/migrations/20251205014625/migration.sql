/*
  Warnings:

  - You are about to drop the column `createdAt` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `propertyType` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `unitsCount` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `yearBuilt` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `buildingId` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `staff` table. All the data in the column will be lost.
  - You are about to drop the column `buildingId` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `commonAreas` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[building_id,floor,number]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_built` to the `buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `building_id` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `building_id` to the `units` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `units` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "commonAreas" DROP CONSTRAINT "commonAreas_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_buildingId_fkey";

-- AlterTable
ALTER TABLE "buildings" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "phoneNumber",
DROP COLUMN "postalCode",
DROP COLUMN "propertyType",
DROP COLUMN "unitsCount",
DROP COLUMN "updatedAt",
DROP COLUMN "yearBuilt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "postal_code" TEXT,
ADD COLUMN     "property_type" "PropertyType" NOT NULL DEFAULT 'RESIDENTIAL',
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "year_built" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "staff" DROP COLUMN "buildingId",
DROP COLUMN "createdAt",
DROP COLUMN "endDate",
DROP COLUMN "startDate",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "building_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "units" DROP COLUMN "buildingId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "building_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL;

-- DropTable
DROP TABLE "commonAreas";

-- CreateTable
CREATE TABLE "common_areas" (
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "capacity" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "common_areas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "units_building_id_idx" ON "units"("building_id");

-- CreateIndex
CREATE UNIQUE INDEX "units_building_id_floor_number_key" ON "units"("building_id", "floor", "number");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common_areas" ADD CONSTRAINT "common_areas_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
