import React from "react";
import { TouchableOpacity } from "react-native";
import Essentials from "../components/Essentials/Essentials";
import { colors } from "../../constant/colors";
import styled from "styled-components";
import Headers from "../components/Headers/Headers";
const EssentialsScreen = ({ navigation }) => {
  const Container = styled.View`
    flex: 1;
    background: ${(props) => props.white};
    padding: 40px 16px;
  `;

  const ItemsContainer = styled.View`
    margin-top: 10px;
  `;
  const MainContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
  `;

  return (
    <Container white={colors.white}>
      <Headers title="Essentials" />
      <ItemsContainer>
        <MainContainer>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate("CurrencyConverter");
            }}
          >
            <Essentials icon="credit-card" title="Currency Convertor" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate("HandyTipsName");
            }}
          >
            <Essentials icon="folder" title="Handy Tips" />
          </TouchableOpacity>
        </MainContainer>
        <MainContainer>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate("UsefulContacts");
            }}
          >
            <Essentials icon="phone-call" title="Useful Contacts" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate("AboutUs");
            }}
          >
            <Essentials icon="info" title="About" />
          </TouchableOpacity>
        </MainContainer>
      </ItemsContainer>
    </Container>
  );
};

export default EssentialsScreen;
