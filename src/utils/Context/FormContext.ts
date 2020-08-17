import { createContext } from 'react';

export type PropsItem = {
  nome: string;
  email: string;
  cor: string;
};

export type Props = {
  value: PropsItem;
  setValue(item: PropsItem): void;
};

export const InitialValue = { nome: '', email: '', cor: '' };

export const InitialContext = {
  value: InitialValue,
  setValue: (item: PropsItem) => item,
};

export const FormContext = createContext<Props>(InitialContext);

export default FormContext;
