import React from 'react';
import { Header } from '@components/Header';

import {
  Container, 
  Content, 
  Title
} from './styles';

export function Business({navigation}: {navigation: any}) {
  return (
    <Container>
      <Header
        onPress={() => navigation.openDrawer()}
      />
      <Content>
        <Title>Negócios</Title>
      </Content>
    </Container>
  );
};