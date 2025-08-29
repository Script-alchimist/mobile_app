import { View, StyleSheet, Image } from 'react-native';
import { useState } from "react";

import Header from '../../components/story_header'
import { AllHistory, TicketHistory, PressingHistory, Livraison } from '../../components/storycontent';

const HistoryScreen = () => {
    const [actif, setActif] = useState('all') 
    return(
        <View style={styles.container}>
            <Header actif={actif} setActif={setActif}/>
            <View style={styles.body}>
                {
                    actif === 'all' ? <AllHistory/> : 
                    actif === 'ticket' ? <TicketHistory/> :
                    actif === 'livraison' ? <Livraison/> : <PressingHistory/>
                }
            </View>
        </View>
    )
}

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

export default HistoryScreen