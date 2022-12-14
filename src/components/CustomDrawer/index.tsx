import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { 
    Container, 
    DrawerContent, 
    Imagem, 
    DrawerListContent, 
    Line,
    ButtonBottom,
    ButtonContent,
    TextButton
} from './styles';

export function CustomDrawer(props: any) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <DrawerContentScrollView {...props} 
                contentContainerStyle={{backgroundColor: COLORS.blue_300}}
            >
                <Imagem
                    resizeMode='center'
                    source={require('../../assets/logo/LogoBlue65.png')} 
                />
                <DrawerContent>
                    <DrawerItemList {...props} />
                </DrawerContent>
            </DrawerContentScrollView>
            <Line />
            <DrawerListContent>
                <ButtonBottom onPress={() => {console.log('Termos de uso')}}>
                    <ButtonContent>
                        <MaterialCommunityIcons 
                            name='file-document-outline'
                            size={20}
                            color={COLORS.gray_500}
                        />
                        <TextButton>Terms of use</TextButton>
                    </ButtonContent>
                </ButtonBottom>
                <ButtonBottom onPress={() => {console.log('LogOut')}}>
                    <ButtonContent>
                        <Octicons 
                            name='sign-out'
                            size={20}
                            color={COLORS.gray_500}
                        />
                        <TextButton>Log Out</TextButton>
                    </ButtonContent>
                </ButtonBottom>
            </DrawerListContent>
        </Container>
    )
}