import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/welcome.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenue à bord ! Votre voyage commence maintenant.</Text>
      </View>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Onboarding2')} // Navigate to the next screen
      >
        <Text style={styles.skipButtonText}>Passer</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingBottom:50,
    justifyContent: 'flex-start',
  },
  overlay: {
    backgroundColor: '#FFD700',//rgba(226, 251, 0, 0.5) 
    padding: 20,
    paddingTop: 20, 
  },
  title: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'black',
    fontSize: 14,
  },
  skipButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'rgba(255, 7, 7, 0.3)', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  skipButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen1;