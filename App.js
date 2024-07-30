import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/Home";
import Splash from "./src/Splash";
import Onboarding from "./components/Onboarding"
import Setting from "./components/Setting";
import Privacy from "./components/Privacy";
import Go from "./components/Go";
import Acceuil from "./components/Acceuil";
import {initialWindowMetrics, SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import VoirPlus from "./components/VoirPlus";


const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Splash" component={Splash}/>
                        <Stack.Screen name="Onboarding" component={Onboarding}/>
                        <Stack.Screen name="Setting" component={Setting}/>
                        <Stack.Screen name="Privacy" component={Privacy}/>
                        <Stack.Screen name="Go" component={Go}/>
                        <Stack.Screen name="Acceuil" component={Acceuil}/>
                        <Stack.Screen name="VoirPlus" component={VoirPlus}/>


                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default App;

//const styles = StyleSheet.create{()}
