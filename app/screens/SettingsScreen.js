import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import config from '../config';
import MainWrapper from '../components/MainWrapper';
import Settings from '../components/Settings';


export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: config.I18n.t('global.settings', {locale: navigation.state.params.locale})
  });

  render() {
    let locale = this.props.navigation.state.params.locale;

    return (
      <MainWrapper>
        <View style={styles.homeContainer}>
          <Settings
            navigation={this.props.navigation}
            locale={locale}
          />
        </View>
      </MainWrapper>
    );
  }
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    width: '100%'
  }
});