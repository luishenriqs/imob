import React from 'react';
import { Header } from '@components/Header';

import {
  Container, 
  Content, 
  Title
} from './styles';

export function Settings({navigation}: {navigation: any}) {
  return (
    <Container>
      <Header
        onPress={() => navigation.openDrawer()}
      />
      <Content>
        <Title>Configurações do aplicativo</Title>
      </Content>
    </Container>
  );
};