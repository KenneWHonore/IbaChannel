import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from "./src/Splash";
import Onboarding from "./components/Onboarding"
import Setting from "./components/Setting";
import Privacy from "./components/Privacy";
import Go from "./components/Go";
import Acceuil from "./components/Acceuil";
import {initialWindowMetrics, SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import VoirPlus from "./components/VoirPlus";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from "./components/Screen";
import Categorie from "./components/Categorie";
import Replay from "./components/Replay";
import Direct from "./components/Direct";
import AssetImage from "./assets/assetImage";
import {Image} from "react-native";
import Search from "./components/Search";
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {SCREENSDrawner} from "./components/ScreenDrawner"
import APropos from "./components/Apropos";
import TermeCondition from "./components/TermeCondition";
import Partager from "./components/Partager";
import VoirPlusA from "./components/VoirPlusA";
import VoirPlusLepoint from "./components/VoirPlusLepoint";
import VoirPlusLePoint2 from "./components/VoirPlusLePoint2";
import VoirPlusLePoint3 from "./components/VoirPlusLepoint3";
import VoirPlusLepoint4 from "./components/VoirPlusLepoint4";
import ListenReplay from "./components/ListenReplay";
import { View,Text } from "react-native-animatable";
import About from "./components/About";





const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

    const Stack = createNativeStackNavigator();
    

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='BottomTab' screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Splash" component={Splash}/>
                        <Stack.Screen name="Onboarding" component={Onboarding}/>
                        <Stack.Screen name="Setting" component={Setting}/>
                        <Stack.Screen name="Privacy" component={Privacy}/>
                        <Stack.Screen name="Go" component={Go}/>
                        <Stack.Screen name="BottomTab" component={TabNavigator}/>
                        {/* <Stack.Screen name="Acceuil" component={Acceuil} /> */}
                        <Stack.Screen name="VoirPlus" component={VoirPlus}/>
                        <Stack.Screen name="Search" component={Search}/>
                        <Stack.Screen name="VoirPlusA" component={VoirPlusA}/>
                        <Stack.Screen name="VoirPlusLepoint" component={VoirPlusLepoint}/>
                        <Stack.Screen name="VoirPlusLepoint2" component={VoirPlusLePoint2}/>
                        <Stack.Screen name="VoirPlusLepoint3" component={VoirPlusLePoint3}/>
                        <Stack.Screen name="VoirPlusLepoint4" component={VoirPlusLepoint4}/>
                        <Stack.Screen name="ListenReplay" component={ListenReplay}/>
                        <Stack.Screen name="About" component={About}/>
                        


                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};
const DrawnerScreenWithDrawner = () => {
    return(
        <Drawer.Navigator initialRouteName={SCREENS.acceuil} 
        drawerContent={(props)=>
        <DrawerContentScrollView {...props}>
            <Image source={require('./assets/IBAlogo.png')} style={{backgroundColor:'#3C3C3C', width:"100%",height:300,marginTop:-25}}/>
            <DrawerItem label={'A propos d\'IBA'} onPress={()=>{props.navigation.navigate(SCREENS.about)}}/>
            <DrawerItem label={'Termes et conditions'} onPress={()=>{props.navigation.navigate(SCREENS.privacy)}}/>
            <DrawerItem label={'Parametre'} onPress={()=>{props.navigation.navigate(SCREENS.setting)}}/>
        
        </DrawerContentScrollView>}>
            <Drawer.Screen name={SCREENS.acceuil} component={Acceuil}  options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
};
const DrawnerScreenWithDrawner2 = () => {
    return(
        <Drawer.Navigator initialRouteName={SCREENS.categorie} 
        drawerContent={(props)=>
        <DrawerContentScrollView {...props}>
            <Image source={require('./assets/IBAlogo.png')} style={{backgroundColor:'#3C3C3C', width:"100%",height:300,marginTop:-25}}/>
            <DrawerItem label={'A propos d\'IBA'} onPress={()=>{props.navigation.navigate(SCREENS.about)}}/>
            <DrawerItem label={'Termes et conditions'} onPress={()=>{props.navigation.navigate(SCREENS.privacy)}}/>
            <DrawerItem label={'Parametre'} onPress={()=>{props.navigation.navigate(SCREENS.setting)}}/>
        
        </DrawerContentScrollView>}>
            <Drawer.Screen name={SCREENS.categorie} component={Categorie} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
};
const DrawnerScreenWithDrawner3 = () => {
    return(
        <Drawer.Navigator initialRouteName={SCREENS.replay} 
        drawerContent={(props)=>
        <DrawerContentScrollView {...props}>
            <Image source={require('./assets/IBAlogo.png')} style={{backgroundColor:'#3C3C3C', width:"100%",height:300,marginTop:-25}}/>
            <DrawerItem label={'A propos d\'IBA'} onPress={()=>{props.navigation.navigate(SCREENS.about)}}/>
            <DrawerItem label={'Termes et conditions'} onPress={()=>{props.navigation.navigate(SCREENS.privacy)}}/>
            <DrawerItem label={'Parametre'} onPress={()=>{props.navigation.navigate(SCREENS.setting)}}/>
        
        </DrawerContentScrollView>}>
            <Drawer.Screen name={SCREENS.replay} component={Replay} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

const TabNavigator = () => {

    
    return (
        <Tab.Navigator 
        initialRouteName={SCREENS.acceuil} 
        screenOptions = {
            {
                headerShown: false,
                tabBarStyle:{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarLabelStyle:
                {
                    marginBottom:5,
                    marginTop:-5
                }
                

            }
            }>
            <Tab.Screen name={SCREENS.acceuil}
                        component={DrawnerScreenWithDrawner}
                        
                        options={{
                            headerShown: false,
                            title: 'A la une', tabBarIcon: ({focused}) =>
                                <Image source={AssetImage.home}
                                       style={{height: 60, width: 60}}
                                />
                        }}
            />
            <Tab.Screen name={SCREENS.categorie}
                        component={DrawnerScreenWithDrawner2}
                        options={{
                            headerShown:false,
                            title: 'Categories', tabBarIcon: ({focused}) =>
                                <Image source={AssetImage.categorie}
                                       style={{height: 60, width: 60}}
                                />
                        }}
            />
            <Tab.Screen name={SCREENS.replay}
                        component={DrawnerScreenWithDrawner3}
                        options={{
                            title: 'Replay', tabBarIcon: ({focused}) =>
                                <Image source={AssetImage.replay}
                                       style={{height: 60, width: 60}}
                                />
                        }}
            />
            <Tab.Screen name={SCREENS.direct}
                        component={Direct}
                        options={{
                            title: 'Direct', tabBarIcon: ({focused}) =>
                                <Image source={AssetImage.Direct}
                                       style={{height: 50, width: 50, opacity: 0.8,marginTop:-15}}
                                />
                        }}
            />
        </Tab.Navigator>
    );
}







export default App;

//const styles = StyleSheet.create{()}