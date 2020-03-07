import React, { Component } from 'react';
import { Container, Content, Button, Body, Text, Card, CardItem, Form, Input, Item } from 'native-base';
import { StyleSheet } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons"


class Register extends Component {

  constructor(props) {
    super(props);

  }

  guardar = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter} >Registro de usuario</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={styles.body}>
                <Form>
                    <Item inlineLabel>
                        <MaterialIcons name='email' size={20} ></MaterialIcons>
                        <Input placeholder="Nombre de usuario" />
                    </Item>
                  <Item inlineLabel>
                    <FontAwesome name='user' size={20} ></FontAwesome>
                    <Input placeholder="Nombre de usuario" />
                  </Item>
                  <Item inlineLabel last>
                    <Ionicons name='md-lock' size={20}></Ionicons>
                    <Input placeholder="Contraseña" />
                  </Item>
                </Form>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button rounded style={styles.boton} onPress={this.guardar}>
              <Text>Guardar</Text>
            </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textCenter:{
    textAlign: 'center',
    width: '100%'
  },
  content:{
    flex:1,
    justifyContent:'center'
  },
  boton:{
    marginLeft:'70%'
  },
  body:{
    paddingVertical:20
  }

})

export default Register;