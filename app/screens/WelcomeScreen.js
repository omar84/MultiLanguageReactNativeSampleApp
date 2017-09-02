import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  I18nManager,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation'


import config from '../config';
import MainWrapper from '../components/MainWrapper';
import RNRestart from 'react-native-restart';
import _ from 'lodash';


export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.timeouts = [];
    StatusBar.setHidden(true);
    let localePath = 'props.navigation.state.params.locale';
    this.locale = config.I18n.locale = _.get(this, localePath, config.DEFAULT_LOCALE);

    //if user changed the language, save it, and restart the app
    if (_.has(this, localePath)) {
      AsyncStorage.setItem('@RNMLsample:locale', this.locale, (err, result) => {
        this.timeouts.push(setTimeout(() => {
          RNRestart.Restart();
        }, 50));
      });
    }

    //read saved language from storage, then reset navigate to home page
    AsyncStorage.getItem('@RNMLsample:locale', (err, locale) => {
      if (locale !== null) { this.locale = config.I18n.locale = locale; }
      I18nManager.forceRTL(!(config.LTR_LOCALES.includes(this.locale)));
      this.timeouts.push(setTimeout(() => {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'Home',
              params: { locale: this.locale }
            })
          ]
        }))
      }, 100));
    });
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <MainWrapper>
        <View style={styles.welcomeContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.buttonText}>{config.I18n.t('global.loading')}</Text>
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