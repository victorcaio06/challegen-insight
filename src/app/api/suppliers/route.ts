'use server';

import prisma from '@/databases/prisma/prismaClient';
import { SupplierData } from '@/utils/supplierDataTypes';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = (await request.json()) as SupplierData;

  if (!body.name) {
    return NextResponse.json(
      {
        success: false,
        message: 'Preencha todos os campos obrigatórios!',
        data: '',
      },
      { status: 400 }
    );
  }

  try {
    const supplier = await prisma.supplier.create({
      data: {
        name: body.name,
        state_registration: body.stateRegistration,
        municipal_registration: body.municipalRegistration,
        cnpj: body.cnpj,
        cpf: body.cpf,
        public_place: body.publicPlace,
        number: body.number,
        neighborhood: body.neighborhood,
        city: body.city,
        state: body.state,
        cell_phone: body.cellPhone,
        landline: body.landline,
        bank: body.bank,
        agency: body.agency,
        key_pix: body.keyPix,
        account: body.accountBank,
        account_type: body.accountType,
        contact_person: body.contactPerson,
        contact_position: body.contactPosition,
        observation: body.observations,
      },
    });

    if (supplier) {
      //return response JSON
      return NextResponse.json(
        {
          success: true,
          message: 'Fornecedor criado com sucesso!',
          data: supplier,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message ?? 'ERROR: tente novamente!',
        data: null,
      };
    }
    return NextResponse.json(
      {
        success: false,
        message: 'ERROR: tente novamente!',
        data: null,
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  const suppliers = await prisma.supplier.findMany();

  return NextResponse.json(
    {
      success: true,
      message: 'Lista de fornecedores!',
      data: suppliers,
    },
    {
      status: 200,
    }
  );
}
