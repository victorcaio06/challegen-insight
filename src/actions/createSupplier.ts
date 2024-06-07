'use server';

export interface SupplierData {
  accountBank: string;
  accountType: string;
  agency: string;
  bank: string;
  cellPhone: string;
  city: string;
  cnpj: string | undefined;
  contactPerson: string;
  contactPosition: string | undefined;
  cpf: string | undefined;
  publicPlace: string;
  keyPix: string | undefined;
  landline: string | undefined;
  municipalRegistration: string | undefined;
  nameSupplier: string | undefined;
  neighborhood: string;
  number: string;
  observations: string | undefined;
  state: string;
  stateRegistration: string | undefined;
}

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
      throw new Error('Preencha os campos obrigatórios!!');
    }

    const response = await fetch('http://localhost:3000/api/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const data = await response.json();

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
        error: e.message ?? 'Erro ao criar o usuário, tente novamente',
      };
    } else {
      return {
        data: null,
        ok: false,
        error: 'Erro ao criar o usuário, tente novamente',
      };
    }
  }
}
