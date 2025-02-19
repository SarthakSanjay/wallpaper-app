import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../suggested";
import Library from "../library";
import Liked from "../liked";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library}></Tab.Screen>
      <Tab.Screen name="Liked" component={Liked}></Tab.Screen>
      <Tab.Screen name="Suggested" component={Suggested}></Tab.Screen>
    </Tab.Navigator>
  );
}
