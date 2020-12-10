import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

export default class Page5 extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>Gaidāmās Spēles"</Text>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Dinamo_Riga_%282020%29.svg/1200px-Dinamo_Riga_%282020%29.svg.png" }} style={{ width: 70, height: 70 }} />
<Text >Dinamo Riga Traktor Chelyabinsk live score (and video online live stream*) starts on 3 Dec 2020 at 13:00 UTC time at Arena Riga stadium, Riga city, Latvia in KHL - Russia. Here on SofaScore livescore you can find all Dinamo Riga vs Traktor Chelyabinsk previous results sorted by their H2H matches. Links to Dinamo Riga vs. Traktor Chelyabinsk video highlights are collected in the Media tab for the most popular matches as soon as video appear on video hosting sites like Youtube or Dailymotion.
Divu spēļu izbraukumu Pētera Skudras vadītā vienība sāka ļoti veiksmīgi, pirmdien ar 4:3 "bullīšos" pieveicot spēcīgo Sanktpēterburgas SKA komandu. 
Tikmēr "Severstaļ" starp mačiem ar "Dinamo" ar rezultātu 2:1 pēcspēles metienu sērijā savā laukumā pārspēja Latvijas izlases galvenā trenera Boba Hārtlija vadīto Omskas "Avangard". 
Nākamās trīs spēles "Dinamo" aizvadīs savā laukumā. </Text>
        <Button 
         title="Home"
         color="#800000"
        onPress={() => this.props.goToPage('Home')}>
          <Text> Go to Home</Text>
        </Button> 
        <Button
        title="Back" 
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
    textAlign: 'center',
  },
});
