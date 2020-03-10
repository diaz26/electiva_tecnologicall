import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, ActionSheet, Root, Icon, View, Fab, Footer, FooterTab, Accordion, Input, Item } from 'native-base';
import { StyleSheet } from 'react-native';


export default class ListThumbnailExample extends Component {
  render() {
    return (
        <Container>
        <Content padder>
          <Item style={{ flex:1 }}>
            <Input style={{ flex:6, borderRadius:'50px', borderColor:'#3F51B5', borderWidth:'2px', height:'40px' }} rounded placeholder="Buscar por referencia" />
            <Button transparent style={{ flex:2 }} vertical>
                <Icon name="search" />
              </Button>
          </Item>
          <List style={{ marginTop:'10px' }}>
            <ListItem style={{ height:'40px' }}>
              <Body style={styles.body}>
                <View style={ styles.view }>
                  <View style={ styles.viewPerson1 }>
                    <Text style={{ fontSize:'15px' }}>Referencia: ASHJKDH12</Text>
                    <Text style={{ fontSize:'15px' }}>Total: $ 12.00</Text>
                  </View>

                  <View style={ styles.viewPerson }>
                    <Button transparent primary  onPress={ () => {
                        this.props.navigation.navigate('Pedido')
                      }}>
                      <Icon name='eye' />
                    </Button>
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
    marginLeft: '5px',
    justifyContent:'center',
  },
  view: {
    flex:1,
    flexDirection:'row'
  },
  viewPerson1: {
    alignItems:"flex-start",
    flex:5,
    flexDirection:'row'
  },
  viewPerson: {
    alignContent: "flex-end",
    alignItems:"flex-end",
    height:'20px',
    flex:1,
    flexDirection:'row'
  }

});