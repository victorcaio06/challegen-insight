import AppHeader from '@/components/AppHeader';
import { ConfigProvider, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });

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
