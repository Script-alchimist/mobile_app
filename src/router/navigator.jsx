import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { TabNavigator } from './tabs';

import OnboardingScreen1 from '../screens/onboarding1';
import OnboardingScreen2 from '../screens/onboarding2';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import HomeScreen from '../screens/app/home';
import CompanyDetailScreen from '../screens/app/companyProfile';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding1" 
        screenOptions={{ 
            headerShown: true, 
            headerStyle:{
              backgroundColor: '#FFD700' 
            }, headerTintColor: '#080808ff', headerTitleStyle: {
            fontWeight: 'bold'
            } 
          }} 
      >
        <Stack.Screen name="Tabnavigate" component={TabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} options={{headerShown:true, headerShadowVisible:false, title:false, gestureEnabled: true,}}/>
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} options={{title:''}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShadowVisible:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShadowVisible:false}}/>
        <Stack.Screen name="CompanyDetail" component={CompanyDetailScreen} options={{headerShadowVisible:false, headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;