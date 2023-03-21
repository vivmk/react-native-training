import {StyleSheet} from 'react-native';

const profileMenuStyles = StyleSheet.create({
  menuText: {
    fontSize: 15,
    fontWeight: '500',
  },
  signOut: {
    marginHorizontal: 35,
    fontSize: 17,
    color: 'red',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.225)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 15,
  },
  listContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  iconSize: {
    width: 13,
    height: 13,
  },
  menuContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 2,
    borderColor: 'green',
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default profileMenuStyles;
