// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // bunu eklemek için de HomeScreen yazarsın gelene tıklarsın v e 7. satır otomatik gelir.
import ArtistsScreen from './screens/ArtistsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import Categories from './screens/CategoriesScreen';
import ArtistsScreen from './screens/ArtistsScreen';
import NewsScreen from './screens/NewsScreen';



const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="News" component={NewsScreen}></Tab.Screen>
        <Tab.Screen name="Categories" component={Categories}></Tab.Screen>
        <Tab.Screen name="Artists" component={ArtistsScreen}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;