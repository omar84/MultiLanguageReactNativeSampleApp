import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text  
} from 'react-native';

import config from '../config';
import LanguageSelector from '../components/LanguageSelector';

export default class Settings extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.gridWrapper}>
        <Text style={styles.titleText}>{config.I18n.t('global.language')}</Text>
        <LanguageSelector
          navigation={this.props.navigation}
          locale={this.props.locale}
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  titleText: {
    width: '100%',
    fontSize: 20,
    opacity: 0.9,
    color: '#FFFFFF',
    textAlign: 'left',
    margin: 3
  }
});