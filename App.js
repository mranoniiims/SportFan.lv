import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Vidzemes_Augstskola_logo.png" }} style={{ width: 100, height: 100  }} />
    
      <Text style={{color: '#888', fontSize: 18}}> 
        Hello World from Group 10
      </Text>
       <Text style={{color: '#888', fontSize: 18}}> 
Member Kristaps Ciguzis!       
      </Text>
      <Text style={{color: '#888', fontSize: 17}}> 
              
 This is my Kristaps Ciguzis first React Native application!

      </Text>
      <Image source={{ uri: "https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Boy_child_school_boy_student-512.png" }} style={{ width: 100, height: 100 }} />
      <View>Kristaps Ciguzis</View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
