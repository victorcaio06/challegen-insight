import prisma from '@/databases/prisma/prismaClient';
import { NextRequest, NextResponse } from 'next/server';

interface UserBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    //get request
    const { name, email, password } = (await request.json()) as UserBody;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email and password are required!',
          data: '',
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: 'E-mail já existe! Por favor, escolha outro.',
          data: '',
        },
        { status: 400 }
      );
    }

    const data = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Usuário criado com sucesso!',
        data: data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
        data: '',
      },
      { status: 500 }
    );
  }
}
