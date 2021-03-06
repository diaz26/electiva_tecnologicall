import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, ActionSheet, Root, Icon, View, Fab, Footer, FooterTab, Item } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ListThumbnailExample extends Component {
  render() {
    return (
        <Container>
          <Content>
            
            <Item style={{ marginTop:'10px' ,alignSelf:"flex-end", marginRight:'5px' }}>
                <Text style={{ paddingRight:"10px" }}>
                    Total: $ 50,99
                </Text>
              <Button iconLeft style={{ height:"40px" , width:'120px'}}>
                <Icon name='refresh' />
                <Text>Pagar</Text>
              </Button>
            </Item>
            
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
    alignSelf:"center",
    alignContent: "flex-end",
    alignItems:"flex-end",
    flex:1,
    flexDirection:'row'
  }

});