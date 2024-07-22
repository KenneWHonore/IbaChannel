import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Home";
import Splash from "./src/Splash";
import Onboarding from "./components/Onboarding"
import Setting from "./components/setting";
import Privacy from "./components/Privacy";


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Privacy" component={Privacy} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//const styles = StyleSheet.create{()}
