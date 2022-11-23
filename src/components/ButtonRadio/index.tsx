import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type: boolean;
}

export function ButtonRadio({ title, type, ...rest }: Props) {
    const theme = useTheme();
    return (
        <Container 
            {...rest}
        >
            <MaterialCommunityIcons
                size={28}
                name={type ? 'radiobox-marked' : 'radiobox-blank'}
                style={{ color: type 
                    ? theme.COLORS.blue_700 
                    : theme.COLORS.gray_600
                }}
            />
            <Title>
                {title}
            </Title>
        </ Container>
    );
};