import React from 'react';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { LoadingIndicator } from './styles';

export function Loading() {
    const theme = useTheme();

    return (
        <LinearGradient
            style={{flex: 1, justifyContent: 'center'}}
            colors={[
                theme.COLORS.blue_900,
                theme.COLORS.blue_500,
                theme.COLORS.blue_300,
                theme.COLORS.blue_500,
                theme.COLORS.blue_900,
            ]}
        >
            <LoadingIndicator />
        </LinearGradient>
    );
}