-- AlterTable
ALTER TABLE "user" ALTER COLUMN "date_of_birth" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user_sessions" ALTER COLUMN "updated_at" DROP NOT NULL;
