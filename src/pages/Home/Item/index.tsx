import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onClick(): void;
  textID: string;
};

const Item: React.FC<Props> = ({ title, onClick, textID }) => {
  return (
    <TouchableOpacity testID={textID} onPress={onClick} style={styles.containerBotao}>
      <View style={styles.containerView}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
