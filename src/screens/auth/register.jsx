import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomInput from '../../components/custom_input';
import AuthButton from '../../components/auth_button'; 

const RegisterScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
      </View>
      <View style={styles.bottomSection}>
        <CustomInput placeholder="Nom" />
        <CustomInput placeholder="Prénom" />
        <CustomInput placeholder="Entrez votre numéro de téléphone" />
        <CustomInput placeholder="Entrez un mot de passe" secureTextEntry={true} />
        <CustomInput placeholder="Confirmer le mot de passe" secureTextEntry={true} />
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="red"
            text="Accepter les termes et conditions"
            textStyle={{
              color: 'white'
            }}
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked) => {
              setIsChecked(isChecked);
              console.log(isChecked ? 'Coché' : 'Décoché');
            }}
          />
        </View>
        <AuthButton title="S'inscrire" onPress={() => {navigation.navigate('Tabnavigate')}} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Vous avez déjà un compte ? <Text style={{color:'yellow'}}>Connexion</Text></Text>
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
    flex: 5,
    backgroundColor: '#5D5D5C',
    borderTopRightRadius: 70,
    paddingTop: 30,
    paddingBottom: 20,
    gap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    margin: 8,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});

export default RegisterScreen;