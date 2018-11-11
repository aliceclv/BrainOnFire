import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Home from './components/Home.js';



class App extends React.Component {
  // Here I should differentiate whether I am logged in or not
  //         // <View style={container}>
        //   <Text style={textStyle}>Say goodbye to your migraines</Text>
        //   <Button title="register"/>
        //   <Button title="sign in"/>
        // </View>


  render() {
    const { container, textStyle } = styles;
    return (
      <Provider store={createStore(reducers)}>
        <Home/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20
  }
});


//https://docs.expo.io/versions/latest/sdk/register-root-component
Expo.registerRootComponent(App);
