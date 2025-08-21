import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen1 from '../screens/onboarding1';
import OnboardingScreen2 from '../screens/onboarding2';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding1" 
        screenOptions={{ headerShown: true, headerStyle:{
            backgroundColor: '#FFD700' // Set default header background color
            }, headerTintColor: '#080808ff', headerTitleStyle: {
            fontWeight: 'bold'
        } }} // Set default background color
    >
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} options={{title:''}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;