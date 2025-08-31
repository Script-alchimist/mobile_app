import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActiveTicketsTracker, DeliveryTracker, PressingTracker } from '../../components/track_component';

// Données fictives pour les exemples

const TrackingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('tickets');

  const renderContent = () => {
    switch (activeTab) {
      case 'tickets':
        return <ActiveTicketsTracker />;
      case 'delivery':
        return <DeliveryTracker />;
      case 'pressing':
        return <PressingTracker />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Suivi</Text>
      </View>
      
      {/* Menu d'onglets */}
      <View style={styles.tabMenu}>
        <TouchableOpacity
          onPress={() => setActiveTab('tickets')}
          style={[styles.tabButton, activeTab === 'tickets' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Tickets actifs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('delivery')}
          style={[styles.tabButton, activeTab === 'delivery' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Livraison</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('pressing')}
          style={[styles.tabButton, activeTab === 'pressing' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Pressing</Text>
        </TouchableOpacity>
      </View>

      {/* Contenu conditionnel */}
      <ScrollView style={styles.content}>
        {renderContent()}
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
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tabButton: {
    paddingBottom: 5,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default TrackingScreen;