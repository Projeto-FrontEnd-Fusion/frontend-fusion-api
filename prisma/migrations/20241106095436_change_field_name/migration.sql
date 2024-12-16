/*
  Warnings:

  - You are about to drop the column `coordinator` on the `user_team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_team" DROP COLUMN "coordinator",
ADD COLUMN     "coordinatorId" TEXT;
