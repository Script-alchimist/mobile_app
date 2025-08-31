import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const pressingItems = [
  { id: '1', name: 'Chemise', price: 500, image: require('../../../assets/images/chemise.jpg') },
  { id: '2', name: 'Pull', price: 800, image: require('../../../assets/images/pull.jpg') },
  { id: '3', name: 'Manteau Homme', price: 1500, image: require('../../../assets/images/manteau.jpg') },
  { id: '4', name: 'Veste complet', price: 2500, image: require('../../../assets/images/veste.jpg') },
  { id: '5', name: 'T-Shirt', price: 400, image: require('../../../assets/images/tshirt.jpg') },
  { id: '6', name: 'Robe', price: 1200, image: require('../../../assets/images/robe.jpg') },
];

const PressingItem = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item.price} -</Text>
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrement} style={styles.quantityButton}>
          <Ionicons name="remove-outline" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.quantityButton}>
          <Ionicons name="add-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PressingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('lavage');
  const [selectedItems, setSelectedItems] = useState({});

  const handleQuantityChange = (id, newQuantity) => {
    setSelectedItems(prevItems => {
      const updatedItems = { ...prevItems, [id]: newQuantity };
      // Supprimer l'item si la quantité est 0 pour garder l'objet propre
      if (newQuantity === 0) {
        delete updatedItems[id];
      }
      return updatedItems;
    });
  };

  const handleSubmit = () => {
    // Naviguer vers un écran de récapitulatif en passant les données
    // Vous pouvez remplacer 'OrderSummaryScreen' par le nom de l'écran de votre choix
    // et passer les données sélectionnées.
    console.log("Articles sélectionnés :", selectedItems);
    alert("Commande prête à être soumise ! Vérifiez la console pour les articles sélectionnés.");

    // Exemple de navigation avec les données :
    // navigation.navigate('OrderSummaryScreen', { items: selectedItems });
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>

        {/* Onglets de navigation */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'lavage' && styles.activeTab]}
            onPress={() => setActiveTab('lavage')}
          >
            <Text style={styles.tabText}>Lavage et repassage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'repassage' && styles.activeTab]}
            onPress={() => setActiveTab('repassage')}
          >
            <Text style={styles.tabText}>Repassage</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Barre de recherche */}
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="gray" />
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher un article"
            />
          </View>
          
          {/* Liste des articles */}
          <View style={styles.itemsGrid}>
            {pressingItems.map((item) => (
              <PressingItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </View>

            {/* Bouton de soumission */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Soumettre</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    paddingTop: 30,
  },
  tabButton: {
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'red',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  priceContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  footer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom:0,
    marginBottom:30,
    width: '100%',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PressingScreen;