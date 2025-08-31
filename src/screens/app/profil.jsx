import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profileOptions = [
  { id: '1', label: 'Mon Historique d\'activités', icon: 'time-outline' },
  { id: '2', label: 'Notifications', icon: 'notifications-outline' },
  { id: '3', label: 'Langues', icon: 'language-outline' },
  { id: '4', label: 'Mes Téléchargements', icon: 'download-outline' },
  { id: '5', label: 'Paramètres de sécurité', icon: 'shield-checkmark-outline' },
  { id: '6', label: 'Paramètres de mon compte', icon: 'settings-outline' },
  { id: '7', label: 'Déconnexion', icon: 'log-out-outline' },
];

const ProfileScreen = ({ navigation }) => {
  const handlePress = (option) => {
    alert(`Vous avez cliqué sur "${option.label}"`);
    // Ex: navigation.navigate('HistoryScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Paiement validé</Text>
      </View>

      <ScrollView style={styles.body}>
        {/* Section Profil */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../../assets/images/Ousmane.jpg')} 
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Jean François</Text>
          </View>
          <TouchableOpacity style={styles.profileArrow}>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Liste des options */}
        <View style={styles.optionsList}>
          {profileOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handlePress(option)}
              style={styles.optionCard}
            >
              <View style={styles.optionContent}>
                <Ionicons name={option.icon} size={24} color="#555" />
                <Text style={styles.optionText}>{option.label}</Text>
              </View>
              <Ionicons name="arrow-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  body: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileArrow: {
    padding: 5,
  },
  optionsList: {
    // Conteneur de la liste d'options
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 2,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default ProfileScreen;