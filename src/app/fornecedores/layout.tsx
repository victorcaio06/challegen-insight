import AppHeader from '@/components/AppHeader';
import Sidebar from '@/components/Sidebar';
import { ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

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
