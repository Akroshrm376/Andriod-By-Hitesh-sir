import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView, ScrollView } from 'react-native';
import PassWordGen from './components/PassWordGen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PassWordGen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sview: {

  },
});

export default App;
