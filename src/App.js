import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './modules/Login/containers/login';
import Register from './modules/Login/containers/register';
import Home from './modules/Login/containers/home';
import Perfil from './modules/Login/containers/perfil';
import Carrito from './modules/Login/containers/carrito';
import Pedidos from './modules/Login/containers/pedidos';
import Productos from './modules/Login/containers/productos';
import Producto from './modules/Login/containers/product';
import Procesar from './modules/Login/containers/procesar';
import Parcial from './modules/Login/containers/parcial';

const LoginNavigator = createStackNavigator({
  Login: {
    screen : Login,
    navigationOptions: {
      title: 'BASEO'
    }
  },
  Register: {
    screen : Register,
    navigationOptions: {
      title: 'REGISTRATE EN BASEO'
    }
  },
  Home: {
    screen : Home,
    navigationOptions: {
      title: 'BIENVENIDO A BASEO'
    }
  },
  Perfil: {
    screen : Perfil,
    navigationOptions: {
      title: 'PERFIL'
    }
  },
  Carrito: {
    screen : Carrito,
    navigationOptions: {
      title: 'CARRITO'
    }
  },
  Producto: {
    screen : Producto,
    navigationOptions: {
      title: 'BACARDÍ 50 AÑOS'
    }
  },
  Procesar: {
    screen : Procesar,
    navigationOptions: {
      title: 'COMPLETAR PEDIDO'
    }
  },
  Pedidos: {
    screen : Pedidos,
    navigationOptions: {
      title: 'PEDIDOS'
    }
  },
  Productos: {
    screen : Productos,
    navigationOptions: {
      title: 'MIS PRODUCTOS'
    }
  }

}, {headerLayoutPreset: 'center'});

export default createAppContainer(LoginNavigator)