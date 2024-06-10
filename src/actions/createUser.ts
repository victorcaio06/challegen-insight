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
      console.log('🚀 ~ createUser ~ response:', await response.json());
      throw new Error('Erro ao criar o usuário, tente novamente');
    }

    const data = await response.json();

    console.log('🚀 ~ createUser ~ data:', data);

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
