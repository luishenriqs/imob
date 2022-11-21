import React from 'react';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@components/Button';
import {
    Header,
    Imagem,
    Content
} from './styles';

export function Wellcome({navigation}: {navigation: any}) {
    const theme = useTheme();

    return (
        <LinearGradient
            style={{flex: 1}}
            colors={[
                theme.COLORS.blue_900,
                theme.COLORS.blue_500,
                theme.COLORS.blue_300,
                theme.COLORS.blue_500,
                theme.COLORS.blue_900,
            ]}
        >
            <Header>
                <Imagem
                    resizeMode='center'
                    source={require('../../assets/logo/LogoWhite65.png')} 
                />
            </Header>
            <Content>
                <Button
                    title="Entrar"
                    type='GRAY-BUTTON'
                    onPress={() => navigation.navigate('signIn')}
                />
            </Content>
        </LinearGradient>
    );
};