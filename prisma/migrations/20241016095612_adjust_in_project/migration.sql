-- DropForeignKey
ALTER TABLE "user_project" DROP CONSTRAINT "fk_user_user_project";

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
