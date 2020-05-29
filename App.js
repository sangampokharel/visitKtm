import React from 'react';
import { View, Text, Platform, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tab, Stack, TopTab } from './src/Routes/Routes';
import { colors } from './constant/colors';
import { FontAwesome } from '@expo/vector-icons';
import { widthToDp, heightToDp } from './utlis/Responsive';
import { useFonts } from '@use-expo/font';
//screens
import DiscoverDetailsScreen from './src/screens/DiscoverDetailsScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import EssentialsScreen from './src/screens/EssentialsScreen';
import EssentialDetailScreen from './src/screens/EssentialDetailScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { AppLoading } from 'expo'
import {
  AttractionScreen,
  MallsScreen,
  FoodsScreen,
  HotelScreen,
  AttractionDetailsScreen,
  FoodDetailsScreen,
  HotelDetailsScreen,
  MallsDetailsScreen

} from './src/screens/PlacesScreen/ScreenExports'

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import MapScreen from './src/screens/MapScreen';
const HEADER_MAX_HEIGHT = 200;
export default function App() {
  YellowBox.ignoreWarnings([
    // 'Warning: `flexWrap: `wrap`` is not supported',
    // 'Warning: componentWillUpdate has been renamed',
    // 'Warning: componentWillReceiveProps has been renamed',
    // 'Warning: componentWillMount has been renamed',
    'VirtualizedLists should never be nested',
    'VirtualizedCell.cellKey of type number'
    // 'Warning: CheckBox has been extracted from',
  ]);

  let [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.otf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.otf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Discover') {
                    iconName = 'home'
                  } else if (route.name === 'Info') {
                    iconName = 'info'
                  } else if (route.name === 'Essential') {
                    iconName = 'briefcase'
                  }

                  return <FontAwesome name={iconName} size={24} color={colors.red} />;
                },
              })}
              tabBarOptions={{
                activeBackgroundColor: 'rgba(0,0,0,0.1)'
              }}


              initialRouteName="Info"

            >
              <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
              <Tab.Screen name="Essential" component={EssentialsStackNavigator} />
              <Tab.Screen name="Info" component={SearchScreenComponent} />
            </Tab.Navigator>


          </NavigationContainer>






        </View>
      </Provider>
    );
  }


}

//Essential Screen Tab Navigator
const EssentialsStackNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="EssentialScreen"
      component={EssentialsScreen}
      options={{
        title: "Essentials",

        headerTitleStyle: {
          color: colors.red,
          fontSize: widthToDp(5),
          fontFamily: 'Montserrat-Medium'
        },

      }}


    />
    <Stack.Screen
      name="EssentialDetails"
      component={EssentialDetailScreen}
      options={{
        title: "Essentials Information",
        headerTitleStyle: {
          color: colors.primaryColor,
          fontSize: widthToDp(5)
        }
      }}

    />

  </Stack.Navigator>
);




//Discover screen stack navigator

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Discover"
      headerMode="none"

    >
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        screenOptions={{
          headerMode: 'none'
        }}


      />
      <Stack.Screen
        name="Details"
        component={DiscoverDetailsScreen}


      />

    </Stack.Navigator>
  )
}


const SearchScreenComponent = () => (
  <Stack.Navigator
    mode="modal"

  >
    <Stack.Screen
      name="AttractionScreen"
      component={PlacesTopNavigator}
      options={{
        headerShown: false,
      }}


    />

    <Stack.Screen
      name="AttractionDetails"
      title="Attraction"
      component={AttractionDetailsScreen}
      options={{
        headerShown: false

      }}

    />
    <Stack.Screen
      name="MallsDetails"
      title="Malls"
      component={MallsDetailsScreen}
      options={{
        headerShown: false

      }}

    />
    <Stack.Screen
      name="FoodDetails"
      title="Food"
      component={FoodDetailsScreen}
      options={{
        headerShown: false

      }}

    />
    <Stack.Screen
      name="HotelDetails"
      title="Hotel"
      component={HotelDetailsScreen}
      options={{
        headerShown: false

      }}

    />

    <Stack.Screen
      name="MapScreen"
      component={MapScreen}


    />

  </Stack.Navigator>



);





//Top Navigator

const PlacesTopNavigator = () => (
  <TopTab.Navigator
    tabBarOptions={{
      pressColor: 'transparent',
      style: { backgroundColor: colors.red },
      tabStyle: { marginTop: heightToDp(3), },
      labelStyle: { textTransform: 'none', fontFamily: 'Montserrat-Medium', fontSize: heightToDp(3) },
      activeTintColor: '#000',
      inactiveTintColor: '#eee',
      indicatorStyle: { backgroundColor: '' }
    }}
  >

    <TopTab.Screen name="Places" component={AttractionScreen} />
    <TopTab.Screen name="Malls" component={MallsScreen} />
    <TopTab.Screen name="Foods" component={FoodsScreen} />
    <TopTab.Screen name="Hotels" component={HotelScreen} />
  </TopTab.Navigator>
);