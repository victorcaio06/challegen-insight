'use server';

export default async function login() {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'bqZqQ@example.com',
      })
    });
    
  } catch (e) {}
}
