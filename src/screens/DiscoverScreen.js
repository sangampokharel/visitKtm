import React, { useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import CircularCard from "../components/CircularCard/CircularCard";
import { widthToDp, heightToDp } from "../../utlis/Responsive";
import Cards from "../components/Cards/Cards";
import AdvancedCard from "../components/AdvancedCard/AdvancedCard";
import Headers from "../components/Headers/Headers";
import styled from "styled-components";
import { colors } from "../../constant/colors";
const DiscoverScreen = ({ navigation }) => {
  const [keyNum, setkeyNum] = useState(2);
  const users = [
    {
      id: "1",
      name: "brynn",
      avatar:
        "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "2",
      name: "brynn",
      avatar:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "3",
      name: "brynn",
      avatar:
        "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "4",
      name: "brynn",
      avatar:
        "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  const Discoveries = [
    {
      id: "1",
      title: "Explores",
      description: "Taste Something Different ",
      avatar:
        "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "2",
      title: "Foodies",
      description: "Discover Places in Cities",
      avatar:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "3",
      title: "socialier",
      description: "Come for atmoshere stay for company",
      avatar:
        "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "4",
      title: "Action Seekers",
      description: "Chase the excitment and thrilles",
      avatar:
        "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "5",
      title: "Culture Shapers",
      description: "Experience in Arts and Culture",
      avatar:
        "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  const SafeAreaView = styled.SafeAreaView`
    background: ${(props) => props.color};
    flex: 1;
  `;

  const ScrollView = styled.ScrollView`
    flex: 1;
    margin-bottom: 30px;
  `;

  const Container = styled.View``;

  const SecondaryContainer = styled.View`
    margin: 0 16px;

    padding-top: 20px;
  `;

  const ItemSeperate = styled.View`
    width: 50px;
    background-color: red;
  `;

  return (
    <SafeAreaView color={colors.white}>
      <ScrollView>
        <Container>
          <FlatList
            numColumns={keyNum}
            data={Discoveries}
            renderItem={({ item }) => (
              <CircularCard title={item.title} avatar={item.avatar} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          {/**

          <Headers title="Discover Kathmandu" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Discoveries}
            renderItem={({ item }) => (
              <AdvancedCard
                name={item.title}
                description={item.description}
                avatar={item.avatar}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
            
        <SecondaryContainer>
          <Headers title="Local Recommendations" />
          <FlatList
            horizontal
            data={users}
            renderItem={({ item }) => (
              <Cards name={item.name} avatar={item.avatar} />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={true}
          />
        </SecondaryContainer>
         */}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
