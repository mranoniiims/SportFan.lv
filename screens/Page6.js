import * as React from 'react';
import { Text, View, Button, StyleSheet, Image,Pressable } from 'react-native';

export default class Page6 extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>Vidzemes Olimpiskais centrs</Text>
         <Image source={{ uri: "https://cdn.discordapp.com/attachments/765554337887551521/786321624051744858/unknown.png" }} style={{ width: 200, height: 200 }} />
       <Text style={styles.baseText}>Valmieras HK VS Hanza</Text>
<Text style={styles.baseText}>Norises laiks - 12.decembris 18;00-20;00</Text>
<Text style={styles.baseText}>Norieses vieta - SIA “Vidzemes Olimpiskais centrs”,
Rīgas iela 91, LV-4201, Valmiera</Text>
            <Button
         title="Atgriezties"
         color="#800000"
        onPress={() => this.props.goToPage('Page3')}>
          <Text> Go to Home</Text>
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
    padding: 20,
    paddingTop: 20,
    borderBottomColor: '#000000',
        borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
