'use client';

import { useState } from 'react';

import { Button, Form, Grid, Input, message, theme, Typography } from 'antd';

import createUser from '@/actions/createUser';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Title } = Typography;

export default function CreateUser() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = async (values: any) => {
    setLoading(true);
    const { name, email, password } = values;

    if (!name || !email || !password) {
      setLoading(false);
      message.error('Nome, email e senha são obrigatórios!');

      return;
    }

    const response = await createUser({ name, email, password });

    // setData(response);
    if (response?.error !== '') {
      console.log('🚀 ~ onFinish ~ response?.error:', response?.error);
      message.error('Erro ao criar o usuário, tente novamente!');
      setLoading(false);
    } else if (response.data !== null && response.ok) {
      setLoading(false);
      return router.push('/fornecedores');
    }
  };

  const styles = {
    container: {
      margin: '0 auto',
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: '380px',
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: 'center',
      width: '100%',
    },
    forgotPassword: {
      float: 'right',
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: 'center',
      backgroundColor: token.colorBgContainer,
      display: 'flex',
      height: screens.xs ? '100vh' : 'auto',
      padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <div
      className="!bg-slate-300"
      style={{
        backgroundColor: '#f1f5f9',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
          // height: screens.sm ? '90vh' : 'auto',
          // height: 'auto',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            padding: screens.md
              ? `${token.paddingXL}px`
              : `${token.sizeXXL}px ${token.padding}px`,
            width: screens.xs ? '300px' : '380px',
          }}
        >
          <div
            style={{
              marginBottom: token.marginSM,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src={'/logo.png'}
              alt="Logo da empresa"
              width={60}
              height={60}
              loading="lazy"
            />

            <Title style={styles.title}>Criar conta</Title>
          </div>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="name"
              label="Nome"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Digite seu nome!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Digite seu nome completo"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'O e-mail não é um e-mail válido!',
                },
                {
                  required: true,
                  message: 'Digite seu melhor e-mail!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Digite seu melhor e-mail"
              />
            </Form.Item>
            <Form.Item
              label="Senha"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Digite sua senha!',
                },
                {
                  min: 8,
                  message: 'Sua senha deve ter pelo menos 8 dígitos!',
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Digite sua senha"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirme sua senha"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Por favor confirme sua senha!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('As senhas não correspondem.')
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirme sua senha"
              />
            </Form.Item>

            <Form.Item style={{ marginBottom: '0px', marginTop: '20px' }}>
              <Button block type="primary" htmlType="submit" loading={loading}>
                Criar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
      {/* </Card> */}
    </div>
  );
}
