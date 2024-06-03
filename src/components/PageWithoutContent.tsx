'use client';

import { Button, Empty } from 'antd';

interface PageWithoutContentProps {
  message: string;
}

export default function PageWithoutContent({
  message,
}: PageWithoutContentProps) {
  return (
    <div
      style={{ textAlign: 'center' }}
      className="!flex !flex-1 !flex-col !items-center !justify-center h-full"
    >
      <Empty description={message ?? 'Nenhum conteúdo encontrado!'}>
        <Button type="primary">Crie um agora!</Button>
      </Empty>
    </div>
  );
}
