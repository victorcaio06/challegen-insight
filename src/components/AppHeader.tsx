'use client';

import { getSession, logout } from '@/actions/login';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AppHeader() {
  const [loading, setLoading] = useState(false);

  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const session = async () => {
      const session = await getSession();
      setSession(session);
    };

    session();
  }, []);

  const items: MenuProps['items'] = [
    {
      icon: <LogoutOutlined spin={loading} />,
      onClick: async () => {
        setLoading(true);

        await logout();

        router.push('/');

        setLoading(false);
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
        margin: '0 0',
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
          {session?.user.name}
        </Button>
      </Dropdown>
    </Header>
  );
}
