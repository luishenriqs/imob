import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 16px;
  ${({ theme }) => css`
    background: ${theme.COLORS.blue_800};
    color: ${theme.COLORS.white};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.regular};
    border: 1px ${theme.COLORS.blue_900};
  `};
`;
