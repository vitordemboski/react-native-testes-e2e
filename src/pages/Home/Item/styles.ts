import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerBotao: {
    height: 150,
    width: '60%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 12,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#403e3e',
    letterSpacing: 1,
  },
});
