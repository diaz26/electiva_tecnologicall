import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, ActionSheet, Root, Icon, View, Fab, Footer, FooterTab, Accordion, Input, Item } from 'native-base';
import { StyleSheet } from 'react-native';


export default class ListThumbnailExample extends Component {
  render() {
    return (
        <Container>
        <Content>
          <View>
            <Text> Referencia HASDJ21 </Text>
            <Text> Fecha: 19/02/2020 </Text>
            <Text> Fecha estimada entrega: 19/02/2020 </Text>
            <Text> Estado: PENDIENTE </Text>
            <Text> Total: $ 19.00 </Text>
          </View>
          <View style={{ alignSelf:"center" }}>
            <Text > DETALLES </Text>
          </View>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail rounded source={ require('../../../../assets/jeff.jpeg') } />
              </Left>
              <Body style={styles.body}>
                <View style={styles.view}>
                  <View style={styles.viewPerson1}>
                    <Text style={{ flex:5 }}>Bacardí 50 años</Text>
                    <Text note style={{ flex:4 }}> $ 50.000</Text>
                  </View>
                  <View style={styles.viewPerson}>
                  <Text style={{ flex:1 }}> 2 </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
            
          </List>
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