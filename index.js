import { AppRegistry } from 'react-native'
import App from './src/App'
import dotenv from 'react-native-dot-env'

dotenv()
AppRegistry.registerComponent('ticktr', () => App)
