import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onChangeText(value: string): void;
  value: string;
  color?: string;
  maxLength?: number;
  testID: string;
};

const FormItem: React.FC<Props> = ({ title, onChangeText, value, color, maxLength, testID }) => {
  return (
    <View accessible={true} style={styles.container}>
      <Text style={[styles.title, { color: color && color.length === 7 ? color : '#403e3e' }]}>{title}</Text>
      <TextInput
        maxLength={maxLength}
        testID={testID}
        placeholder="Digite aqui"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default FormItem;
