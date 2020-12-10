import * as React from 'react';
import { Text, View, Button, StyleSheet, Image,Pressable } from 'react-native';

export default class Page3 extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>Gaidāmās spēles</Text>
        
        <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page6')}>
           <Text style={styles.baseText}>Valmieras HK VS Hanza Rīga</Text>
           
        </Pressable>
         <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page5')}>
         <Text style={styles.baseText}>DINAMO RĪGA
VS
Traktor Čeļabinska</Text>
        </Pressable>
         <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page6')}>
           <Text style={styles.baseText}>DINAMO RĪGA VS
HK Soči</Text>
        </Pressable>
         <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page5')}>
           <Text style={styles.baseText}>Dinamo Minska VS
DINAMO RĪGA</Text>
        </Pressable>
         <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page5')}>
           <Text style={styles.baseText}>Torpedo Ņižņijnovgoroda VS
DINAMO RĪGA</Text>
        </Pressable>
          <Pressable
        title="Page 5" 
        color="#800000"
        onPress={() => this.props.goToPage('Page5')}>
           <Text style={styles.baseText}>DINAMO RĪGA VS
HK Soči</Text>
        </Pressable>

           <Button 
         title="Atgriezties"
         color="#800000"
         
        onPress={() => this.props.goToPage('Home')}>
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
