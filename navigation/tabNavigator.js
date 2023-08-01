import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CheckList from '../screens/CheckList'
import Food from '../screens/Food'
import Profile from '../screens/Profile'
 const Tab  = createBottomTabNavigator()
 const BottomTabNavigator = ()=>{
    return(
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

    )
        
    
 }
export default BottomTabNavigator 