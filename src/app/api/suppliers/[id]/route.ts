import prisma from '@/databases/prisma/prismaClient';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const deleteSupplier = await prisma.supplier.delete({
    where: { id },
  });

  return NextResponse.json(
    {
      success: true,
      message: 'Fornecedor excluído com sucesso!',
      data: deleteSupplier,
    },
    {
      status: 200,
    }
  );
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();

  try {
    const updateSupplier = await prisma.supplier.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Fornecedor atualizado com sucesso!',
        data: '',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Ocorreu um erro ao atualizar o fornecedor!',
        data: '',
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const supplier = await prisma.supplier.findUnique({
    where: { id },
  });

  if (!supplier) {
    return NextResponse.json(
      {
        success: false,
        message: 'Fornecedor não encontrado!',
        data: '',
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(
    {
      success: true,
      message: 'Fornecedor recuperado com sucesso!',
      data: supplier,
    },
    {
      status: 200,
    }
  );
}
