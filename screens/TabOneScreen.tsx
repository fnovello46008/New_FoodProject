import { TabRouter } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Component } from 'react';

import FoodItem from './FoodItem';



export default function TabOneScreen({route, navigation}){

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log(route)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return(
      <View style={styles.container}></View>
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

function render() {
  throw new Error('Function not implemented.');
}

function componentDidMount() {
  throw new Error('Function not implemented.');
}

