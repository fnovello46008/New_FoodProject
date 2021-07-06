import { TabRouter } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function TabOneScreen({route, navigation}) {

    return (
      <View style={styles.container}>
        {/* <Text>Product: {info}</Text> */}
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

