import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import config from '../config';
import MainWrapper from '../components/MainWrapper';


export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: config.I18n.t('global.home', {locale: navigation.state.params.locale})
  });

  render() {
    const { navigate } = this.props.navigation;
    let locale = config.I18n.locale = this.props.navigation.state.params.locale;

    return (
      <MainWrapper>
         <View style={styles.welcomeContainer}>
          <View style={styles.formContainer}>
            <TouchableOpacity style={styles.formButton} onPress={() => navigate('Settings', {locale: locale})}>
              <Text style={styles.buttonText}>{config.I18n.t('global.settings')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </MainWrapper>
    );
  }
}


const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 10,
  },
  formContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginTop: 10
  },
  formButton: {
    backgroundColor: '#227799',
    opacity: 0.8,
    padding: 15,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF',
  }
});