-- CreateTable
CREATE TABLE "common_area_images" (
    "id" SERIAL NOT NULL,
    "common_area_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "common_area_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "common_area_images" ADD CONSTRAINT "common_area_images_common_area_id_fkey" FOREIGN KEY ("common_area_id") REFERENCES "common_areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
