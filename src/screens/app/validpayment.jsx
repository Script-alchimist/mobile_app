import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import ViewShot from 'react-native-view-shot';

const PaymentValidatedScreen = ({ navigation, route }) => {

  // L'objet de données qui sera encodé dans le QR code
  const ticketData = {
    id: "6253",
    date: "12/07/2020",
    time: "12:04",
    passenger: "Ousmane",
    origin: "Ouagadougou",
    destination: "Koudougou",
  };

  const qrCodeRef = React.useRef();

  const handleDownloadQR = async () => {
    try {
      if (Platform.OS === 'android') {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission refusée', 'La permission d\'accéder à la galerie est nécessaire pour sauvegarder le QR code.');
          return;
        }
      }

      const uri = await qrCodeRef.current.capture();
      const filename = `ticket_${ticketId}.png`;
      const asset = await MediaLibrary.createAssetAsync(uri);
      
      Alert.alert('Succès', 'Le QR code a été téléchargé dans votre galerie.');
    } catch (e) {
      console.error(e);
      Alert.alert('Erreur', 'Impossible de télécharger le QR code.');
    }
  };

  // La chaîne de données JSON qui sera encodée
  const qrCodeValue = JSON.stringify(ticketData);

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Paiement validé</Text>
      </View>
      
      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Ticket généré avec succès
          Scannez pour plus de détails
        </Text>

        {/* Génération du QR Code */}
        <View style={styles.qrCodeContainer}>
          <ViewShot ref={qrCodeRef} options={{ format: 'png', quality: 0.9 }}>
            <QRCode
              value={qrCodeValue}
              size={250}
              color="black"
              backgroundColor="white"
            />
          </ViewShot>
        </View>

        {/* Bouton de téléchargement */}
        <TouchableOpacity onPress={handleDownloadQR} style={styles.downloadButton}>
          <Ionicons name="download-outline" size={24} color="#333" />
          <Text style={styles.downloadText}>Télécharger</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  qrCodeContainer: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 20,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  downloadText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default PaymentValidatedScreen;