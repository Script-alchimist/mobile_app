import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import CustomInput from '../../components/custom_input';
import AuthButton from '../../components/auth_button'; 

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.inscriptionText}>Inscription</Text>
      </View>
      <View style={styles.bottomSection}>
        <CustomInput placeholder="Nom" />
        <CustomInput placeholder="Prénom" />
        <CustomInput placeholder="Entrez votre numéro de téléphone" />
        <CustomInput placeholder="Entrez un mot de passe" secureTextEntry={true} />
        <CustomInput placeholder="Confirmer le mot de passe" secureTextEntry={true} />
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} value={false} />
          <Text style={styles.label}>J'ai lu et j'accepte les conditions générales</Text>
        </View>
        <AuthButton title="S'inscrire" onPress={() => {}} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Vous avez déjà un compte ? Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // Jaune
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  inscriptionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 2.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default RegisterScreen;