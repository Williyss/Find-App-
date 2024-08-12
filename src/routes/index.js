import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Cadastro from '../screens/cadastro';
import Cadastro2 from '../screens/cadastro2';
import Cadastro3 from '../screens/cadastro3';

export default function Route(){
const stack = createStackNavigator();
return (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Login" component={Login}></stack.Screen>
      <stack.Screen name="Cadastro" component={Cadastro}></stack.Screen>
      <stack.Screen name="Cadastro2" component={Cadastro2}></stack.Screen>
      <stack.Screen name="Cadastro3" component={Cadastro3}></stack.Screen>
    </stack.Navigator>

  </NavigationContainer>
);
}