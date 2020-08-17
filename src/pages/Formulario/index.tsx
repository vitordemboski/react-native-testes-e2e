import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import FormContext from '../../utils/Context/FormContext';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RotasProps } from '../../routes.types';
import FormItem from './FormItem';

type FormScreenNavigationProp = StackNavigationProp<RotasProps, 'Formulário'>;

type Props = {
  navigation: FormScreenNavigationProp;
};

const Formulario: React.FC<Props> = () => {
  const { value, setValue } = useContext(FormContext);

  return (
    <ScrollView testID={'scroll-form'} accessible={true} style={styles.container}>
      <FormItem
        testID={'input-form-nome'}
        title="Nome"
        value={value.nome}
        onChangeText={(text: string) => setValue({ ...value, nome: text })}
      />
      <FormItem
        testID={'input-form-email'}
        title="Email"
        value={value.email}
        onChangeText={(text: string) => setValue({ ...value, email: text })}
      />
      <FormItem
        color={value.cor}
        maxLength={7}
        title="Cor"
        testID={'input-form-cor'}
        value={value.cor}
        onChangeText={(text: string) => setValue({ ...value, cor: text })}
      />
    </ScrollView>
  );
};

export default Formulario;
