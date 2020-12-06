import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

import styles from '../styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: "Jonh Doe 1"
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     description: "Jonh Doe 2"
    
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: "Jonh Doe 3"
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    description: "Jonh Doe 5"
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    description: "Jonh Doe 6"
  },
 
];

const ListItem = ({description}) => (
  <View style={{backgroundColor: "#fff",  margin: 20}}>
    <Text style={{size: 30}}>{description}</Text>
  </View>
);


export default function DetailsScreen({route, navigation}) {

  const renderItem = ({ item }) => (
    <ListItem  description={item.description} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}