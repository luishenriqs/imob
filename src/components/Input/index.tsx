import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, InputTypeStyleProps } from './styles';

type Props = TextInputProps & {
    type?: InputTypeStyleProps;
}

export function Input({ type = 'PRIMARY', ...rest }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container 
            placeholderTextColor={COLORS.gray_500}
            type={type}
            {...rest}
        />
    );
};