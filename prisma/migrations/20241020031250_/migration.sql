/*
  Warnings:

  - A unique constraint covering the columns `[ip]` on the table `user_sessions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "uq_session_user_id";

-- CreateIndex
CREATE UNIQUE INDEX "uq_ip" ON "user_sessions"("ip");
