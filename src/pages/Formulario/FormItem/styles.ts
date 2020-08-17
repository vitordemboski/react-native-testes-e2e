import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '80%',
    alignSelf: 'center',
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
  title: {
    fontSize: 18,
    color: '#403e3e',
    letterSpacing: 1,
  },
  input: {
    fontSize: 13,
    width: '80%',
    borderBottomWidth: 0.5,
  },
});
