import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import { colors } from "../../../constant/colors";
const AdvancedCard = ({ name, description, avatar }) => {
  //styled components
  const Title = styled.Text`
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    color: ${(props) => props.red};
  `;

  const SubTitle = styled.Text`
    font-size: 12px;
    color: ${(props) => props.extraDark};
    font-family: Montserrat-Medium;
    margin-top: 20px;
    width: 80%;
  `;

  const TouchableOpacity = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    width: 300px;
    margin-right: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    elevation: 1;
  `;

  const TextContainer = styled.View`
    padding: 12px;
  `;

  const Image = styled.Image`
    width: 130px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 200px;
  `;

  //logic

  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, []);
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={() => {}}>
      <View>
        <Image source={{ uri: avatar }} />
      </View>
      <TextContainer>
        <Title red={colors.red}>{name}</Title>
        <SubTitle numberOfLines={4} extraDark={colors.extraDark}>
          {description}
        </SubTitle>
      </TextContainer>
    </TouchableOpacity>
  );
};

export default AdvancedCard;
