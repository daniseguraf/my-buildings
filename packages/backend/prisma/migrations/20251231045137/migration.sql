/*
  Warnings:

  - The values [STAFF] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "buildings" DROP CONSTRAINT "buildings_manager_id_fkey";

-- DropTable
DROP TABLE "employees";

-- DropEnum
DROP TYPE "EmployeeRole";

-- DropEnum (if UserRole exists, drop it to recreate with correct values)
DROP TYPE IF EXISTS "UserRole";

-- CreateEnum (recreate UserRole with correct values, without STAFF)
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'RESIDENT');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'MANAGER',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "buildings" ADD CONSTRAINT "buildings_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
