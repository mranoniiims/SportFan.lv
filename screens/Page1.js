import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.pageTitle}>Hokeja spēles</Text>
        <Image source={{ uri: "https://cdn.discordapp.com/attachments/773846854147506178/786273175804575774/sssss.PNG" }} style={{ width: 300, height: 460 }} />
         <Button
        title="Atgriezties"
        color="#800000" 
        onPress={() => this.props.goToPage('Atgriezties')}>
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
    textAlign: 'center',
  },
    baseText: {
    fontFamily: "Cochin",
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: 20,
    borderBottomColor: '#000000',
        borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
