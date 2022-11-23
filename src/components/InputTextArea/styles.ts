import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type InputTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: InputTypeStyleProps;
};

export const Container = styled(TextInput)<Props>`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 16px;

  ${({ type, theme }) =>
    type === "PRIMARY" &&
    css`
      background: ${theme.COLORS.blue_100};
      color: ${theme.COLORS.white};
      font-size: ${theme.FONT_SIZE.MD};
      font-family: ${theme.FONT_FAMILY.regular};
      border: 1px ${theme.COLORS.blue_900};
    `};

  ${({ type, theme }) =>
    type === "SECONDARY" &&
    css`
      background: ${theme.COLORS.blue_800};
      color: ${theme.COLORS.white};
      font-size: ${theme.FONT_SIZE.MD};
      font-family: ${theme.FONT_FAMILY.regular};
      border: 1px ${theme.COLORS.blue_900};
    `};
`;
