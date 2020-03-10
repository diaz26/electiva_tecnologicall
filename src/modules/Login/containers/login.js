import React, { Component } from 'react';
import { Container, Content, Button, Body, Text, Card, CardItem, Form, Input, Item } from 'native-base';
import { StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons"

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        usuario: '',
        contrasena: '',
        validateUser: null,
        validatePass: null
      }
    }

    register = () => {
        this.props.navigation.navigate('Register');
    }

    login = () => {
      /*if (this.state.usuario === '') {
        //this.state.validateUser = 'El campo es requerido';
        this.setState(() => ({ validateUser: 'El campo es requerido' }));
      } else {
        // this.state.validateUser = null;
        this.setState(() => ({ validateUser: null }));
      }

      if (this.state.contrasena === '') {
        // this.state.validatePass = 'El campo es requerido';
        this.setState(() => ({ validatePass: 'El campo es requerido' }));
      } else {
        //this.state.validatePass = null;
        this.setState(() => ({ validatePass: null }));
      }
      if (this.state.validateUser === null && this.state.validatePass === null) {
      }*/
      this.props.navigation.navigate('Home');
    }

    render() {
        return (
        <Container>
            <Content padder contentContainerStyle={styles.content}>
            <Card>
                <CardItem header bordered>
                <Text style={styles.textCenter} >Inicio de sesión</Text>
                </CardItem>
                <CardItem bordered>
                <Body style={styles.body}>
                    <Form>
                    <Item inlineLabel>
                        <FontAwesome name='user' size={20} ></FontAwesome>
                        <Input placeholder="Nombre de usuario" value={this.state.usuario} onChangeText={ (usuario) => this.setState({usuario} ) } />
                    </Item>
                        {!!this.state.validateUser && (
                          <Text style={styles.errorRequired }>{this.state.validateUser}</Text>
                        )}
                    <Item inlineLabel last>
                        <Ionicons name='md-lock' size={20}></Ionicons>
                        <Input placeholder="Contraseña" value={ this.state.contrasena} onChangeText={ (contrasena) => this.setState({contrasena} ) } />
                    </Item>
                        {!!this.state.validatePass && (
                          <Text style={styles.errorRequired }>{this.state.validatePass}</Text>
                        )}
                    </Form>
                </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button onPress={this.register} rounded primary style={styles.boton}>
                    <Text>Regístrate</Text>
                  </Button>
                  <Button onPress={this.login} rounded success style={styles.boton}>
                    <Text>Ingresar</Text>
                </Button>
                </CardItem>
            </Card>
            </Content>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
  errorRequired: {
    color: "red", 
    fontSize:9,
    justifyContent:'center'
  },
  textCenter:{
    textAlign: 'center',
    width: '100%'
  },
  content:{
    flex:1,
    justifyContent:'center'
  },
  boton:{
    marginLeft:'10%'
  },
  body:{
    paddingVertical:20
  }

});

export default Login;