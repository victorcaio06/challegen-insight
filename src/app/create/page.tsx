import dynamic from 'next/dynamic';

const CreateUser = dynamic(() => import('@/views/CreateUser'), { ssr: false });

export default async function CreatePage() {
  return <CreateUser />;
}
