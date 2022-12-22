import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';

const TabNavigator = createBottomTabNavigator();

function Tabs() {
  return (
    <TabNavigator.Navigator initialRouteName="Account">
      <TabNavigator.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          headerShown: false,
        }}
      />
      <TabNavigator.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerShown: false,
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
