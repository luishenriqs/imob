import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  Platform,
  FlatList
} from 'react-native';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { InputTextArea } from '@components/InputTextArea';
import { Button } from '@components/Button';
import { ButtonRadio } from '@components/ButtonRadio';
import {
  Container, 
  Content, 
  Title
} from './styles';

const mock = [
  {
    id: '1',
    position: 1,
    type: 'input',
    style: 'text',
    label: 'Endereço'
  },
  {
    id: '2',
    position: 2,
    type: 'input',
    style: 'text',
    label: 'Cidade'
  },
  {
    id: '3',
    position: 3,
    type: 'input',
    style: 'diferente',
    label: 'Descrição'
  },
  {
    id: '4',
    position: 4,
    type: 'button',
    style: 'radio',
    label: 'Condomínio'
  },
  {
    id: '5',
    position: 5,
    type: 'button',
    style: 'radio',
    label: 'Academia'
  },
  {
    id: '6',
    position: 6,
    type: 'button',
    style: 'radio',
    label: 'Playground'
  },
  {
    id: '10',
    position: 10,
    type: 'button',
    style: 'regular',
    label: 'Salvar'
  },
]

export function Properties({navigation}: {navigation: any}) {
  const [isActive, setIsActive] = useState(false)

  function handleSelectAdmin() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <Container>
      <Header
        onPress={() => navigation.openDrawer()}
      />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{
              flex: 1, 
              paddingHorizontal: 40,
          }}
        >
          <Content>
            <Title>Cadastre aqui o seu imóvel</Title>
            <FlatList
              data={mock}
              keyExtractor={item => item.id}
              style={{ width: 280}}
              renderItem={({ item }) => (
                item.type === 'input' ? 
                (
                  item.style === 'text' ? (
                    <Input 
                      placeholder={item.label}
                      autoCorrect={false}
                      autoCapitalize='none'
                    />
                  ) : (
                    <InputTextArea
                      placeholder={item.label}
                      autoCorrect={false}
                      autoCapitalize='none'
                    />
                  )
    
                ) : (
                  item.style === 'regular' ? (
                    <Button 
                      title={item.label}
                    />
                  ) : (
                    <ButtonRadio 
                      title={item.label}
                      type={isActive}
                      onPress={handleSelectAdmin}
                    />
                  )
                )
              )}
            />
          </Content>
        </KeyboardAvoidingView>
    </Container>
  );
};