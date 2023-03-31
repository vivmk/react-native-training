import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LandingScreen} from '../screens';
import AppBottomStack from './AppBottomTab';
import {ScreenHeader} from '../components';
import TodoTopTab from './TodoTopTab';

const Stack = createNativeStackNavigator();

/**
 * AppStack component
 * @returns {JSX.Element}
 */
const AppStack = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          options={{headerShown: false}}
          component={LandingScreen}
        />
        <Stack.Screen
          name="AppBottomStack"
          options={{headerShown: false}}
          component={AppBottomStack}
        />
        <Stack.Screen
          name="TodoTopTab"
          options={{
            header: ({navigation}) => (
              <ScreenHeader title="Todo List" navigation={navigation} />
            ),
          }}
          component={TodoTopTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
