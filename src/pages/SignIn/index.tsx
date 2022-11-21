import React from 'react';
import { 
    KeyboardAvoidingView, 
    TouchableOpacityProps,
    Platform
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ButtonText } from '@components/ButtonText';
import {
    Container,
    Header,
    BackButton,
    Imagem,
    Icon,
    FormContent
} from './styles';

type Props = TouchableOpacityProps;

export function SignIn({navigation}: {navigation: any}, { }: Props) {
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
            <Container>
                <Header>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={30}/>
                    </BackButton>
                    <Imagem
                        resizeMode='center'
                        source={require('../../assets/logo/LogoWhite65.png')} 
                    />
                </Header>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    style={{
                        flex: 1, 
                        paddingHorizontal: 40,
                    }}
                >
                    <FormContent>
                        <Input 
                            placeholder='Email'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <Input 
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button
                            title="Sign In"
                            type='GRAY-BUTTON'
                            onPress={() => {}}
                        />
                        <ButtonText 
                            title="Recuperar senha" 
                            onPress={() => {}} 
                        />
                    </FormContent>
                </KeyboardAvoidingView>
            </Container>
        </LinearGradient>
    );
};