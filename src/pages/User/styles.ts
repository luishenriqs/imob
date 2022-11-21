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
  padding: 10px 15px 0;
`;

export const Title = styled.Text`
  margin-top: 30px;
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_600};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.bold};
  `};
`;
