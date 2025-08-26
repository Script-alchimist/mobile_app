import { Image, FlatList, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CompanyMaps } from '../utils/utils';


const CompanyImages = () => {
  /* const handlePress = (companyName) => {
    //alert(`Vous avez cliqué sur ${companyName}`);
  }; */
  const navigation = useNavigation();

  const renderCompanyItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CompanyDetail')}
      style={styles.image_container}
    >
      <Image
        source={item.image} 
        style={styles.image}
      />
      <Text style={styles.companyNameText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={CompanyMaps}
        renderItem={renderCompanyItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical:10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image_container: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50, 
    borderColor:'red'
  },
  companyNameText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
})

export default CompanyImages ;