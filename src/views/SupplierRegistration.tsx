'use client';

import createSupplier, { SupplierData } from '@/actions/createSupplier';
import { brazilianStates } from '@/utils/brazilianStates';
import { InfoCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Form,
  FormProps,
  Input,
  Row,
  Select,
  message,
} from 'antd';
import Title from 'antd/es/typography/Title';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const SupplierRegistration: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    return null;
  };

  type FieldType = {
    accountBank: string | undefined;
    accountType: string | undefined;
    agency: string | undefined;
    bank: string | undefined;
    cellPhone: string | undefined;
    city: string | undefined;
    cnpj: string | undefined;
    contactPerson: string | undefined;
    contactPosition: string | undefined;
    cpf: string | undefined;
    publicPlace: string | undefined;
    keyPix: string | undefined;
    landline: string | undefined;
    municipalRegistration: string | undefined;
    nameSupplier: string | undefined;
    neighborhood: string | undefined;
    number: string | undefined;
    observations: string | undefined;
    state: string | undefined;
    stateRegistration: string | undefined;
  };

  const onFinish: FormProps<SupplierData>['onFinish'] = async (values) => {
    setLoading(true);

    if (values.cnpj === undefined && values.cpf === undefined) {
      message.error('Preencha o CNPJ OU o CPF!');

      return;
    }

    const response = await createSupplier(values);

    if (response) {
      if (response.ok) {
        setLoading(false);
        return router.push('/fornecedores');
      }

      message.error(response.error);
      setLoading(false);

      return;
    }
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
          layout: 'horizontal',
          style: { maxWidth: 600 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  return (
    <div style={{ marginTop: '10px' }}>
      <Title level={3}>Informações Básicas</Title>

      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        labelAlign="right"
        labelCol={{ flex: '160px' }}
        wrapperCol={{ flex: 1 }}
        style={
          {
            // // marginLeft: '4px',
            // marginRight: '4px',
            // // maxWidth: 600,
            // // marginTop: '2rem',
            // width: 'auto',
          }
        }
        onFinish={onFinish}
        onFinishFailed={(values) => {
          message.error('Preencha todos os campos obrigatórios!');
        }}
        autoComplete="off"
      >
        <Row justify={'start'} align={'middle'}>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '40%' }}
            offset={0}
          >
            <Form.Item
              label="Nome do fornecedor"
              name="nameSupplier"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '40%' }}
          >
            <Form.Item label="Inscrição estadual" name="stateRegistration">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '40%' }}
          >
            <Form.Item
              label="Inscrição municipal"
              name="municipalRegistration"
              tooltip={{
                title: 'Opcional',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Número de registro na prefeitura, se aplicável" />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '40%' }}
          >
            <Form.Item label="CNPJ" name="cnpj">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '40%' }}
          >
            <Form.Item
              label="CPF"
              name="cpf"
              tooltip={{
                title: 'Campo válido apenas para fornecedores que não CNPJ',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Title level={3}>Informações de Contato</Title>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '50%' }}
          >
            <Form.Item
              label="Logadouro"
              name="publicPlace"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Numero"
              labelCol={{ span: 5, offset: 2 }}
              labelAlign="left"
              name="number"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '35%' }}
          >
            <Form.Item
              label="Bairro"
              name="neighborhood"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '27%' }}
          >
            <Form.Item
              label="Cidade"
              labelCol={{ span: 5, offset: 2 }}
              labelAlign="left"
              name="city"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '27%' }}
          >
            <Form.Item
              label="Estado"
              labelCol={{ span: 5, offset: 2 }}
              labelAlign="left"
              name="state"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Select
                showSearch
                style={{ width: 170 }}
                placeholder="Ex: Ceará"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={brazilianStates}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* <Title level={4}>Telefone</Title> */}

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Telefone celular"
              name="cellPhone"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Telefone fixo"
              labelCol={{ span: 6.5, offset: 1 }}
              labelAlign="left"
              name="landline"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Title level={3}>Informações Financeiras</Title>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Banco"
              name="bank"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input placeholder="Nome do banco" />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Agência"
              labelCol={{ span: 6.5, offset: 1 }}
              labelAlign="left"
              name="agency"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Chave PIX"
              name="keyPix"
              tooltip={{
                title:
                  'Opcional. PIX para transações sem ser por conta bancária',
                icon: <InfoCircleOutlined />,
              }}
              labelCol={{ offset: 1 }}
            >
              <Input placeholder="CPF, CNPJ, EMAIL, TELEFONE, etc" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Conta"
              name="accountBank"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input placeholder="Digite o número da conta" />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Tipo de conta"
              labelCol={{ span: 6.5, offset: 1 }}
              labelAlign="left"
              name="accountType"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Select
                style={{ width: 150 }}
                options={[
                  { value: 'current', label: 'Conta corrente' },
                  { value: 'savings', label: 'Conta poupança' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Title level={3}>Informações Adicionais</Title>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '45%' }}
          >
            <Form.Item
              label="Pessoa de contato"
              name="contactPerson"
              required
              rules={[{ required: true, message: 'Preencha o campo!' }]}
            >
              <Input placeholder="Nome completo" />
            </Form.Item>
          </Col>

          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '30%' }}
          >
            <Form.Item
              label="Cargo do contato"
              labelCol={{ span: 6.5, offset: 1 }}
              labelAlign="left"
              name="contactPosition"
            >
              <Input placeholder="Ex: Gerente" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ flex: '80%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '47%' }}
          >
            <Form.Item label="Obervações" name="observations">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <div
          style={{
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'start',
            justifyItems: 'center',
            marginRight: '40px',
          }}
        >
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Adicionar fornecedor
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SupplierRegistration;
