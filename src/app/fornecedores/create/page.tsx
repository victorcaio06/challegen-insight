import dynamic from 'next/dynamic';

const SupplierRegistration = dynamic(
  () => import('@/views/SupplierRegistration'),
  {
    ssr: false,
  }
);

export default async function CreateSupplierPage() {
  return <SupplierRegistration />;
}
