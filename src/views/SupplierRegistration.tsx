'use client';

import React, { useState } from 'react';
import { Button, Form, Input, Radio, Typography } from 'antd';
import { green } from '@ant-design/colors';
import style from './SupplierRegistration.module.css';
import { InfoCircleOutlined } from '@ant-design/icons';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const SupplierRegistration: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      labelAlign="left"
      labelCol={{ flex: '160px' }}
      wrapperCol={{ flex: 1 }}
      style={{
        marginLeft: '2rem',
        maxWidth: 600,
      }}
    >
      <Form.Item label="Nome do fornecedor" name="fieldA" required>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="CNPJ">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Inscrição estadual">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Inscrição municipal"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="Número de registro na prefeitura, se aplicável" />
      </Form.Item>
      <Form.Item
        label="CPF"
        required={false}
        tooltip={{
          title: 'Campo válido apenas para fornecedores que não CNPJ',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default SupplierRegistration;
