import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import all Screens
import { Home } from './src/screens/Home/index.js';
import { Splash } from './src/screens/Splash/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ animation: 'fade', headerShown: false }}>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Splash' component={Splash}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}