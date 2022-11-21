import { Image } from "react-native";
import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Header = styled.View`
  width: 100%;
  height: 55%;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  background-color: "#ff9000";
`;

export const WellcomeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gold};
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.bold};
  `};
`;

export const Imagem = styled(Image)`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Content = styled.View`
  width: 100%;
  height: 45%;
  margin-top: ${RFPercentage(2)}px;
  padding: 0 40px;
  align-items: center;
  justify-content: center;
`;
