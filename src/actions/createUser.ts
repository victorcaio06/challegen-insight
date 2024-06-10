'use server';

interface UserData {
  name: string;
  email: string;
  password: string;
}

export default async function createUser({ name, email, password }: UserData) {
  try {
    if (!name || !email || !password) {
      throw new Error('Name, email and password are required!');
    }

    const response = await fetch(
      'https://challegen-insight.vercel.app/api/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const data = await response.json();

      if (data.message === 'Email already exists!') {
        throw new Error('Email already exists!');
      }
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
