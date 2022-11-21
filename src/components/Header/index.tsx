import React from 'react';
import {
  Container, 
  HeaderWrapper, 
  HeaderContent,
  Imagem, 
  Icon, 
  ProfileWrapper
} from './styles';

interface HeaderProps {
  onPress(): void;
}

export function Header({
  onPress
}: HeaderProps) {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderContent>
          <ProfileWrapper/>
          <Imagem
            resizeMode='center'
            source={require('../../assets/logo/LogoBlue65.png')} 
          />
          <Icon size={30} name="menu" onPress={onPress} />
        </HeaderContent>
      </HeaderWrapper>
    </Container>
  );
};