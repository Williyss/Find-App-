import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';
import Cadastro2 from '../screens/cadastro2';
import Cadastro3 from '../screens/cadastro3';
import EsqueceuSenha from '../screens/esqueceusenha';
import Bottomnav from './bootomnavbar'; 

const Stack = createStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Cadastro2" component={Cadastro2} />
      <Stack.Screen name="Cadastro3" component={Cadastro3} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      <Stack.Screen name="Home" component={Bottomnav} />  
    </Stack.Navigator>
  );
}
