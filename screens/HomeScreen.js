import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

import styles from '../styles';
import {useState} from 'react';

const boxes = new Array(10).fill(null).map((v, i) => i + 1);

export default function HomeScreen({navigation}) {
  const[counter, setCounter] = useState(1);
  const[green, setGreen] = useState(1);

  return (
    <View style={styles.container}>
       <Button title="Go to list view" onPress={
         () => {
           navigation.navigate("Details", {id:1234567, title: 'Just a title'});
          }
        }/>
       <Button title="Increase counter" onPress={() => {
          setCounter(counter+1);
          setGreen(green+1);
       }} />
       
       <Button title="Decrease counter" onPress={() => {
          setCounter(counter-1);
          setGreen(green-1);
       }} />
       <Text>Counter: {counter}</Text>

    </View>
  );
}