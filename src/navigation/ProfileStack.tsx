import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Profile} from '../screens';

const Stack = createNativeStackNavigator();

/**
 * ProfileStack component
 * @returns {JSX.Element}
 */
const ProfileStack = (): JSX.Element => {
  /**
   * profileScreenOptions method
   * @returns {any}
   */
  const profileScreenOptions = (): any => ({headerShown: false});

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        options={profileScreenOptions}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
