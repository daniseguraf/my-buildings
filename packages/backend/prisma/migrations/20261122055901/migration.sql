/*
  Warnings:

  - You are about to drop the `building_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `common_area_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "building_images" DROP CONSTRAINT "building_images_building_id_fkey";

-- DropForeignKey
ALTER TABLE "common_area_images" DROP CONSTRAINT "common_area_images_common_area_id_fkey";

-- DropTable
DROP TABLE "building_images";

-- DropTable
DROP TABLE "common_area_images";

-- CreateTable
CREATE TABLE "building_image" (
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "building_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common_area_image" (
    "id" SERIAL NOT NULL,
    "common_area_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "common_area_image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "building_image" ADD CONSTRAINT "building_image_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common_area_image" ADD CONSTRAINT "common_area_image_common_area_id_fkey" FOREIGN KEY ("common_area_id") REFERENCES "common_areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
