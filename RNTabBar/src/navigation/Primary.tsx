import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Authors from '../screens/Authors';
import Books from '../screens/Books';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import AnimatedTabBar from './components/AnimatedTabBar';

const BottomTabs = createBottomTabNavigator();

const Primary = () => {
  return (
    <BottomTabs.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
      <BottomTabs.Screen
        options={{
          tabBarIcon: null,
        }}
        name="Home"
        component={Home}
      />
      <BottomTabs.Screen name="Books" component={Books} />
      <BottomTabs.Screen name="Authors" component={Authors} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
};

export default Primary;
