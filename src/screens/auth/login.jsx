import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/custom_input';
import AuthButton from '../../components/auth_button';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomSection}>
        <CustomInput placeholder="Email ou numéro de téléphone" />
        <CustomInput placeholder="Mot de passe" secureTextEntry={true} />
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        <AuthButton title="Se connecter" onPress={() => {}} />
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>
            Continuer avec Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Vous n'avez pas de compte ? <Text style={{color:'yellow'}}>S'inscrire</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', 
    height: '90%',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  connexionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 4,
    backgroundColor: 'rgb(93, 93, 92)',
    borderTopRightRadius: 100,
    paddingTop: 30,
    paddingBottom: 20,
    marginTop: 80,
    gap: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    marginHorizontal: 20,
    marginTop: 10,
    color: '#888',
  },
  googleButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  googleButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
  },
});

export default LoginScreen;