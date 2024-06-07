import { Layout } from 'antd';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const AppHeader = dynamic(() => import('@/components/AppHeader'), {
  ssr: false,
});
const Content = dynamic(() => import('antd/es/layout/layout'), {
  ssr: false,
});

export default function SupplierLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />

      <Layout>
        <AppHeader />

        <Content style={{ marginLeft: '10px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
