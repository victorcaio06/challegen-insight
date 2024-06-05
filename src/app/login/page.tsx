import dynamic from 'next/dynamic';

const LoginView = dynamic(() => import('@/views/Login'), { ssr: false });

export default async function LoginPage() {
  return <LoginView />;
}
