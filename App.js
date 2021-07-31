import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import LoginDesign from './Screens/LoginDesign';
import Assignmaent2 from './Screens/Assignment2';
import Assignmaent3 from './Screens/Assignment3';
import Assignment4 from './Screens/Assignment4';
import Assignment5 from './Screens/Assignment5';
import MyTabs from './Navigations/BottomTabNavigation';
import Assignment7 from './Screens/Assignment7';
import Assignment8 from './Screens/Assignment8';
import store from "./Redux/Store"



const Stack = createStackNavigator();

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
