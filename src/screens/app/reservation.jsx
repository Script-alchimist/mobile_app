import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import DateTimePicker from '@react-native-community/datetimepicker';

const TicketReservationScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [busType, setBusType] = useState('Standard');
  const [ticketType, setTicketType] = useState('Simple');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission refusée', 'La permission d\'accéder à la localisation est nécessaire pour cette fonctionnalité.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode && geocode.length > 0) {
        setOrigin(geocode[0].city);
      }
    })();
  }, []);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleContinue = () => {
    // Les données à transmettre
    const bookingData = {
      origin: origin,
      destination: destination,
      busType: busType,
      ticketType: ticketType,
    };
    
    // Navigation vers l'écran 'PaymentAndValidation' en passant les données en tant que paramètres
    navigation.navigate('Payment', bookingData);
  };

  const formattedDate = date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = time.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/Rahimo.png')}
            style={styles.logo}
          />
         </View>
      
      {/* Contenu principal */}
      <View style={styles.content}>
        {/* Champ d'origine (détection de localisation) */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Départ</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location-outline" size={20} color="gray" />
            <Text style={styles.input}>{origin}</Text>
          </View>
        </View>

        {/* Champ de destination (sélection) */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Destination</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Sélectionner la destination"
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        {/* Bouton pour échanger origine et destination */}
        <TouchableOpacity style={styles.switchButton} onPress={() => {
          setDestination(origin);
          setOrigin(destination);
        }}>
          <Ionicons name="swap-vertical" size={24} color="#555" />
        </TouchableOpacity>

        {/* Champs de date et heure */}
        <View style={styles.rowGroup}>
          <View style={styles.inputGroupDate}>
            <Text style={styles.label}>Date de départ</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputWrapper}>
              <Ionicons name="calendar-outline" size={20} color="gray" />
              <Text style={styles.input}>{formattedDate}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>
          <View style={styles.inputGroupDate}>
            <Text style={styles.label}>Heure de départ</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.inputWrapper}>
              <Ionicons name="time-outline" size={20} color="gray" />
              <Text style={styles.input}>{formattedTime}</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
          </View>
        </View>

        {/* Sélecteurs de type de bus et de ticket */}
        <View style={styles.selectionGroup}>
          <Text style={styles.label}>Type Bus:</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => setBusType('Standard')} style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {busType === 'Standard' && <View style={styles.radioFill} />}
              </View>
              <Text style={styles.optionText}>Standard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBusType('VIP')} style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {busType === 'VIP' && <View style={styles.radioFill} />}
              </View>
              <Text style={styles.optionText}>VIP</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectionGroup}>
          <Text style={styles.label}>Type tickets:</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => setTicketType('Simple')} style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {ticketType === 'Simple' && <View style={styles.radioFill} />}
              </View>
              <Text style={styles.optionText}>Simple</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTicketType('Aller-Retour')} style={styles.radioOption}>
              <View style={styles.radioCircle}>
                {ticketType === 'Aller-Retour' && <View style={styles.radioFill} />}
              </View>
              <Text style={styles.optionText}>Aller-Retour</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section d'information et bouton Continuer */}
        <View style={styles.footerInfo}>
          <Text style={styles.footerText}>
            Veuillez vérifier que toutes vos informations sont correctes ensuite confirmer pour passer au paiement pour valider la réservation
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>continuer</Text>
          </TouchableOpacity>
        </View>
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
  inputGroup: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  switchButton: {
    position: 'absolute',
    right: 30,
    top: 80,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroupDate: {
    width: '48%',
  },
  selectionGroup: {
    marginTop: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioFill: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  optionText: {
    marginLeft: 5,
  },
  footerInfo: {
    marginTop: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TicketReservationScreen;