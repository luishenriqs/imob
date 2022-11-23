import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  //flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_600};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.regular};
    margin-left: 20px;
  `};
`;
