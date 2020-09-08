import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../constant/colors";
const Essentials = ({ icon, title }) => {
  const Container = styled.View`
    padding: 10px;
    width: 150px;
    height: 100px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 1px;
    elevation: 1;
  `;

  const Title = styled.Text`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
    color: ${(props) => props.red};
    font-family: Montserrat-Medium;
  `;

  return (
    <Container red={colors.red}>
      <Feather name={icon} size={32} color={colors.red} />
      <Title red={colors.red}>{title}</Title>
    </Container>
  );
};

export default Essentials;
