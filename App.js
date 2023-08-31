import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Home from './pages/home';
import About from './pages/About';
import Menu from './pages/menu/menu';
import Fooddetails from './pages/fooddetails';


const Stack = createNativeStackNavigator();

export default function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Home}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DBDBDB', // Set the background color to gray
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ backgroundColor: 'gray' }}/>
        <Stack.Screen name="About" component={About} options={{ backgroundColor: 'gray' }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ backgroundColor: 'gray' }}/>
        <Stack.Screen name="Food details" component={Fooddetails} options={{ backgroundColor: 'gray' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
