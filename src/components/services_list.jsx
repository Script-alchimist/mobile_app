import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Services } from '../utils/utils';


const ServiceItem = ({ title, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Ionicons name={iconName} size={24} color="black" style={styles.itemIcon} />
    <Text style={styles.itemText}>{title}</Text>
  </TouchableOpacity>
);

const ServicesList = () => {

  return (
    <View style={styles.listContainer}>
      {Services.map((item) => (
        <ServiceItem
          key={item.id}
          title={item.title}
          iconName={item.icon}
          onPress={() => navigation.navigate(item.screen)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ServicesList;