import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DeliveryOrderScreen = ({ navigation }) => {
  // 1. Gestion de l'état pour chaque champ
  const [collectAddress, setCollectAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [recipient, setRecipient] = useState('');
  const [packageNature, setPackageNature] = useState('');
  const [deliveryCompany, setDeliveryCompany] = useState('');

  // Fonction pour naviguer et transmettre les données
  const handleSubmit = () => {
    // 3. Objet des données à transmettre
    const orderData = {
      collectAddress,
      deliveryAddress,
      recipient,
      packageNature,
      deliveryCompany,
      // Ajoutez d'autres données nécessaires, comme la date et l'heure de la commande
      orderDate: new Date().toLocaleDateString('fr-FR'),
    };
    
    // Navigation vers l'écran de récapitulatif
    // Assurez-vous que le nom de l'écran est correct dans votre Stack.Navigator
    navigation.navigate('OrderSummaryScreen', orderData);
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Commande de livraison</Text>
      </View>
      
      {/* Contenu principal */}
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Adresse de collecte"
          value={collectAddress}
          onChangeText={setCollectAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse de Livraison"
          value={deliveryAddress}
          onChangeText={setDeliveryAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Destinataire"
          value={recipient}
          onChangeText={setRecipient}
        />
        <TextInput
          style={styles.input}
          placeholder="Nature du colis"
          value={packageNature}
          onChangeText={setPackageNature}
        />
        <TextInput
          style={styles.input}
          placeholder="Société de livraison"
          value={deliveryCompany}
          onChangeText={setDeliveryCompany}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Soumettre</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DeliveryOrderScreen;