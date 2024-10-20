/*
  Warnings:

  - Added the required column `created_at` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TEXT NOT NULL,
ALTER COLUMN "date_of_birth" SET DATA TYPE TEXT;
