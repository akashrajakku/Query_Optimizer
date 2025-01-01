-- CreateTable
CREATE TABLE "QueryLog" (
    "id" SERIAL NOT NULL,
    "query" TEXT NOT NULL,
    "analysis" TEXT,
    "suggestions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QueryLog_pkey" PRIMARY KEY ("id")
);
