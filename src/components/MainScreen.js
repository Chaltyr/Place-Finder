import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search_screen/SearchScreen';
import SearchHistory from '../screens/search_history/SearchHistory';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  const navigationOptions = {
    headerShown: false,
    headerLeft: () => <></>,
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" color={color} size={35} />
          ),
          tabBarLabel: 'Search Screen',
          tabBarStyle: {height: 80, paddingTop: 10},
          tabBarLabelStyle: {fontSize: 15, paddingBottom: 10},
        }}
      />
      <Tab.Screen
        name="SearchHistory"
        component={SearchHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history" color={color} size={35} />
          ),
          tabBarLabel: 'Search History',
          tabBarStyle: {height: 80, paddingTop: 10},
          tabBarLabelStyle: {fontSize: 15, paddingBottom: 10},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
