import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Authors from '../screens/Authors';
import Books from '../screens/Books';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const BottomTabs = createBottomTabNavigator();

const Primary = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Books" component={Books} />
      <BottomTabs.Screen name="Authors" component={Authors} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
};

export default Primary;
