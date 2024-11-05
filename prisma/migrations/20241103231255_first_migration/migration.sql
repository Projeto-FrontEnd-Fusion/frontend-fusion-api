/*
  Warnings:

  - You are about to drop the column `skill` on the `user_skill` table. All the data in the column will be lost.
  - Added the required column `name` to the `user_skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_skill" DROP COLUMN "skill",
ADD COLUMN     "name" TEXT NOT NULL;
