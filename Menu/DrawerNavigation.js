import {View,Text} from 'react-native'
import react from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () =>
{
    return (
            <Drawer.Navigator
            screenOptions={{
                drawerStyle:
                {
                    backgroundColor: 'white',
                    width:250
                }
            }}
            >
                
            </Drawer.Navigator>
    )
}


export default DrawerNavigation  