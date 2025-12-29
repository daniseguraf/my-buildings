-- CreateEnum
CREATE TYPE "Amenities" AS ENUM ('PARKING', 'SECURITY_24_7', 'ELEVATOR', 'WHEELCHAIR_ACCESS', 'WHEELCHAIR_LIFT', 'FIRE_ALARM', 'CAMERAS');

-- AlterTable
ALTER TABLE "buildings" ADD COLUMN     "amenities" "Amenities"[];

-- AddForeignKey
ALTER TABLE "common_areas" ADD CONSTRAINT "common_areas_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
