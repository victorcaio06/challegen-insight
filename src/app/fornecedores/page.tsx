import PageWithoutContent from '@/components/PageWithoutContent';
import SuppliersListHeader from '@/components/SuppliersListHeader';
import { SupplierData } from '@/utils/supplierDataTypes';
import { Spin } from 'antd';
import dynamic from 'next/dynamic';

const ListSuppliers = dynamic(() => import('@/views/ListSuppliers'), {
  ssr: false,
});

let loading = true;

async function getListSuppliers() {
  // TODO: Colocar em um try catch
  const response = await fetch('http://localhost:3000/api/suppliers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  const dataType = data.data as SupplierData[];

  loading = false;
  return { data: dataType };
}

export default async function SupplierPage() {
  const data = await getListSuppliers();

  if (!data || data.data.length === 0) {
    return (
      <PageWithoutContent
        message="Nenhum fornecedor encontrado!"
        to="/fornecedores/create"
      />
    );
  }

  return (
    <>
      <SuppliersListHeader />

      {loading ? (
        <Spin size="default" style={{ margin: 'auto' }} />
      ) : (
        <ListSuppliers data={data.data} />
      )}
    </>
  );
}
