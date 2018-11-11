import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Home extends React.Component {

  render() {
    const { container, textStyle } = styles;

    return (
      <View style={container}>
        <Text style={textStyle}>Welcome USER_NAME, last time you had a migraine was DAYS_COUNT ago.</Text>
        <Button title="I've got one 🤯"/>
        <Button title="see my stats"/>
      </View>
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

export default Home;