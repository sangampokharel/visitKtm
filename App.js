import React from "react";
import { View, Text, Platform, YellowBox } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import DashboardRoute from "./src/Routes/DashboardRoutes";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {
  YellowBox.ignoreWarnings([
    // 'Warning: `flexWrap: `wrap`` is not supported',
    // 'Warning: componentWillUpdate has been renamed',
    // 'Warning: componentWillReceiveProps has been renamed',
    // 'Warning: componentWillMount has been renamed',
    "VirtualizedLists should never be nested",
    "VirtualizedCell.cellKey of type number",
    // 'Warning: CheckBox has been extracted from',
  ]);

  let [fontsLoaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.otf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.otf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.otf"),
    "Montserrat-ExtraLight": require("./assets/fonts/Montserrat-ExtraLight.otf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.otf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.otf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <DashboardRoute />
      </Provider>
    );
  }
}

//Top Navigator
