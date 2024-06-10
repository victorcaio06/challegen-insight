export interface SupplierDataToPut {
  account_bank: string;
  account_Type: string;
  agency: string;
  bank: string;
  cell_phone: string;
  city: string;
  cnpj: string | undefined;
  contact_person: string;
  contact_position: string | undefined;
  cpf: string | undefined;
  public_place: string;
  keyPix: string | undefined;
  landline: string | undefined;
  municipal_registration: string | undefined;
  name: string | undefined;
  neighborhood: string;
  number: string;
  observation: string | undefined;
  state: string;
  state_registration: string | undefined;
  updated_at: string;
  id?: string;
}

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
  name: string | undefined;
  neighborhood: string;
  number: string;
  observations: string | undefined;
  state: string;
  stateRegistration: string | undefined;
  updated_at: string;
  id?: string;
}
