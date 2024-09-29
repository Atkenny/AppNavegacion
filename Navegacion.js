import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';

import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDetailsHome';

const Tab = createBottomTabNavigator();
const DetailsHomeNavigator = createStackNavigator();

function StackDetailHome() {
  return (
    <DetailsHomeNavigator.Navigator initialRouteName='HomeScreen'>
      <DetailsHomeNavigator.Screen name="HomeScreen" component={Home} />
      <DetailsHomeNavigator.Screen name="DetailHome" component={DetailHome} />
      <DetailsHomeNavigator.Screen name="AnotherDetailHome" component={AnotherDetailHome} />
    </DetailsHomeNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: 'purple' }}>
      <Tab.Screen 
        name='Home' 
        component={StackDetailHome} 
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={30} color={color} />
        }} 
      />
      <Tab.Screen 
        name='Settings' 
        component={Settings} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={30} color={color} />
        }} 
      />
      <Tab.Screen 
        name='Users' 
        component={Users} 
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={30} color={color} />
        }} 
      />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
