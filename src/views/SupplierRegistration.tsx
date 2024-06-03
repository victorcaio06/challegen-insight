'use client';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const SupplierRegistration: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    return null;
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
    <div>
      <Title level={3}>Informações Básicas</Title>

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
          // marginLeft: '4px',
          marginRight: '4px',
          // maxWidth: 600,
          // marginTop: '2rem',
          width: '100%',
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

        <Divider />

        <Title level={3}>Informações de Contato</Title>
        <Form.Item label="Endereço" name="endereco" required>
          <Input placeholder="Insira o endereço" />
        </Form.Item>

        <Divider />

        <Title level={3}>Informações Financeiras</Title>
        <Form.Item label="Banco" name="bank" required>
          <Input placeholder="Insira os dados do banco" />
        </Form.Item>

        <Divider />

        <Title level={3}>Informações Adicionais</Title>
        <Form.Item label="Pessoa de contato" name="peopleContact" required>
          <Input placeholder="Pessoa de contato" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupplierRegistration;
