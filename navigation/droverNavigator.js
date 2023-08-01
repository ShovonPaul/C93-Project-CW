import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './tabNavigator'
import Profile from '../screens/Profile'
import Food from '../screens/Food'
import CheckList from '../screens/CheckList'
const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen  name = "Food" component = {Food}/>
            <Drawer.Screen  name = "Checklist" component = {CheckList} />
            <Drawer.Screen  name = "Profile" component = {Profile} />
            
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;