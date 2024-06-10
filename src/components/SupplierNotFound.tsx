'use client';

import { Button, Empty } from 'antd';

export default function SupplierNotFound() {
  return (
    <Empty
      style={{ textAlign: 'center', margin: 'auto auto' }}
      description="Nenhum fornecedor encontrado!"
    >
      <Button
        onClick={() => {
          if (!window.history) return null;
          window.history.back();
        }}
      >
        Voltar para a lista de fornecedores?
      </Button>
    </Empty>
  );
}
