import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Details from './details';
import KeyScreen from './KeyScreen'
const HomeTabs = createBottomTabNavigator();


const HomeStack = createStackNavigator();

function MarketStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Market" component={Market} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}

const Home = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          }else if (route.name === 'KeyInfo') {
            iconName = 'vpn-key';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={MarketStackScreen} />
      <HomeTabs.Screen name="KeyInfo" component={KeyScreen} />
    </HomeTabs.Navigator>
  );
};

export default Home;
