'use client';

import { Button, Empty } from 'antd';

interface PageWithoutContentProps {
  message: string;
  to: string;
}

export default function PageWithoutContent({
  message,
  to,
}: PageWithoutContentProps) {
  return (
    <div
      style={{ textAlign: 'center' }}
      className="!flex !flex-1 !flex-col !items-center !justify-center h-full"
    >
      <Empty description={message ?? 'Nenhum conteúdo encontrado!'}>
        <Button type="primary" href={to}>
          Crie um agora!
        </Button>
      </Empty>
    </div>
  );
}
