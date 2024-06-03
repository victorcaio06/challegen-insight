'use client';

import React from 'react';

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

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function App() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
      height: screens.sm ? '100vh' : 'auto',
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
      <Card
        style={{
          width: '450px',
          margin: '0 auto',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      >
        <section
          style={{
            alignItems: 'center',
            backgroundColor: token.colorBgContainer,
            display: 'flex',
            // height: screens.sm ? '90vh' : 'auto',
            padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              padding: screens.md
                ? `${token.paddingXL}px`
                : `${token.sizeXXL}px ${token.padding}px`,
              width: '380px',
            }}
          >
            <div
              style={{
                marginBottom: token.marginXL,
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
              />

              <Title style={styles.title}>Entrar</Title>
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
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
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
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}
                <a style={{ float: 'right' }} href="">
                  Forgot password?
                </a>
              </Form.Item>
              <Form.Item style={{ marginBottom: '0px' }}>
                <Button block type="primary" htmlType="submit">
                  Log in
                </Button>
                <div
                  style={{
                    marginTop: token.marginLG,
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <Text style={styles.text}>Não tem uma conta? </Text>{' '}
                  <Link href="">Inscreva-se agora</Link>
                </div>
              </Form.Item>
            </Form>
          </div>
        </section>
      </Card>
    </div>
  );
}
