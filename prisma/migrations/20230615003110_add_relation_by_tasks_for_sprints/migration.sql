-- AlterTable
ALTER TABLE "task" ADD COLUMN     "sprintsId" TEXT;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_sprintsId_fkey" FOREIGN KEY ("sprintsId") REFERENCES "sprints"("id") ON DELETE SET NULL ON UPDATE CASCADE;
