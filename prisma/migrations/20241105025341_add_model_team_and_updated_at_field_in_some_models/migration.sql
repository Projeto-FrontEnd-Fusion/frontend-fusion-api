/*
  Warnings:

  - You are about to drop the column `addressId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isEmailVerified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "fk_user_address";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "addressId",
DROP COLUMN "isEmailVerified",
DROP COLUMN "isVerified",
ADD COLUMN     "address_id" TEXT,
ADD COLUMN     "is_email_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "team_id" TEXT,
ADD COLUMN     "updated_at" TEXT;

-- AlterTable
ALTER TABLE "user_project" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "user_team" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT,
    "coordinator" TEXT NOT NULL,

    CONSTRAINT "pk_team" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uq_team_id" ON "user_team"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_team_name" ON "user_team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "created_at" ON "user_team"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "updated_at" ON "user_team"("updatedAt");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "fk_user_address" FOREIGN KEY ("address_id") REFERENCES "user_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "user_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
