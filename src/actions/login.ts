'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.SECRET_JWT ?? 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login(email: string, password: string) {
  try {
    const response = await fetch('https://challegen-insight.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      cache: 'no-store',
    });

    if (!response.ok)
      throw new Error('Erro ao realizar o login, tente novamente!');

    if (response.ok) {
      const data = await response.json();

      const user = {
        email: data.data.email,
        name: data.data.name,
      };
      const expires = new Date(Date.now() + 10 * 1000);
      const session = await encrypt({ user, expires });

      // Save the session in a cookie
      cookies().set('session', session, { expires, httpOnly: true });

      return {
        ok: true,
        data,
        error: '',
      };
    }
  } catch (e: any) {
    if (e instanceof Error) {
      return {
        ok: false,
        data: null,
        error: e.message,
      };
    } else {
      return {
        error:
          (e.message as string) ??
          ('Erro ao realizar o login, tente novamente!' as string),
        data: null,
        ok: false,
      };
    }
  }
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
