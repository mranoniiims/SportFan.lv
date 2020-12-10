import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

export default class Page4 extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>Šodien Čerepovecā pret "Severstaļ"</Text>
        <Image source={{ uri: "https://www.dinamoriga.lv/uploads/news/5326/riga-ska_fsd-4297.jpg" }} style={{ width: 100, height: 100 }} />
<Text >Kārtējo spēli Kontinentālās hokeja līgas (KHL) čempionātā šodien viesos aizvadīs Rīgas "Dinamo" komanda, kas Čerepovecā spēkiem mērosies ar vietējo "Severstaļ". Mačs sākums 18.00. 

Abām komandām šī būs otrā savstarpējā spēlē sešu dienu laikā. Pagājušajā nedēļā Rīgā uzvaru ar 4:3 papildlaikā svinēja "Severstaļ", tā ka rīdziniekiem būs iespēja revanšēties. 

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
        onPress={() => this.props.goToPage('Page2')}>
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
