import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AllTab, InProgressTab, CompletedTab} from '../screens';
import colors from '../constants/colors';

const TopTab = createMaterialTopTabNavigator();

const TodoTopTab = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: colors.green},
        tabBarLabelStyle: {textTransform: 'capitalize'},
        swipeEnabled: false,
      }}>
      <TopTab.Screen
        name="AllTabScreen"
        options={{tabBarLabel: 'All Tasks'}}
        component={AllTab}
      />
      <TopTab.Screen
        name="InProgressScreen"
        options={{tabBarLabel: 'In Progress'}}
        component={InProgressTab}
      />
      <TopTab.Screen
        name="CompletedScreen"
        options={{tabBarLabel: 'Completed'}}
        component={CompletedTab}
      />
    </TopTab.Navigator>
  );
};

export default TodoTopTab;
