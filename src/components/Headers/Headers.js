import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { colors } from "../../../constant/colors";

const HeaderContainer = styled.View`
  padding-top: 2px;
  padding-bottom: 2px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat-SemiBold;
  color: ${(props) => props.red};
`;

const Headers = ({ title }) => {
  return (
    <HeaderContainer>
      <Title red={colors.red}>{title}</Title>
    </HeaderContainer>
  );
};

export default Headers;
