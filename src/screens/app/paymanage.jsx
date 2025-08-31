import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Assurez-vous d'avoir les logos dans vos assets
const mtnLogo = require('../../../assets/images/visa.jpg');
const moovLogo = require('../../../assets/images/moove.png');

const PaymentMethodsScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('mtn');

  const renderPaymentForm = () => {
    if (selectedMethod === 'mtn') {
      return (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Paiement MTN Money</Text>
          <TextInput style={styles.input} placeholder="Montant" />
          <TextInput style={styles.input} placeholder="Numéro" />
          <TextInput style={styles.input} placeholder="Code OTP" />
          <Text style={styles.instruction}>
            Composer *144*6*montant# sur votre téléphone et coller le code OTP pour valider la transaction.
          </Text>
        </View>
      );
    } else if (selectedMethod === 'moov') {
      return (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Paiement Moov Money</Text>
          <TextInput style={styles.input} placeholder="Montant" />
          <TextInput style={styles.input} placeholder="Numéro" />
          <Text style={styles.instruction}>
            Vérifiez la transaction en attente en consultant votre boîte de messagerie sur votre numéro Moov Money.
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../assets/images/Rahimo.png')} // Remplacez par votre logo
                style={styles.logo}
              />
            </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sélectionnez une méthode de paiement</Text>
          <View style={styles.paymentMethodsContainer}>
            <TouchableOpacity
              onPress={() => setSelectedMethod('mtn')}
              style={[styles.logoWrapper, selectedMethod === 'mtn' && styles.selectedWrapper]}
            >
              <Image source={mtnLogo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedMethod('moov')}
              style={[styles.logoWrapper, selectedMethod === 'moov' && styles.selectedWrapper]}
            >
              <Image source={moovLogo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Formulaire de paiement conditionnel */}
        <View style={styles.card}>
          {renderPaymentForm()}
        </View>
        
        {/* Bouton de confirmation */}
        <TouchableOpacity style={styles.confirmButton} onPress={()=>navigation.navigate('Paymentvalid')}>
          <Text style={styles.confirmButtonText}>Confirmer</Text>
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoWrapper: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  selectedWrapper: {
    borderColor: '#FFD700',
  },
  logo: {
    width: 80,
    height: 50,
  },
  formContainer: {
    paddingTop: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  instruction: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentMethodsScreen;