import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./src/Splash";
import Onboarding from "./components/Onboarding"
import Setting from "./components/Setting";
import Privacy from "./components/Privacy";
import Go from "./components/Go";
import Acceuil from "./components/Acceuil";
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VoirPlus from "./components/VoirPlus";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SCREENS from "./components/Screen";
import Categorie from "./components/Categorie";
import Replay from "./components/Replay";
import Direct from "./components/Direct";



const Tab = createBottomTabNavigator();

const App = () => {
    
    const Stack = createNativeStackNavigator();
    
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Setting" component={Setting} />
                        <Stack.Screen name="Privacy" component={Privacy} />
                        <Stack.Screen name="Go" component={Go} />
                        <Stack.Screen name="BottomTab" component={TabNavigator} />
                        {/* <Stack.Screen name="Acceuil" component={Acceuil} /> */}
                        <Stack.Screen name="VoirPlus" component={VoirPlus} />
                        


                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
        
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={SCREENS.Acceuil}>
            <Tab.Screen name={SCREENS.Acceuil}
                component={Acceuil}
                options={{
                    title: 'A la une', tabBarIcon: ({focused}) =>
                        <Image source={Image.Home}
                            style={{ height: 30, width: 30 }}
                        />
                }}
            />
            <Tab.Screen name={SCREENS.Categorie}
                component={Categorie}
                options={{
                    title: 'Categorie', tabBarIcon: ({focused}) =>
                        <Image source={Image.Categorie}
                            style={{ height: 30, width: 30 }}
                        />
                }}
            />
            <Tab.Screen name={SCREENS.Replay}
                component={Replay}
                options={{
                    title: 'Replay', tabBarIcon: ({focused}) =>
                        <Image source={Image.Replay}
                            style={{ height: 30, width: 30 }}
                        />
                }}
            />
            <Tab.Screen name={SCREENS.Direct}
                component={Direct}
                options={{
                    title: 'Direct', tabBarIcon: ({focused}) =>
                        <Image source={Image.Direct}
                            style={{ height: 30, width: 30, opacity: 0.8 }}
                        />
                }}
            />
        </Tab.Navigator>
    );
}

export default App;

//const styles = StyleSheet.create{()}
