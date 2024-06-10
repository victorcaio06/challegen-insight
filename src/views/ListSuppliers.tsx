'use client';

import { SupplierData } from '@/utils/supplierDataTypes';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Grid, Popconfirm, Space, Table, message, theme } from 'antd';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const { Column } = Table;

interface ListSuppliersProps {
  data: SupplierData[];
}

const ListSuppliers: React.FC<ListSuppliersProps> = (props) => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const router = useRouter();

  props.data.map((supplier) => {
    supplier.updated_at = format(supplier.updated_at, 'dd/MM/yyyy HH:mm');
  });

  async function handleDeleteSupplier(id: string) {
    const deleteSupplier = await fetch(
      `http://localhost:3000/api/suppliers/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (deleteSupplier.ok) {
      message.success('Fornecedor excluído com sucesso!');
      // Atualiza a página
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      message.error('Erro ao excluir o fornecedor, tente novamente!');
    }
  }

  useEffect(() => {
    // Quando a página é recarregada, a mensagem de sucesso é exibida por 1 segundo
    setTimeout(() => {
      message.destroy();
    }, 1000);
  }, []);

  return (
    <Table
      dataSource={props.data}
      style={{
        backgroundColor: theme.useToken().token.colorBgContainer,
        width: '100%',
        maxWidth: '90%',
        margin: '0 auto',
      }}
      bordered
      size="middle"
    >
      <Column title="Nome" dataIndex="name" key="name" align="center" />
      {/* <ColumnGroup title="Name">
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup> */}
      {/* <Column title="Age" dataIndex="age" key="age" /> */}
      <Column title="Banco" dataIndex="bank" key="bank" align="center" />
      <Column
        title="Última atualização"
        dataIndex="updated_at"
        key="updated_at"
        responsive={['md', 'lg']}
        align="center"
        // render={(tags: string[]) => (
        //   <>
        //     {tags.map((tag) => {
        //       let color = tag.length > 5 ? 'geekblue' : 'green';
        //       if (tag === 'loser') {
        //         color = 'volcano';
        //       }
        //       return (
        //         <Tag color={color} key={tag}>
        //           {tag.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </> cell_phone
        // )}
      />
      <Column
        title="Telefone"
        dataIndex="cell_phone"
        key="cell_phone"
        align="center"
      />
      <Column
        title="Ações"
        key="action"
        render={(_: any, record: SupplierData) => {
          if (record.id === undefined) {
            return (
              <Space size="middle">
                <a style={{ display: 'none' }}>
                  <EditOutlined />
                  {/* {record.firstName} */}
                </a>
                <a style={{ display: 'none' }}>
                  <DeleteOutlined />
                </a>
              </Space>
            );
          }

          return (
            <Space size="middle">
              <a
                onClick={() => {
                  // message.info('Em desenvolvimento');

                  router.push('/fornecedores/' + record.id);

                  return;
                }}
              >
                <EditOutlined style={{ fontSize: '17px' }} />
                {/* {record.firstName} */}
              </a>
              <Popconfirm
                title="Excluir fornecedor"
                description={`Tem certeza que deseja excluir esse fornecedor ${record.name}?`}
                onConfirm={() => {
                  if (record.id === undefined) return;

                  handleDeleteSupplier(record.id);
                }}
                // onCancel={() => {
                //   message.error('Operação cancelada!');
                // }}
                okText="Sim"
                cancelText="Não"
              >
                <DeleteOutlined
                  style={{ fontSize: '17px', color: '#1677ff' }}
                />
              </Popconfirm>
            </Space>
          );
        }}
        align={screen.xs ? 'start' : 'center'}
      />
    </Table>
  );
};

export default ListSuppliers;
