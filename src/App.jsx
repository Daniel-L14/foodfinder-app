import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './screens/Menu';
import Lista from './screens/Lista';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: 'Inicio' }}
        />

        <Stack.Screen 
          name="Lista" 
          component={Lista} 
          options={{ title: 'Recetas' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}