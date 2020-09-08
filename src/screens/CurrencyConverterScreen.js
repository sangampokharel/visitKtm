import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { Entypo } from "@expo/vector-icons";
import Headers from "../components/Headers/Headers";

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.white};
  padding: 40px 16px;
`;

const MainContainer = styled.View``;

const TextInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  margin-top: 50px;
`;

const TextInput = styled.TextInput`
  elevation: 2;
  border-radius: 10px;
  height: 50px;
  padding: 10px 30px;
  margin: 0px 10px;
  width: 45%;
  background: ${(props) => props.white};
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderName = styled.View`
  margin-left: 18px;
`;

function CurrencyConverterScreen({ navigation }) {
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
          <Headers title="Currency Converter" />
        </HeaderName>
      </HeaderContainer>

      <HeaderContainer>
        <TextInputContainer>
          <TextInput
            keyboardType="numeric"
            white={colors.white}
            placeholder="Rupees"
          />

          <TextInput
            keyboardType="numeric"
            white={colors.white}
            placeholder="US Dollar"
          />
        </TextInputContainer>
      </HeaderContainer>
    </Container>
  );
}

export default CurrencyConverterScreen;
