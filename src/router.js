import { Platform } from 'react-native'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'

export const SignedOut = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  }
})

const routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Welcome'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
}

export const SignedIn = Platform.OS === 'android'
  ? createMaterialTopTabNavigator(routes)
  : createBottomTabNavigator(routes)

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator({
    SignedIn: { screen: SignedIn },
    SignedOut: { screen: SignedOut }
  }, {
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  })
}
