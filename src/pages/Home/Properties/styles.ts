import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.gray_100};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 20px 0;
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_600};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.bold};
  `};
`;
