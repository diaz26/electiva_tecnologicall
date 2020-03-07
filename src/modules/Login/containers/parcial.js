import React, { Component } from 'react';
import { Container, Content, Text, Item, Input, Label, Button } from 'native-base';

export default class Parcial extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num1: '',
            num2: ''
        }
    }

    sumar = () => {
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)

        console.log(num1 + num2)
    }

    restar = () => {
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)

        console.log(num1 - num2)

    }

    render() {
      return (
            <Container>
                <Content>
                    <Item style={{ alignSelf:"center" }}>
                        <Text>
                            Suma y resta
                        </Text>
                    </Item>
                    <Item stackedLabel style={{ marginTop:'7px' }}>
                        <Label>Numero1</Label>
                        <Input name="num1" value={this.state.num1} onChangeText={ (num1) => this.setState({num1} ) } />
                    </Item>
                    <Item stackedLabel style={{ marginTop:'7px' }}>
                        <Label>Numero2</Label>
                        <Input name="num2"  value={this.state.num2} onChangeText={ (num2) => this.setState({num2} ) } />
                    </Item>
                    <Item>
                        <Button onPress={this.sumar}>
                            <Text>
                            +
                            </Text>
                        </Button>
                        <Button onPress={this.restar}>
                            <Text>
                            -
                            </Text>
                        </Button>
                    </Item>



                </Content>
            </Container>
      );
    }
}