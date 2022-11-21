import { Image } from "react-native";
import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.blue_500};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${getStatusBarHeight() + RFPercentage(9)}px;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px 0;
`;

export const Imagem = styled(Image)`
  align-self: center;
  width: 150px;
  height: 130px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.COLORS.gray_100};
  padding-bottom: 5px;
`;

export const ProfileWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme }) => theme.COLORS.gray_100};
`;
