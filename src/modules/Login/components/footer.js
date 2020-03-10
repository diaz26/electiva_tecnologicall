import React, { Component } from 'react';
import { Text, Button, Icon, Footer, FooterTab } from 'native-base';

class Nav extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={ () => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="home" />
                    <Text>Home</Text>
                    </Button>
                    <Button vertical onPress={ () => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="person" />
                    <Text>Perfil</Text>
                    </Button> 
                    <Button vertical onPress={ () => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="cart" />
                    <Text>Carrito</Text>
                    </Button>
                    <Button vertical onPress={ () => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="paper" />
                    <Text>Pedidos</Text>
                    </Button>
                    <Button vertical onPress={ () => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="grid" />
                    <Text>Productos</Text>
                    </Button>
                    <Button vertical onPress={ () => {
                    this.this.props.navigation.navigate('Home')
                    }}>
                    <Icon name="logout" />
                    <Text>Salir</Text>
                    </Button>
                    
                </FooterTab>
            </Footer>
        );
    }
}
export default Nav;
