'use client';

import React, { useEffect, useState } from 'react';

import {
  Button,
  Card,
  Checkbox,
  Form,
  Grid,
  Input,
  theme,
  Typography,
} from 'antd';

import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import createUser from '@/actions/createUser';
import { useRouter } from 'next/navigation';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

type Teste = { data: null; ok: boolean; error: string } | undefined;

export default function CreateUser() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Teste>(undefined);
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = async (values: any) => {
    setLoading(true);
    const { name, email, password } = values;

    if (!name || !email || !password) {
      setLoading(false);
      alert('Name, email and password are required!');

      return;
    }

    const response = await createUser({ name, email, password });
    console.log('🚀 ~ onFinish ~ response:', response);
    // setData(response);
    if (response?.error !== '') {
      alert(response?.error);
      setLoading(false);
    } else if (response.data !== null && response.ok) {
      setLoading(false);
      console.log('🚀 ~ onFinish ~ response.data:', response.data);
      return router.push('/fornecedores');
    }
    // dispatch({ name, email, password });
  };

  // useEffect(() => {
  //   if(data?.error !== '') {
  //     alert(data?.error);
  //   }

  //   if(data?.data !== null) {
  //     alert(data?.data);
  //   }
  // }, [data]);

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
      {/* <Card
        style={{
          width: screens.xs ? undefined : '380px',
          // margin: '0 auto',
          border: '1px solid #ccc',
          borderRadius: '10px',
          // height: '80vh',
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      > */}
      <section
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
          // height: screens.sm ? '90vh' : 'auto',
          // height: 'auto',

          padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
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
            {/* <Text style={styles.text}>
              Welcome back to AntBlocks UI! Please enter your details below to
              sign in.
            </Text> */}
          </div>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
            // action={action}
          >
            <Form.Item
              name="name"
              label="Nome"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: 'Please input your name!',
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
                  required: true,
                  message: 'Please input your Email!',
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
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Digite sua senha"
              />
            </Form.Item>
            {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
                <a style={{ float: 'right' }} href="">
                  Esqueceu a senha?
                </a>
              </Form.Item> */}
            <Form.Item style={{ marginBottom: '0px' }}>
              <Button block type="primary" htmlType="submit" loading={loading}>
                Criar
              </Button>
              <div
                style={{
                  marginTop: token.marginLG,
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                {/* <Text style={styles.text}>Não tem uma conta? </Text>{' '}
                  <Link href="">Inscreva-se agora</Link> */}
              </div>
            </Form.Item>
          </Form>
        </div>
      </section>
      {/* </Card> */}
    </div>
  );
}
