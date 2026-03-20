-- CreateTable
CREATE TABLE "Alunos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "cpf" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_email_key" ON "Alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_cpf_key" ON "Alunos"("cpf");
