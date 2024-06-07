-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state_registration" TEXT,
    "municipal_registration" TEXT,
    "cnpj" TEXT,
    "cpf" TEXT,
    "public_place" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cell_phone" TEXT NOT NULL,
    "landline" TEXT NOT NULL,
    "banck" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "key_pix" TEXT,
    "account" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "contact_person" TEXT NOT NULL,
    "contact_position" TEXT,
    "observation" TEXT,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_cnpj_key" ON "suppliers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_cpf_key" ON "suppliers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_key_pix_key" ON "suppliers"("key_pix");
