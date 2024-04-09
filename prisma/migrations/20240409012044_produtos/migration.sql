-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);
