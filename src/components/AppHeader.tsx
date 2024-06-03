'use client';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';

export default function AppHeader() {
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      icon: <LogoutOutlined />,
      onClick: () => {
        message.info('Saindo 2');
        router.push('/');
      },
      label: 'Sair',
      danger: true,
      key: '3',
      style: {
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'center',
        margin: '0 auto',
        paddingLeft: '37px',
        textAlign: 'start',
      },
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Header className="!border-b !bg-white !border-[#f1f1f1] !flex !items-center !justify-end">
      <Dropdown
        menu={menuProps}
        trigger={['click']}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <Button type="text" iconPosition="end" icon={<UserOutlined />}>
          User
        </Button>
      </Dropdown>
    </Header>
  );
}
