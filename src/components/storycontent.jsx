import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ticketHistory, parcelHistory, pressingHistory } from '../utils/utils';
import { useState } from 'react';

const HistoryCard = ({ number, details }) => (
  <View style={styles.historyCard}>
    <View style={styles.cardHeader}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Mon QR code ou votre icône
        style={styles.qrCode}
      />
      <View style={styles.headerText}>
        <Text style={styles.lineNumber}>Numéro de billet</Text>
        <Text style={styles.numberText}>{number}</Text>
      </View>
    </View>
    <Text style={styles.detailsText}>{details}</Text>
    <TouchableOpacity>
      <Text style={styles.viewMoreText}>Voir plus</Text>
    </TouchableOpacity>
  </View>
);

const AllHistory = () => {
    return (
        <ScrollView>
          {ticketHistory.map((item) => (
            <HistoryCard
              key={item.id}
              number={item.number}
              details={item.details}
            />
          ))}
          {parcelHistory.map((item) => (
            <HistoryCard
              key={item.id}
              number={item.number}
              details={item.details}
            />
          ))}
          {pressingHistory.map((item) => (
                <HistoryCard
                key={item.id}
                number={item.number}
                details={item.details}
                />
            ))}
        </ScrollView>
      );
}

const TicketHistory = () => {
    return (
        <ScrollView>
          {ticketHistory.map((item) => (
            <HistoryCard
              key={item.id}
              number={item.number}
              details={item.details}
            />
          ))}
        </ScrollView>
      );
}

const Livraison = () => {
    return (
        <ScrollView>
          {parcelHistory.map((item) => (
            <HistoryCard
              key={item.id}
              number={item.number}
              details={item.details}
            />
          ))}
        </ScrollView>
      );
}

const PressingHistory = () => {
        return (
            <ScrollView>
            {pressingHistory.map((item) => (
                <HistoryCard
                key={item.id}
                number={item.number}
                details={item.details}
                />
            ))}
            </ScrollView>
        );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  historyCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  qrCode: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8,
  },
  headerText: {
    flex: 1,
  },
  lineNumber: {
    fontSize: 14,
    color: '#666',
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  viewMoreText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export{ AllHistory, TicketHistory, Livraison, PressingHistory }