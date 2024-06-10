'use server';

import { SupplierData } from '@/utils/supplierDataTypes';

export default async function createSupplier(data: SupplierData) {
  try {
    if (
      !data.accountBank ||
      !data.accountType ||
      !data.agency ||
      !data.bank ||
      !data.cellPhone ||
      !data.city ||
      !data.contactPerson ||
      !data.publicPlace ||
      !data.neighborhood ||
      !data.number ||
      !data.state
    ) {
      throw new Error('Preencha os campos obrigatórios!');
    }

    const response = await fetch('https://challegen-insight.vercel.app/api/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao criar o usuário, tente novamente');
    }

    const dataResponse = await response.json();

    if (response.ok) {
      return {
        data: dataResponse,
        ok: true,
        error: '',
      };
    }
  } catch (e) {
    if (e instanceof Error) {
      return {
        data: null,
        ok: false,
        error: e.message ?? 'Erro ao criar o usuário, tente novamente!',
      };
    } else {
      return {
        data: null,
        ok: false,
        error: 'Erro ao criar o usuário, tente novamente!',
      };
    }
  }
}
