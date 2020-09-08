import React, { useState } from "react";
import { colors } from "../../constant/colors";
import Headers from "../components/Headers/Headers";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components";
import { FlatList } from "react-native";
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

const HeaderName = styled.View`
  margin-left: 18px;
`;

const MainContainer = styled.View`
  margin: 40px 16px;
`;

const ListItem = styled.TouchableOpacity`
  padding: 18px 12px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: Montserrat-Bold;
  text-align: center;
`;

const Avatar = styled.Image`
  font-size: 16px;
  font-family: Montserrat-Regular;
`;

const Description = styled.Text`
  font-size: 14px;
  font-family: Montserrat-Regular;
`;

const Divider = styled.View`
  border:0.5px;
  border-color:${(props) => props.extraLignt}
  width:100%;
`;
const ShowList = styled.FlatList`
  margin-left: 18px;
`;

const data = [
  {
    id: "1",
    title: "Currency",
    imageUrl: "",
    description:
      "The nepal currency is used here and notes come from denpminations of Rs 1,2,10,20,100,500,1000",
  },

  {
    id: "2",
    title: "Player Facility",
    imageUrl: "",
    description:
      "Nepal is a Hindu country so most of the places you find hindu temples",
  },

  {
    id: "3",
    title: "Language",
    imageUrl: "",
    description: "Languages used in kathmandu is Nepali,English,hindi",
  },

  {
    id: "4",
    title: "Weather",
    imageUrl: "",
    description:
      "Weather in Kathmandu is tropical region which is quite cold and medium hot",
  },
];

const UsefulInfoItem = ({ item }) => {
  return (
    <ListItem>
      <Title>{item.title}</Title>

      <Description>{item.description}</Description>
    </ListItem>
  );
};

const UsefulInformationScreen = ({ navigation }) => {
  const [usefulInfo, setusefulInfo] = useState(data);
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
          <Headers title="Useful Information" />
        </HeaderName>
      </HeaderContainer>

      <MainContainer>
        <FlatList
          data={usefulInfo}
          ItemSeparatorComponent={() => {
            return <Divider extraLignt={colors.lightGrey} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <UsefulInfoItem navigation={navigation} item={item} />;
          }}
        />
      </MainContainer>
    </Container>
  );
};

export default UsefulInformationScreen;
