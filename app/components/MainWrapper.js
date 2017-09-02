import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


export default class MainWrapper extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#113377'
  }
});