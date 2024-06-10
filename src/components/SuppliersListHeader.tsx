'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Grid } from 'antd';
import Title from 'antd/es/typography/Title';

export default function SuppliersListHeader() {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: '20px', marginTop: '10px', width: '100%' }}
        // vertical={screen.xs}
      >
        <Title
          ellipsis
          level={screen.xs ? 4 : 3}
          style={{ marginLeft: '35px' }}
        >
          Fornecedores
        </Title>

        <Button
          iconPosition="start"
          icon={<PlusOutlined />}
          style={{ marginRight: '35px' }}
          href="/fornecedores/create"
        >
          Novo
        </Button>
      </Flex>
    </>
  );
}
