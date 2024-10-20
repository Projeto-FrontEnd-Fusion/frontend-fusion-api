/*
  Warnings:

  - Added the required column `userId` to the `user_project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_project" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "fk_user_user_project" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
