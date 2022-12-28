import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {useRef} from 'react';
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

export default function TabBarComponent({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) {
  const ref = useRef(null);

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.container}>
      <View>
        {options.tabBarIcon ? (
          /* @ts-ignore */
          options.tabBarIcon({ref})
        ) : (
          <Text style={styles.text}>?</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  text: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
});
