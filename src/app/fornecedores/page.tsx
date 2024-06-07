import PageWithoutContent from '@/components/PageWithoutContent';
import SupplierRegistration from '@/views/SupplierRegistration';

export default async function SupplierPage() {
  return (
    <PageWithoutContent
      message="Nenhum fornecedor encontrado!"
      to="/fornecedores/create"
    />
  );
}
