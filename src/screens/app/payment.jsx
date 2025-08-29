import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Geocoder from 'react-native-geocoding';

// clé API pour un service de géocodage (par exemple, Google Maps Geocoding API)
// Geocoder.init("YOUR_API_KEY"); 

const PaymentAndValidationScreen = ({ route, navigation }) => {
  // Récupération des paramètres de l'écran précédent
  const { origin, destination, busType, ticketType } = route.params;

  const [distance, setDistance] = useState(null);

  // Fonction pour calculer la distance entre deux points GPS
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Rayon de la Terre en mètres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c / 1000; // Distance en kilomètres
  };

  useEffect(() => {
    const getCoordinatesAndCalculateDistance = async () => {
      try {
        const originResponse = await Geocoder.from(origin);
        const destinationResponse = await Geocoder.from(destination);

        const originCoords = originResponse.results[0].geometry.location;
        const destinationCoords = destinationResponse.results[0].geometry.location;

        const calculatedDistance = calculateDistance(
          originCoords.lat,
          originCoords.lng,
          destinationCoords.lat,
          destinationCoords.lng
        );

        setDistance(calculatedDistance.toFixed(2));
      } catch (error) {
        console.error("Erreur lors du géocodage ou du calcul de distance:", error);
        Alert.alert("Erreur", "Impossible de calculer la distance. Veuillez vérifier les noms des villes.");
      }
    };

    if (origin && destination) {
      getCoordinatesAndCalculateDistance();
    }
  }, [origin, destination]);

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/Rahimo.png')} // Remplacez par votre logo
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.detailsContainer}>
          {/* Détails du voyage */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Aller</Text>
            <Text style={styles.detailValue}>26 jui 2025 à 09H30</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID ticket</Text>
            <Text style={styles.detailValue}>#0038695</Text>
          </View>

          {/* Passagers */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Passagers:</Text>
            <Text style={styles.detailValue}>Jean François</Text>
          </View>

          {/* Origine et destination */}
          <View style={styles.detailRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="radio-button-on" size={12} color="black" />
              <Text style={styles.locationText}>{origin}</Text>
            </View>
            <Ionicons name="arrow-forward" size={16} color="red" />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="location" size={12} color="red" />
              <Text style={styles.locationText}>{destination}</Text>
            </View>
          </View>
          
          {/* Distance (nouvelle fonctionnalité) */}
          {distance && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Distance:</Text>
              <Text style={styles.detailValue}>{distance} km</Text>
            </View>
          )}

          {/* Type de Bus */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Type Bus:</Text>
            <Text style={styles.detailValue}>{busType}</Text>
          </View>
          
          {/* Type de ticket */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Type tickets:</Text>
            <Text style={styles.detailValue}>{ticketType}</Text>
          </View>

          {/* Informations additionnelles */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Numéro d'autobus:</Text>
            <Text style={styles.detailValue}>31</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Numéro de la siége</Text>
            <Text style={styles.detailValue}>22</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>montant</Text>
            <Text style={styles.detailValue}>8000 FCFA</Text>
          </View>

          {/* Méthodes de paiement */}
          <View style={styles.paymentMethods}>
            <Text style={styles.paymentTitle}>Méthode de paiement</Text>
            <View style={styles.paymentIconsContainer}>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../../../assets/images/moove.png')} style={styles.paymentIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../../../assets/images/orange.jpg')} style={styles.paymentIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../../../assets/images/visa.jpg')} style={styles.paymentIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../../../assets/images/mastercard.jpg')} style={styles.paymentIcon} />
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        
        {/* Bouton Suivant */}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Paymanage')}>
          <Text style={styles.nextButtonText}>suivant</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  locationText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#333',
  },
  paymentMethods: {
    marginTop: 20,
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  paymentIcon: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  nextButton: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    bottom:90,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentAndValidationScreen;