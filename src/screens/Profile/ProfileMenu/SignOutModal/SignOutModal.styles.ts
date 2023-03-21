import {StyleSheet} from 'react-native';

const signOutModalStyles = StyleSheet.create({
  buttonText: {
    fontWeight: '500',
    color: 'white',
  },
  buttonContainer: {
    width: 80,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  bodyText: {
    fontSize: 15,
    color: 'black',
    marginVertical: 30,
  },
  crossText: {
    color: 'white',
    fontSize: 15,
  },
  crossIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    height: 200,
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 6,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default signOutModalStyles;
