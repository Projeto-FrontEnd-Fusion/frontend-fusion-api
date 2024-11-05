/*
  Warnings:

  - Added the required column `category` to the `user_skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_skill" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "stackId" TEXT;

-- CreateTable
CREATE TABLE "user_stack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pk_stack" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uq_stack_id" ON "user_stack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_stack_name" ON "user_stack"("name");

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "user_stack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
