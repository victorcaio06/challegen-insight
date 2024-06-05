'use server';

interface UserData {
  name: string;
  email: string;
  password: string;
}

export default async function createUser({ name, email, password }: UserData) {
  console.log('chegou aqui!!!!!!!!!!!');

  // const name = formData.get('name') as string | null;
  // const email = formData.get('email') as string | null;
  // const password = formData.get('password') as string | null;

  try {
    if (!name || !email || !password) {
      throw new Error('Name, email and password are required!');
    }

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    console.log('🚀 ~ createUser ~ response:', response);
    if (!response.ok) {
      throw new Error('Erro ao criar o usuário, tente novamente');
    }

    const data = await response.json();
    if (response.ok) {
      return {
        data,
        ok: true,
        error: '',
      };
    }
  } catch (e) {
    if (e instanceof Error) {
      return {
        data: null,
        ok: false,
        error: e.message ?? 'Erro ao criar o usuário, tente novamente',
      };
    } else {
      return {
        data: null,
        ok: false,
        error: 'Erro ao criar o usuário, tente novamente',
      };
    }
  }
}
