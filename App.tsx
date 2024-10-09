// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './src/Redux/store';
import ProductsList from './src/screens/ProductsList';
import AppointmentScreen from './src/screens/Appointment';
import selectDateTime from './src/screens/selectDateTime';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createStackNavigator();
const App = () => (
  <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeScreen">
       <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}           
        />
        <Stack.Screen
          name="selectDateTime"
          component={selectDateTime}
          options={{headerShown: false}}           
        />
        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{title: ''}}
        />
         <Stack.Screen
          name="ProductsList" // Define the route for ProductsList
          component={ProductsList}
          options={{ title: 'Products' }} // Optional: Set title for header
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
