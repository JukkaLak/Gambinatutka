import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './components/Homepage';
import Map from './components/Map';
import Kokous from './components/Kokous';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen
        name='Etusivu'
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" /> 
          ),
        }}
       /> 
        <Tab.Screen
         name='Katso Gambinan saatavuus'
         component={Map}
         options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map-marker" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen 
         name='Kokous'
         component={Kokous}
         options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="meeting-room" size={24} color="black" />
          ),
         }} />
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
