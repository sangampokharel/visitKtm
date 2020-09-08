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

const SearchStack = createStackNavigator(
  {
    // Attraction: {
    //   screen: PlacesTopNavigator,
    // },

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
    // initialRouteName: "AttractionScreen",
    defaultNavigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator({
  Discover: {
    screen: DiscoverStack,
  },

  Essential: {
    screen: EssentialStack,
  },

  Info: {
    screen: SearchStack,
  },
});

const PlacesTopNavigator = createMaterialTopTabNavigator({
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
});

EssentialStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (
    navigation.state.routeName === "CurrencyConverter" ||
    navigation.state.routeName === "HandyTips" ||
    navigation.state.routeName === "AboutUs" ||
    navigation.state.routeName === "UsefulContacts"
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

HandyTipsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  console.log(navigation.state.routeName);
  if (
    navigation.state.routeName === "UsefulInfo" ||
    navigation.state.routeName === "HandyTipsName" ||
    navigation.state.routeName === "GettingAround" ||
    navigation.state.routeName === "MapsCityGuide" ||
    navigation.state.routeName === "LocalTips"
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(BottomTabNavigator);
