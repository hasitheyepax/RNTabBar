import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet} from 'react-native';
import Primary from './src/navigation/Primary';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Primary />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
