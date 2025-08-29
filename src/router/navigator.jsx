import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabNavigator } from './tabs';

import OnboardingScreen1 from '../screens/onboarding1';
import OnboardingScreen2 from '../screens/onboarding2';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import CompanyDetailScreen from '../screens/app/companyProfile';
import ReservationScreen from '../screens/app/reservation';
import PaymentAndValidationScreen from '../screens/app/payment'
import PaymentManageScreen from '../screens/app/paymanage'
import PaymentValidatedScreen from '../screens/app/validpayment';
import DeliveryOrderScreen from '../screens/app/deliver';

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
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{headerShadowVisible:false, headerShown:true}}/>
        <Stack.Screen name='Payment' component={PaymentAndValidationScreen} options={{headerShadowVisible:false, headerShown:true}}/>
        <Stack.Screen name="Paymanage" component={PaymentManageScreen} options={{headerShadowVisible:false, headerShown:true}}/>
        <Stack.Screen name="Paymentvalid" component={PaymentValidatedScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Coammande de Livraison" component={DeliveryOrderScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;