import React from 'react';
import { Header } from '@components/Header';

import {
  Container, 
  Content, 
  Title
} from './styles';

export function Menu({navigation}: {navigation: any}) {
  return (
    <Container>
      <Header
        onPress={() => navigation.openDrawer()}
      />
      <Content>
        <Title>Menu</Title>
      </Content>
    </Container>
  );
};