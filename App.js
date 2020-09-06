import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Card, CardItem, Body } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
import Tab1 from './app/screen/tabs/favorite';
import Tab2 from './app/screen/tabs/listmovie';
import Tab3 from './app/screen/tabs/profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
//const MaterialTopTabs = createMaterialTopTabNavigator();;

App = () => {

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createHomeStack = () =>
    <Stack.Navigator    >
      <Stack.Screen
        name="Home"
        children={this.createDrawer}
        options={({ navigation }) => ({
          title: "React Navigation"
        })
        }
      />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab 1"
        style={{ marginBottom: 16 }}
        component={Tab1}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
        options={{
          tabBarLabel: 'Map'
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  return (

    <NavigationContainer theme={colorcheme == 'dark' ? DarkTheme : MyTheme}>
      {this.createHomeStack()}
    </NavigationContainer>

  );
}

export default App;
