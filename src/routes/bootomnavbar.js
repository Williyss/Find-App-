import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Route from '.';
        
const Tab = createBottomTabNavigator();
        
export default function Bottomnav() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Route} />
      <Tab.Screen name="Chat" component={Route} />
    </Tab.Navigator>
    </NavigationContainer>

  );
}
