import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/livraison.jpg')} 
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Delivery services</Text>
        <Text style={styles.subtitle}>
          Livraison-Transfert-Expédition de colis de tout genre
        </Text>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.skipButtonText}>Passer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // White background for the entire screen
    justifyContent: 'center',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#FFD700', // Yellow color for the top half
    borderBottomRightRadius: 200,
    overflow: 'hidden', // Ensures the image respects the curve
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFD700', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },
  skipButton: {
    backgroundColor: 'rgba(239, 0, 0, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 40,
  },
  skipButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen2;