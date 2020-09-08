import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Headers from "../components/Headers/Headers";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  background: ${(props) => props.white};
  padding: 40px 16px;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainContainer = styled.View`
  margin: 40px 16px;
`;
const HeaderName = styled.View`
  margin-left: 18px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat-Bold;
`;

const IconTextContainer = styled.View`
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InformationContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
`;
const Subtitle = styled.Text`
  font-size:${(props) => (props.size ? props.size : "12px")}
  font-family:Montserrat-Regular;
  margin:4px 5px;
  
  
`;

function UsefulContactsScreen({ navigation }) {
  return (
    <Container white={colors.white}>
      <HeaderContainer>
        <Entypo
          name="chevron-left"
          onPress={() => {
            navigation.goBack();
          }}
          size={30}
          color={colors.red}
        />
        <HeaderName>
          <Headers title="Useful Contact" />
        </HeaderName>
      </HeaderContainer>

      <MainContainer>
        <IconTextContainer>
          <AntDesign name="infocirlce" size={40} color={colors.red} />
          <InformationContainer>
            <Title>Tourist Hotline</Title>
            <Subtitle>9863472244</Subtitle>
            <Subtitle>9842020174</Subtitle>
            <Subtitle>025-533145</Subtitle>
          </InformationContainer>
        </IconTextContainer>

        <IconTextContainer>
          <FontAwesome name="ambulance" size={40} color={colors.red} />
          <InformationContainer>
            <Title>Ambulance</Title>
            <Subtitle>9863472244</Subtitle>
            <Subtitle>9842020174</Subtitle>
            <Subtitle>025-533145</Subtitle>
          </InformationContainer>
        </IconTextContainer>

        <IconTextContainer>
          <MaterialCommunityIcons name="doctor" size={40} color={colors.red} />
          <InformationContainer>
            <Title>Police</Title>
            <Subtitle>9863472244</Subtitle>
            <Subtitle>9842020174</Subtitle>
            <Subtitle>025-533145</Subtitle>
          </InformationContainer>
        </IconTextContainer>
      </MainContainer>
    </Container>
  );
}

export default UsefulContactsScreen;
