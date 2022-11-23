import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 10px;

  ${({ type, theme }) =>
    type === "PRIMARY" &&
    css`
      background-color: ${theme.COLORS.blue_800};
    `};

  ${({ type, theme }) =>
    type === "SECONDARY" &&
    css`
      border: 1px ${theme.COLORS.blue_900};
    `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.bold};
  `};
`;
