import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Consulta from './pages/Consulta';
import Formulario from './pages/Formulario';
import Home from './pages/Home';
import { RotasProps } from './routes.types';
import FormContext, { InitialValue } from './utils/Context/FormContext';

const Stack = createStackNavigator<RotasProps>();

const Rotas: React.FC = () => {
  const [formValue, setForm] = useState(InitialValue);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#5BCCBE'} />
      <FormContext.Provider value={{ value: formValue, setValue: setForm }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Formulário" component={Formulario} />
          <Stack.Screen name="Consulta" component={Consulta} />
        </Stack.Navigator>
      </FormContext.Provider>
    </NavigationContainer>
  );
};
export default Rotas;
