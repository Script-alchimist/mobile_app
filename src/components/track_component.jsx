import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { activeTickets, deliveries, pressings } from '../utils/utils';

const ActiveTicketsTracker = () => (
  <View>
    {activeTickets.map((ticket) => (
      <View key={ticket.id} style={styles.card}>
        <Ionicons name="bus-outline" size={24} color="#3498db" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Ticket actif</Text>
          <Text style={styles.cardDetail}>Destination: {ticket.destination}</Text>
          <Text style={styles.cardDetail}>Date: {ticket.date}</Text>
        </View>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#555" />
      </View>
    ))}
  </View>
);

const DeliveryTracker = () => (
  <View>
    {deliveries.map((delivery) => (
      <View key={delivery.id} style={styles.card}>
        <Ionicons name="cube-outline" size={24} color="#e67e22" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Suivi de livraison</Text>
          <Text style={styles.cardDetail}>Statut: {delivery.status}</Text>
          <Text style={styles.cardDetail}>{delivery.origin} → {delivery.destination}</Text>
        </View>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#555" />
      </View>
    ))}
  </View>
);

const PressingTracker = () => (
  <View>
    {pressings.map((pressing) => (
      <View key={pressing.id} style={styles.card}>
        <Ionicons name="shirt-outline" size={24} color="#2ecc71" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Suivi pressing</Text>
          <Text style={styles.cardDetail}>Statut: {pressing.status}</Text>
          <Text style={styles.cardDetail}>Service: {pressing.service}</Text>
        </View>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="#555" />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetail: {
    fontSize: 14,
    color: '#666',
  },
});

export { ActiveTicketsTracker, DeliveryTracker, PressingTracker, }