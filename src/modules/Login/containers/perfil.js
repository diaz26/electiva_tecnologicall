import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, ActionSheet, Root, Icon, View, Fab, Footer, FooterTab, Input, Item, Label } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ListThumbnailExample extends Component {
  render() {
    return (
        <Container>
          <Content>
            <Item style={{alignSelf:"center" }}>
              <Thumbnail style={{ width:'100px', height:'100px' }} rounded source={ require('../../../../assets/jeff.jpeg') } />
              <Icon name="color-filter"></Icon>
            </Item>
            
          <Item stackedLabel style={{ marginTop:'7px' }}>
            <Label>Nombres</Label>
            <Input style={{ height:'35px' }} value=" Jeff"/>
          </Item>
          <Item stackedLabel style={{ marginTop:'7px' }}>
            <Label>Apellidos</Label>
            <Input style={{ height:'35px' }} value="Díaz Aya"/>
          </Item>
          <Item stackedLabel style={{ marginTop:'7px' }}>
            <Label>Correo</Label>
            <Input style={{ height:'35px' }} disabled value="Jeff@gmail.com"/>
          </Item>
          <Item stackedLabel style={{ marginTop:'7px' }}>
            <Label>Identificación</Label>
            <Input style={{ height:'35px' }} value="1003810783"/>
          </Item>
          <Item stackedLabel style={{ marginTop:'7px' }}>
            <Label>Cuenta de PayPal</Label>
            <Input style={{ height:'35px' }} value="Jeff@gmail.com"/>
          </Item>
          <Button style={{  height:'35px', marginTop:'7px' }} block>
            <Text>Guardar</Text>
          </Button>
            
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Home')
              }}>
                <Icon name="home" />
                <Text>Home</Text>
              </Button>
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Perfil')
              }}>
                <Icon name="person" />
                <Text>Perfil</Text>
              </Button> 
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Carrito')
              }}>
                <Icon name="cart" />
                <Text>Carrito</Text>
              </Button>
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Pedidos')
              }}>
                <Icon name="paper" />
                <Text>Pedidos</Text>
              </Button>
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Productos')
              }}>
                <Icon name="grid" />
                <Text>Productos</Text>
              </Button>
              <Button vertical onPress={ () => {
                this.props.navigation.navigate('Login')
              }}>
                <Icon name="logout" />
                <Text>Salir</Text>
              </Button>
              
            </FooterTab>
          </Footer>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
  body:{
    marginLeft: '20%',
    justifyContent:'center'
  },
  view: {
    flex:1,
    flexDirection:'row'
  },
  viewPerson1: {
    width: '50px',
    alignItems:"flex-start",
    flex:2,
    flexDirection:'row'
  },
  viewPerson: {
    alignContent: "flex-end",
    alignItems:"flex-end",
    flex:1,
    flexDirection:'row'
  }

});