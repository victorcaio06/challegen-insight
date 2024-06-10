import SupplierNotFound from '@/components/SupplierNotFound';
import { SupplierData } from '@/utils/supplierDataTypes';
import EditSupplier from '@/views/EditSupplier';

export default async function EditSupplierPage({
  params,
}: {
  params: { id: string };
}) {
  async function getSupplier(id: string) {
    // TODO: Colocar em um try catch
    const response = await fetch('http://localhost:3000/api/suppliers/' + id, {
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

    const dataType = data.data as SupplierData;

    return { data: dataType };
  }

  const data = await getSupplier(params.id);

  if (!params.id || !data) return <SupplierNotFound />;

  return <EditSupplier data={data.data} />;
}
