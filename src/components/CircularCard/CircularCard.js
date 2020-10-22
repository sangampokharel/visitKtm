import React from "react";
import styled from "styled-components";

const OuterCircle = styled.TouchableOpacity`
  border: 20px solid rgba(0, 0, 0, 0.09);
  width: 180px;
  height: 180px;
  border-radius: 90px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

const InnerCircle = styled.View`
  border: 10px solid rgba(0, 0, 0, 0.3);
  width: 150px;
  height: 150px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
`;

const ImageBackground = styled.ImageBackground`
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;

const TitleOverlay = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Title = styled.Text`
  font-size: 20px;
  width: 100%;
  padding: 8px;
  text-align: center;
  color: #fff;
`;

const CircularCard = ({ title, avatar }) => {
  return (
    <OuterCircle activeOpacity={0.75}>
      <InnerCircle>
        <ImageBackground source={{ uri: avatar }}>
          <TitleOverlay>
            <Title>{title}</Title>
          </TitleOverlay>
        </ImageBackground>
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularCard;
