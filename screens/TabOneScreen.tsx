import { TabRouter, useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Component } from 'react';

import FoodItem from './FoodItem';
import { ScrollView } from 'react-native';

export default function TabOneScreen({route, navigation}){

  const [isloaded, setLoaded] = useState(false)
  const [Food, setFood] = useState([{}]);

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'}
  ]);

  const addFoodItem = (item) => {
    console.log("ADDED " + item.text)
    addItem(item);
  }

  const addItem = (name) => {
    setFood(previous =>[...previous, name]);
  }

  useFocusEffect(
    React.useCallback(() => {

        if(isloaded == false)
        {
          if(route.params?.info)
          {
            addFoodItem(route.params.info)
          }
       
        }
  
      return () => {
        setLoaded(false)
      };
    },[route.params?.info])
  );

  return(
    <ScrollView style={styles.container}>
      <View >
        {
          Food.map((data, index)=>{
            if(data.text != null)
            {
              return (<FoodItem key={index} name={data.text} />)
            }
          })
        }
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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