'use client';

import { UserOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, message, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

type MenuItem = Required<MenuProps>['items'][number];

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuItem[] = [
    {
      label: 'Contato',
      key: 'contact',
      // icon: <DatabaseOutlined />,
      onClick: () => {
        message.error('Página não implementada!');
      },
    },
    // {
    //   label: 'Produtos/Serviços',
    //   key: 'app',
    //   // icon: <ProductOutlined />,
    // },
    // {
    //   label: 'Navigation Three - Submenu',
    //   key: 'SubMenu',
    //   // icon: <FileOutlined />,
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         { label: 'Option 1', key: 'setting:1' },
    //         { label: 'Option 2', key: 'setting:2' },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         { label: 'Option 3', key: 'setting:3' },
    //         { label: 'Option 4', key: 'setting:4' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   key: 'alipay',
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    // },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={items}
          
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button icon={<UserOutlined />} iconPosition="start" href="/login">
          Entrar
        </Button>
      </Header>
      <Content>
        <div
          style={{
            background: colorBgContainer,
            minHeight: '678px',
            padding: 24,
            // borderRadius: borderRadiusLG,
            backgroundImage:
              'url("/business-people-shaking-hands-together.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </Content>
    </Layout>
  );
}
