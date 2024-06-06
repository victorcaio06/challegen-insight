import prisma from '@/databases/prisma/prismaClient';
import { NextRequest, NextResponse } from 'next/server';

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  //get request
  const { email, password } = (await request.json()) as LoginBody;

  if (!email || !password) {
    return NextResponse.json(
      {
        success: false,
        message: 'E-mail and password are required!',
        data: '',
      },
      { status: 400 }
    );
  }

  try {
    const login = await prisma.user.findUnique({
      where: { email },
      select: { name: true, email: true },
    });

    if (login) {
      //return response JSON
      return NextResponse.json(
        {
          success: true,
          message: 'Login Successfully!',
          data: login,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: 'ERROR: Login Failed!',
        data: '',
      },
      { status: 400 }
    );
  }
}
// end function to create note

// function to get all notes
// export async function GET() {
//   //get all notes
//   const notes = await prisma.notes.findMany();

//   //return response JSON
//   return NextResponse.json(
//     {
//       sucess: true,
//       message: 'List Data Notes',
//       data: notes,
//     },
//     {
//       status: 200,
//     }
//   );
// }
// end function to get all notes
