import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Notifications, User, Chat, Rates } from "../ScreensForAssignment6/index"
import CustomTabBar from "../Components/CustomTabBar";

const Tab = createBottomTabNavigator();



const MyTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
    >

      <Tab.Screen name="ChatScreen" component={Chat} />

      <Tab.Screen name="NotificationsScreen" component={Notifications} />

      <Tab.Screen name="HomeScreen" component={Home} />

      <Tab.Screen name="RateScreen" component={Rates} />


      <Tab.Screen name="UserScreen" component={User} />





    </Tab.Navigator>
  );
}


export default MyTabs
