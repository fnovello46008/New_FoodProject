import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import TabOneScreen from './TabOneScreen';

export default function TabThreeScreen({ navigation: { navigate } }) {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    


    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);


  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

fetch(`https://api.spoonacular.com/food/products/upc/${data.substring(1)}?apiKey=e830a9216a0a43568c201e2d5da11560`)
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.title);
      //console.log(responseJson.title);

      navigate('TabOneScreen', {
        screen: 'TabOneScreen',
        foodName: responseJson.title,
      });

    })
    .catch((error) => {
      console.error(error);
    });

    //console.log(data);


    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
  camera: {
      flex: 1,
  }
});
