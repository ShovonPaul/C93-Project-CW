import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Food from "./screens/Food";
import CheckList from "./screens/CheckList";
import Profile from './screens/Profile';
import 'react-native-gesture-handler';





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Food') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CheckList') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Profile') {
            iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Food" component={Food} options={{headerShown:false}}/>
        <Tab.Screen name="CheckList" component={CheckList} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}



