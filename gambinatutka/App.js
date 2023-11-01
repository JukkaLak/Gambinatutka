import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './components/Homepage';
import Map from './components/Map';
import Kokous from './components/Kokous';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Etusivu' component={Homepage} />
        <Tab.Screen name='Katso Gambinan saatavuus' component={Map} />
        <Tab.Screen name='Kokous' component={Kokous} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
