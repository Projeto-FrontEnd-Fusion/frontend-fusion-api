-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pk_project" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uq_project_id" ON "Project"("id");
