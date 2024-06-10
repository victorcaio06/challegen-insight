'use client';

import { UserOutlined } from '@ant-design/icons';
import { Button, Grid, Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

const { useBreakpoint } = Grid;

export default function Home() {
  const screens = useBreakpoint();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
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
            minHeight: screens.xs ? '591px' : '678px',
            padding: 24,
            backgroundImage:
              'url("/business-people-shaking-hands-together.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Title
            style={{
              color: 'black',
              marginTop: '100px',
              marginLeft: '50px',
              textAlign: 'left',
            }}
            level={1}
          >
            A UM CLICK DOS SEUS <br />
            FORNECEDORES
          </Title>
        </div>
      </Content>
    </Layout>
  );
}
