-- CreateTable
CREATE TABLE "user_career" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "pk_career" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career_tool" (
    "id" TEXT NOT NULL,
    "career_id" TEXT,
    "name" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "pk_tool" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uq_career_id" ON "user_career"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_tool_id" ON "career_tool"("id");

-- AddForeignKey
ALTER TABLE "career_tool" ADD CONSTRAINT "career_tool_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "user_career"("id") ON DELETE SET NULL ON UPDATE CASCADE;
