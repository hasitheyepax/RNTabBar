import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Upload from '../screens/Upload';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import AnimatedTabBar from './components/AnimatedTabBar';
import Lottie from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import settingsIcon from './components/assets/icons/settings.icon.json';
import homeIcon from './components/assets/icons/home.icon.json';
import chatIcon from './components/assets/icons/chat.icon.json';
import uploadIcon from './components/assets/icons/upload.icon.json';

const BottomTabs = createBottomTabNavigator();

const Primary = () => {
  return (
    <BottomTabs.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
      <BottomTabs.Screen
        options={{
          //@ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              style={styles.icon}
              source={homeIcon}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTabs.Screen
        options={{
          //@ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              style={styles.icon}
              source={chatIcon}
            />
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <BottomTabs.Screen
        options={{
          //@ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              style={styles.icon}
              source={uploadIcon}
            />
          ),
        }}
        name="Upload"
        component={Upload}
      />
      <BottomTabs.Screen
        options={{
          //@ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              style={styles.icon}
              source={settingsIcon}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
  },
});

export default Primary;
