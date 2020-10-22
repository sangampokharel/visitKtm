import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Headers from "../components/Headers/Headers";
import { Entypo } from "@expo/vector-icons";
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
  padding-top: 40px;
`;
const Description = styled.Text`
  font-size: 14px;
  font-family: Montserrat-Regular;
`;
function AboutUsScreen({ navigation }) {
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
          <Headers title="About Us" />
        </HeaderName>
      </HeaderContainer>

      <MainContainer>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Description>
      </MainContainer>
    </Container>
  );
}

export default AboutUsScreen;
