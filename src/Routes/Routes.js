import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();



export { Tab, Stack, TopTab };
