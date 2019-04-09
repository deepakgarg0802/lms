import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      //<View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text>header</Text>
          </View>
          <View style={styles.body}>
            
            
            <View style={{flex:1,flexDirection:'column',borderWidth:1,backgroundColor:"#e522de"}}>
              <Text>Side panel</Text>
            </View>
            <View style={{flex:1,backgroundColor:"#e52222"}}>
              <Text>Right panel</Text>
              <Text>Right panel</Text>
              <Text>Right panel</Text>
              <Text>Right panel</Text>
            </View>


          </View>
          <View style={styles.footer}>
            <Text>footer</Text>
          </View>
        </SafeAreaView>
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 24 : 0
  },
  header: {
    flex: .2,
    backgroundColor: '#1b2ac5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"
  },
  footer: {
    flex: .2,
    backgroundColor: '#1b2ac5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
