-- DropForeignKey
ALTER TABLE "common_areas" DROP CONSTRAINT "common_areas_building_id_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_building_id_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_building_id_fkey";

-- AlterTable
ALTER TABLE "staff" ALTER COLUMN "end_date" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "start_date" SET DATA TYPE TIMESTAMPTZ(6);
