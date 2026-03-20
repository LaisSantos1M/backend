/*
  Warnings:

  - You are about to drop the column `name` on the `Alunos` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Alunos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alunos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Alunos" ("cpf", "createdAt", "email", "id", "idade", "updatedAt") SELECT "cpf", "createdAt", "email", "id", "idade", "updatedAt" FROM "Alunos";
DROP TABLE "Alunos";
ALTER TABLE "new_Alunos" RENAME TO "Alunos";
CREATE UNIQUE INDEX "Alunos_email_key" ON "Alunos"("email");
CREATE UNIQUE INDEX "Alunos_cpf_key" ON "Alunos"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
