import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
  ScrollView, Animated, Easing, Modal, Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const deliveryCompanies = ['DHL', 'FedEx', 'UPS', 'La Poste'];

const DeliveryOrderScreen = ({ navigation }) => {
  const [collectAddress, setCollectAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [recipient, setRecipient] = useState('');
  const [packageNature, setPackageNature] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Animations pour les placeholders
  const animatedValues = useRef({
  collect: new Animated.Value(0),
  delivery: new Animated.Value(0),
  recipient: new Animated.Value(0),
  package: new Animated.Value(0),
  company: new Animated.Value(0), // <-- Ajout de cette ligne
}).current;

const animatePlaceholder = (field, isFocused) => {
  Animated.timing(animatedValues[field], {
    toValue: isFocused ? 1 : 0,
    duration: 200,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  }).start();
};

const getAnimatedStyle = (field) => {
  // Ajoutez une vérification pour éviter l'erreur si la valeur n'existe pas
  if (!animatedValues[field]) {
    return {};
  }
  const translateY = animatedValues[field].interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });
  const scale = animatedValues[field].interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  return {
    transform: [{ translateY }, { scale }],
  };
};

  const renderInputField = (label, value, setValue, fieldName) => (
    <View style={styles.inputContainer}>
      <Animated.Text style={[styles.inputLabel, getAnimatedStyle(fieldName), (value || selectedCompany) && styles.inputLabelActive]}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onFocus={() => animatePlaceholder(fieldName, true)}
        onBlur={() => animatePlaceholder(fieldName, false)}
      />
    </View>
  );

  const handleSubmit = () => {
    const orderData = {
      collectAddress,
      deliveryAddress,
      recipient,
      packageNature,
      deliveryCompany: selectedCompany,
    };
    // Naviguer vers l'écran récapitulatif en passant les données
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
        {renderInputField('Adresse de collecte', collectAddress, setCollectAddress, 'collect')}
        {renderInputField('Adresse de Livraison', deliveryAddress, setDeliveryAddress, 'delivery')}
        {renderInputField('Destinataire', recipient, setRecipient, 'recipient')}
        {renderInputField('Nature du colis', packageNature, setPackageNature, 'package')}

        {/* Sélecteur de société de livraison */}
        <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
          <Animated.Text style={[styles.inputLabel, getAnimatedStyle('company'), selectedCompany && styles.inputLabelActive]}>
            Société de livraison
          </Animated.Text>
          <View style={styles.input}>
            <Text style={styles.selectedText}>{selectedCompany || 'Société de livraison'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Soumettre</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal pour le sélecteur de société */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sélectionnez une société</Text>
            {deliveryCompanies.map((company, index) => (
              <Pressable
                key={index}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedCompany(company);
                  setModalVisible(false);
                  animatePlaceholder('company', true);
                }}
              >
                <Text style={styles.modalText}>{company}</Text>
              </Pressable>
            ))}
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  inputContainer: {
    position: 'relative',
    height: 60,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  inputLabel: {
    position: 'absolute',
    left: 15,
    top: 20,
    fontSize: 16,
    color: '#999',
  },
  inputLabelActive: {
    color: '#000',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    fontSize: 16,
    color: '#000',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  modalCloseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryOrderScreen;