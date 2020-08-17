import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import FormContext from '../../utils/Context/FormContext';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RotasProps } from '../../routes.types';

type FormScreenNavigationProp = StackNavigationProp<RotasProps, 'Consulta'>;

type Props = {
  navigation: FormScreenNavigationProp;
};

const Formulario: React.FC<Props> = () => {
  const { value } = useContext(FormContext);
  const color = value.cor.length === 7 ? value.cor : '#403e3e';
  return (
    <View style={styles.container}>
      {value.email.includes('@') ? <Text testID="text-cons-email-valido">E-mail válido!</Text> : null}
      <Text testID="text-cons-nome" style={[styles.value, { color }]}>
        Nome: {value.nome}
      </Text>
      <Text testID="text-cons-email" style={[styles.value, { color }]}>
        E-mail: {value.email}
      </Text>
      <Text testID="text-cons-cor" style={[styles.value, { color }]}>
        Cor: {value.cor}
      </Text>
    </View>
  );
};

export default Formulario;
