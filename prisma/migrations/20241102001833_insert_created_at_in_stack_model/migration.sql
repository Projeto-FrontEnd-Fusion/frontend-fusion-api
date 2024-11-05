/*
  Warnings:

  - Added the required column `created_at` to the `user_stack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_stack" ADD COLUMN     "created_at" TEXT NOT NULL;
