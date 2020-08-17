import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RotasProps } from '../../routes.types';
import styles from './styles';
import Item from './Item';

type HomeScreenNavigationProp = StackNavigationProp<RotasProps, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text testID="title-home" style={styles.title}>
        E2E
      </Text>
      <Item textID={'botao-home-formulario'} title={'Formulário'} onClick={() => navigation.navigate('Formulário')} />
      <Item textID={'botao-home-consulta'} title={'Consulta'} onClick={() => navigation.navigate('Consulta')} />
    </View>
  );
};

export default Home;
