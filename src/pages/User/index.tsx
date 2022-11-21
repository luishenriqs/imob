import React from 'react';
import { Header } from '@components/Header';

import {
  Container, 
  Content, 
  Title
} from './styles';

export function User({navigation}: {navigation: any}) {
  return (
    <Container>
      <Header
        onPress={() => navigation.openDrawer()}
      />
      <Content>
        <Title>Preferências do Usuário</Title>
      </Content>
    </Container>
  );
};