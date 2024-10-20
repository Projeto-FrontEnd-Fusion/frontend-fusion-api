-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,

    CONSTRAINT "pk_user" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sessions" (
    "id" TEXT NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "pk_session" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_media" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "baseUri" VARCHAR(100) NOT NULL,

    CONSTRAINT "pk_social_media" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_social_media" (
    "user_id" VARCHAR(50) NOT NULL,
    "social_media_id" VARCHAR(50) NOT NULL,

    CONSTRAINT "pk_user_social_media" PRIMARY KEY ("user_id","social_media_id")
);

-- CreateTable
CREATE TABLE "user_skill" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pk_skill" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uq_user_id" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_email" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "uq_session_id" ON "user_sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_session_user_id" ON "user_sessions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "uq_social_media_id" ON "social_media"("id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_social_media_name" ON "social_media"("name");

-- CreateIndex
CREATE UNIQUE INDEX "uq_social_media_base_uri" ON "social_media"("baseUri");

-- CreateIndex
CREATE UNIQUE INDEX "uq_user_social_media_user_id_social_media_id" ON "user_social_media"("user_id", "social_media_id");

-- CreateIndex
CREATE UNIQUE INDEX "uq_skill_id" ON "user_skill"("id");

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_media" ADD CONSTRAINT "fk_social_media_user_social_media" FOREIGN KEY ("social_media_id") REFERENCES "social_media"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_social_media" ADD CONSTRAINT "fk_user_user_social_media" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
