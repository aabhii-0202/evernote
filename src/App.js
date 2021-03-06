import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Sidebar from './Screens/Sidebar';
import { createDrawerNavigator } from '@react-navigation/drawer';



const App = () => {

    const Stack = createNativeStackNavigator();

     return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name="Sidebar"
                    component={Sidebar}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const drawer = () =>{

    const Drawer = createDrawerNavigator();
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({

});


export default App;