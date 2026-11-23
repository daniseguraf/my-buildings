-- CreateTable
CREATE TABLE "building_images" (
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "deleted_at" TIMESTAMPTZ(3),

    CONSTRAINT "building_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "building_images" ADD CONSTRAINT "building_images_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
