import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Wellcome from '../src/screens/Wellcome/index.js';
import Game from '../src/screens/Game';
import React from 'react';


const Stack = createStackNavigator();

function Routes(){

    return(
        <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >
        <Stack.Screen name='Wellcome' component={Wellcome} />
        <Stack.Screen name='Game' component={Game} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes;


