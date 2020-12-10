import * as React from 'react';
import { Text, View, Button, StyleSheet, Image,Pressable } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.pageTitle}>SportFAN.LV</Text>
        <Image source={{ uri: "https://media.discordapp.net/attachments/765554337887551521/768026533193056256/5b93394a-6715-417b-8848-750aad03e129_200x200.png" }} style={{ width: 200, height: 200 }} />
        <Button
        title="Kalendārs" 
        color="#800000"
        onPress={() => this.props.goToPage('Page1')}>
          <Text> Go to Page1</Text>
        </Button>
        <Button
        title="Jaunākas ziņas"
        color="#800000"
         onPress={() => this.props.goToPage('Page2')}>
          <Text> Go to Page2</Text>
        </Button>
         <Button
        title="Gaidāmās spēles"
        color="#800000" 
        onPress={() => this.props.goToPage('Page3')}>
          <Text> Go to Page3</Text>
        </Button>
      </View>

    );
  }
} 
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
    ,
  },
});
