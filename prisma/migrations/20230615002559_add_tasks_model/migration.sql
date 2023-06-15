/*
  Warnings:

  - Changed the type of `status` on the `sprints` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "status_sprint_enum" AS ENUM ('ACTIVE', 'INACTIVE', 'CONCLUDED');

-- CreateEnum
CREATE TYPE "status_task_enum" AS ENUM ('DOING', 'STOPED', 'CONCLUDED', 'PENDING');

-- CreateEnum
CREATE TYPE "priority_enum" AS ENUM ('HIGH', 'LOW', 'AVERAGE');

-- AlterTable
ALTER TABLE "sprints" DROP COLUMN "status",
ADD COLUMN     "status" "status_sprint_enum" NOT NULL;

-- DropEnum
DROP TYPE "sprint_status_enum";

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "status_task_enum" NOT NULL DEFAULT 'PENDING',
    "priority" "priority_enum" NOT NULL DEFAULT 'LOW',
    "sprintPoint" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
