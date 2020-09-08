import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Headers from "../components/Headers/Headers";
import { Entypo } from "@expo/vector-icons";
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

const MainContainer = styled.View`
  margin: 40px 16px;
`;

const HeaderName = styled.View`
  margin-left: 18px;
`;

const Divider = styled.View`
  border:0.5px;
  border-color:${(props) => props.extraLignt}
  width:100%;
`;
const ShowList = styled.FlatList`
  margin-left: 18px;
`;

const ListItem = styled.TouchableOpacity`
  padding: 18px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: Montserrat-Regular;
`;

//logic
const data = [
  {
    id: "1",
    title: "Useful Information",
    routeName: "UsefulInfo",
  },

  {
    id: "2",
    title: "Getting around kathmandu",
    routeName: "GettingAround",
  },

  {
    id: "3",
    title: "Maps , City, Guide",
    routeName: "MapsCityGuide",
  },

  {
    id: "4",
    title: "Local Tips",
    routeName: "LocalTips",
  },
];

//api call

const TipsItem = ({ item, navigation }) => {
  return (
    <ListItem
      activeOpacity={0.75}
      onPress={() => {
        navigation.navigate(item.routeName);
      }}
    >
      <Title>{item.title}</Title>
      <Entypo name="chevron-small-right" size={30} color={colors.red} />
    </ListItem>
  );
};

function HandyTipsScreen({ navigation }) {
  const [tips, setTips] = useState(data);
  return (
    <Container white={colors.white}>
      <HeaderContainer>
        <Entypo
          name="chevron-left"
          onPress={() => {
            navigation.navigate("Essential");
          }}
          size={30}
          color={colors.red}
        />
        <HeaderName>
          <Headers title="Handy Tips" />
        </HeaderName>
      </HeaderContainer>

      <MainContainer>
        <FlatList
          data={tips}
          ItemSeparatorComponent={() => {
            return <Divider extraLignt={colors.lightGrey} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <TipsItem navigation={navigation} item={item} />;
          }}
        />
      </MainContainer>
    </Container>
  );
}

export default HandyTipsScreen;
