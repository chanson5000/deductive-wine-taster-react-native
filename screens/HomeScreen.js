import React from 'react';
import {Image, Text, View,} from 'react-native';
import styles from '../constants/Styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.defaultHeaderContainer}>
            <Text style={styles.headerText}>
              Deductive Wine Taster
            </Text>
          </View>
          <View style={styles.mainViewContainer}>
            <View style={styles.startBlindTastingContainer}>
              <Text style={styles.defaultTitleText}>
                Start Blind Tasting!
              </Text>
            </View>
            <View style={styles.wineGlassesContainer}>
              <Image source={require('../assets/images/redwineglass-full-large.png')}/>
              <Image source={require('../assets/images/whitewineglass-full-large.png')}/>
            </View>
          </View>
        </View>
    );
  }
}
