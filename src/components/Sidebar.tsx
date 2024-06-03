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
import { Menu, MenuProps } from 'antd';
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
    {
      label: 'Produtos/Serviços',
      key: 'app',
      icon: <ProductOutlined />,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <FileOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];

  function mobileTriggerStyle(isMobile: boolean) {
    if (isMobile) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  function handleResize() {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Rest of the component code
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      // collapsedWidth="0"
      collapsedWidth={screenSize >= 768 ? undefined : 0}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      zeroWidthTriggerStyle={{
        // height: '48px',
        marginBottom: '8px',
        marginTop: '-50px',
        // marginLeft: '8px',
        // marginRight: '8px',
        // backgroundColor: 'transparent',
      }}
      // className="flex flex-col items-start justify-evenly"
      // style={{
      //   flex: 1,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      //   justifyItems: 'stretch',
      //   alignItems: 'stretch',
      //   backgroundColor: 'red',
      // }}
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
