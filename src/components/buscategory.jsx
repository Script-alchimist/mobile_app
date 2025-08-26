import { BuStandar, BusVip } from '../utils/utils';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const BusCategories = () => {
const handleBusPress = (busId) => {
alert(`Vous avez cliqué sur le bus avec l'ID : ${busId}`);
// Logique
};

const renderBusItem = ({ item }) => (
<TouchableOpacity onPress={() => handleBusPress(item.id)} style={styles.imageContainer}>
<Image source={item.image} style={styles.busImage} />
</TouchableOpacity>
);

return (
<View style={styles.container}>
{/* Catégorie des bus standards */}
<Text style={styles.categoryTitle}>Catégories des bus standards</Text>
<FlatList
data={BuStandar}
renderItem={renderBusItem}
keyExtractor={(item) => item.id}
horizontal={true}
showsHorizontalScrollIndicator={false}
style={styles.list}
/>

  {/* Catégorie des bus ultra modernes VIP */}
  <Text style={styles.categoryTitle}>Catégories des bus ultra modernes VIP</Text>
  <FlatList
    data={BusVip}
    renderItem={renderBusItem}
    keyExtractor={(item) => item.id}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    style={styles.list}
  />
</View>

);
};

const styles = StyleSheet.create({
container: {
paddingVertical: 15,
},
categoryTitle: {
fontSize: 14,
fontWeight: 'bold',
marginLeft: 15,
marginBottom: 10,
},
list: {
marginBottom: 15,
paddingLeft: 10,
},
imageContainer: {
marginRight: 10,
borderRadius: 10,
overflow: 'hidden', 
},
busImage: {
width: 80,
height: 70,
borderRadius: 10,
resizeMode: 'cover', 
},
});

export default BusCategories;