import SupplierNotFound from '@/components/SupplierNotFound';
import { SupplierData } from '@/utils/supplierDataTypes';
import EditSupplier from '@/views/EditSupplier';

export default async function EditSupplierPage({
  params,
}: {
  params: { id: string };
}) {
  async function getSupplier(id: string) {
    try {
      const response = await fetch(
        'https://challegen-insight.vercel.app/api/suppliers/' + id,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }
      );

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      const dataType = data.data as SupplierData;

      return { data: dataType };
    } catch (error) {
      return null;
    }
  }

  const data = await getSupplier(params.id);

  if (!params.id || !data) return <SupplierNotFound />;

  return <EditSupplier data={data.data} />;
}
