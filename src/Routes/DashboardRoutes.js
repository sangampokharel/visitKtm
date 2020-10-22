import React from "react";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";
import EssentialsScreen from "../screens/EssentialsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import DiscoverDetailsScreen from "../screens/DiscoverDetailsScreen";
import {
  AttractionDetailsScreen,
  MallsDetailsScreen,
  FoodDetailsScreen,
  HotelDetailsScreen,
  AttractionScreen,
  MallsScreen,
  FoodsScreen,
  HotelScreen,
} from "../screens/PlacesScreen/ScreenExports";
import MapScreen from "../screens/MapScreen";
import CurrencyConverterScreen from "../screens/CurrencyConverterScreen";
import HandyTipsScreen from "../screens/HandyTipsScreen";
import AboutUsScreen from "../screens/AboutusScreen";
import UsefulContactsScreen from "../screens/UsefulContactsScreen";
import UsefulInformationScreen from "../screens/UsefulInformationScreen";
import GettingAroundScreen from "../screens/GettingAroundScreen";
import MapsCityGuideScreen from "../screens/MapsCityGuideScreen";
import LocalTipsScreen from "../screens/LocalTipsScreen";
import { AntDesign, Feather } from "@expo/vector-icons";

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
    },
    Details: {
      screen: DiscoverDetailsScreen,
    },
  },
  {
    initialRouteName: "Discover",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const HandyTipsStack = createStackNavigator(
  {
    HandyTipsName: {
      screen: HandyTipsScreen,
    },
    UsefulInfo: {
      screen: UsefulInformationScreen,
    },
    GettingAround: {
      screen: GettingAroundScreen,
    },
    MapsCityGuide: {
      screen: MapsCityGuideScreen,
    },
    LocalTips: {
      screen: LocalTipsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const EssentialStack = createStackNavigator(
  {
    Essential: {
      screen: EssentialsScreen,
    },

    CurrencyConverter: {
      screen: CurrencyConverterScreen,
    },
    HandyTips: {
      screen: HandyTipsStack,
    },
    AboutUs: {
      screen: AboutUsScreen,
    },
    UsefulContacts: {
      screen: UsefulContactsScreen,
    },
  },
  {
    initialRouteName: "Essential",
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const PlacesTopNavigator = createMaterialTopTabNavigator(
  {
    Places: {
      screen: AttractionScreen,
    },

    Malls: {
      screen: MallsScreen,
    },
    Foods: {
      screen: FoodsScreen,
    },

    Hotels: {
      screen: HotelScreen,
    },
  },
  {
    initialRouteName: "Places",
    defaultNavigationOptions: {
      tabBarOptions: {
        style: {
          backgroundColor: "white",
          padding: 0,
          paddingTop: 34,
        },
        labelStyle: {
          color: "#000",
          textTransform: "capitalize",
          fontSize: 16,
        },
        indicatorStyle: {
          backgroundColor: "#000",
        },
      },
    },
  }
);

const SearchStack = createStackNavigator(
  {
    Attraction: {
      screen: PlacesTopNavigator,
    },

    AttractionDetails: {
      screen: AttractionDetailsScreen,
    },

    MallsDetails: {
      screen: MallsDetailsScreen,
    },

    FoodDetails: {
      screen: FoodDetailsScreen,
    },

    HotelDetails: {
      screen: HotelDetailsScreen,
    },
    MapScreen: {
      screen: MapScreen,
    },
  },
  {
    initialRouteName: "Attraction",
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        tabBarIcon: () => {
          return <AntDesign name="home" size={25} />;
        },
      },
    },

    Essential: {
      screen: EssentialStack,
      navigationOptions: {
        tabBarIcon: () => {
          return <Feather name="briefcase" size={25} />;
        },
      },
    },

    Info: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: () => {
          return <AntDesign name="infocirlceo" size={25} />;
        },
      },
    },
  },
  {
    initialRouteName: "Info",
    defaultNavigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
    },
  }
);

EssentialStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  // console.log("from nav", navigation.state);
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map((item, i) => {
      if (
        item.routeName == "CurrencyConverter" ||
        item.routeName == "HandyTips" ||
        item.routeName == "AboutUs" ||
        item.routeName == "UsefulContacts"
      ) {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return { tabBarVisible };
};

HandyTipsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map((item, i) => {
      if (
        item.routeName === "UsefulInfo" ||
        item.routeName === "HandyTips" ||
        item.routeName === "GettingAround" ||
        item.routeName === "MapsCityGuide" ||
        item.routeName === "LocalTips"
      ) {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return { tabBarVisible };
};

SearchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map((item, i) => {
      if (
        item.routeName === "AttractionDetails" ||
        item.routeName === "MallsDetails" ||
        item.routeName === "FoodDetails" ||
        item.routeName === "HotelDetails" ||
        item.routeName === "MapScreen"
      ) {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return { tabBarVisible };
};

export default createAppContainer(BottomTabNavigator);
