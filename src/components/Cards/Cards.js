import React from "react";
import { View, Image, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  width: 200px;
  height: 150px;
  elevation: 1;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 4px;
`;
const Avatar = styled.Image`
  width: 200px;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 12px;
  padding: 10px;
`;

const Cards = ({ name, avatar }) => {
  return (
    <Container>
      <Avatar source={{ uri: avatar }} />
      <Title>{name}</Title>
    </Container>
  );
};

export default Cards;
