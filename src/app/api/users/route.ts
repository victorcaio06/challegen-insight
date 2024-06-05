import prisma from '@/databases/prisma/prismaClient';
import { NextRequest, NextResponse } from 'next/server';

interface UserBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  //get request
  const { name, email, password } = (await request.json()) as UserBody;

  console.log('🚀 ~ POST ~ name, email, password:', name, email, password);

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

  //create notes
  const data = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: 'Note Created Successfully!',
      data: data,
    },
    { status: 201 }
  );
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
