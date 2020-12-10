import * as React from 'react';
import { Text, View, Button, StyleSheet, Image,Pressable } from 'react-native';

export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>Jaunākās ziņas</Text>
        
        <Pressable
        title="Page 4" 
        color="#800000"
        onPress={() => this.props.goToPage('Page4')}>
           <Text style={styles.baseText}>Šodien Čerepovecā pret "Severstaļ</Text>
        </Pressable>
         <Pressable
        title="Page 4" 
        color="#800000"
        onPress={() => this.props.goToPage('Page4')}>
           <Text style={styles.baseText}>Šodien Čerepovecā pret "Severstaļ</Text>
        </Pressable>
         <Pressable
        title="Page 4" 
        color="#800000"
        onPress={() => this.props.goToPage('Page4')}>
           <Text style={styles.baseText}>Šodien Čerepovecā pret "Severstaļ</Text>
        </Pressable>
         <Pressable
        title="Page 4" 
        color="#800000"
        onPress={() => this.props.goToPage('Page4')}>
           <Text style={styles.baseText}>Šodien Čerepovecā pret "Severstaļ</Text>
        </Pressable>
         <Pressable
        title="Page 4" 
        color="#800000"
        onPress={() => this.props.goToPage('Page4')}>
           <Text style={styles.baseText}>Šodien Čerepovecā pret "Severstaļ</Text>
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
