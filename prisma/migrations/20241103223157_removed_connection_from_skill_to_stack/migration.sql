/*
  Warnings:

  - You are about to drop the column `stackId` on the `user_skill` table. All the data in the column will be lost.
  - You are about to drop the column `is_visible` on the `user_stack` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_skill" DROP CONSTRAINT "user_skill_stackId_fkey";

-- AlterTable
ALTER TABLE "user_skill" DROP COLUMN "stackId";

-- AlterTable
ALTER TABLE "user_stack" DROP COLUMN "is_visible";
