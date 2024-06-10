'use client';
import { useEffect, useState } from 'react';

import {
  DatabaseOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  ProductOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps, message } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

export default function Sidebar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: 'Fornecedores',
      key: 'supplier',
      icon: <DatabaseOutlined />,
      onClick: () => {
        router.push('/fornecedores');
      },
    },
  ];

  function handleResize() {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      collapsedWidth={screenSize >= 768 ? undefined : 0}
      zeroWidthTriggerStyle={{
        marginBottom: '8px',
        marginTop: '-50px',
      }}
    >
      <div className="flex flex-1 items-center justify-center mt-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </div>

      <div className="w-full" style={{ width: '100%' }}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['supplier']}
          mode="inline"
          items={items}
          style={{
            marginTop: '8px',
          }}
        />
      </div>
    </Sider>
  );
}
