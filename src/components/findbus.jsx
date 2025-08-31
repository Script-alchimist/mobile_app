import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Categories } from '../utils/utils';

const FindBusComponent = () => {
  return (
    <View style={styles.container}>
      {/* Section des icônes */}
      <View style={styles.iconContainer}>
        {Categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.iconWrapper}>
            <Ionicons name={category.icon} size={24} color="black" />
            <Text style={styles.iconText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.findBusButton}>
        <View style={styles.buttonContent}>
          <Ionicons name="bus-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Trouver un bus</Text>
          <Ionicons name="arrow-forward-circle-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 20,
    marginHorizontal: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  findBusButton: {
    backgroundColor: '#FFD700', 
    borderRadius: 30,
    marginHorizontal: 15,
    padding: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FindBusComponent;