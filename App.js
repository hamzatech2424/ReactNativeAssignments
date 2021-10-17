import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import LoginDesign from './Screens/LoginDesign';
import Assignmaent2 from './Screens/Assignment2';
import Assignmaent3 from './Screens/Assignment3';
import Assignment4 from './Screens/Assignment4';
import Assignment5 from './Screens/Assignment5';
import MyTabs from './Navigations/BottomTabNavigation';
import Assignment7 from './Screens/Assignment7';
import Assignment8 from './Screens/Assignment8';
import store from "./Redux/Store"
import Maps from "./Maps Assignment/Maps";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddLocation from "./Maps Assignment/AddLocation";
import AllLocations from './Maps Assignment/AllLocations';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const App = () => {

  return (

    <React.Fragment>

      {/* For Assignment6 */}
      {/* <NavigationContainer>

      <Stack.Navigator initialRouteName="SplashScreen">
       
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer> */}

    <Provider store={store}>


      <Assignment8 />


      </Provider>


    </React.Fragment>

  )
};


export default App;







{/* <NavigationContainer>

<Tab.Navigator
  activeColor="#393E46"
  inactiveColor="grey"
  barStyle={{ backgroundColor: "#E7C8A6" }}

>
  <Tab.Screen name="Home" component={Maps} options={{
    tabBarLabel: 'Map',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="map" color="#359C70" size={25} />
    ),
  }} />

  <Tab.Screen name="Add location" component={AddLocation} options={{
    tabBarLabel: 'Add location',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="add-location" color="#D24F43" size={25} />
    ),
  }} />


  <Tab.Screen name="All location" component={AllLocations} options={{
    tabBarLabel: 'All locations',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="location-on" color="#D24F43" size={25} />
    ),
  }} />

</Tab.Navigator>

</NavigationContainer> */}