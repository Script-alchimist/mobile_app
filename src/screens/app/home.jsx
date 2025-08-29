import { View, StyleSheet, Image } from 'react-native';
import ServicesList from '../../components/services_list';
import Header  from '../../components/header';
import Billeterie from './billeterie';
import { useState } from "react";

const HomeScreen = () => {
  const [actif, setActif] = useState('billet') 

  return (
    <View style={styles.container}>
      <Header actif={actif} setActif={setActif}/>
      <View style={styles.body}>
        {actif === 'billet' ? <Billeterie /> : <ServicesList />}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    paddingTop:30,
    backgroundColor:'rgba(255, 193, 7, 1)'
  },
  body:{
    flex:1,
    backgroundColor:'white',
    padding:10,
  }
});