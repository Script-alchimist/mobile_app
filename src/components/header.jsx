import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({actif, setActif}) => {

  return (
    <View style={styles.headpattern}>
      <View style={styles.head1}>
        <View>
          <Image
            style={styles.profile}
            source={require("../../assets/images/Ousmane.jpg")}
          />
          <Text style={{ top: 5 }}>Salut Ousmane </Text>
          <Text style={{ top: 10, fontWeight: "500", fontSize: 16 }}>
            Dequoi avez vous besoin aujourd'hui ?
          </Text>
        </View>
        <TouchableOpacity>
            <Ionicons
                name="notifications-outline"
                size={27}
                color="white"
                style={styles.icon}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.searchicon}
        />
        <TextInput
          style={styles.input}
          placeholder="Rechercher..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Services */}
      <View style={styles.menus}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={
                ()=>{
                    setActif('billet')
                }
            }
        >
            <Text 
                style={actif === 'billet' ? styles.buttonText : styles.desactive}
            >
                Billeterie
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={
                ()=>{
                    setActif('service')
                }
            }
        >
            <Text   
                style={actif === 'service' ? styles.buttonText : styles.desactive}
            >
                Autres Services
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headpattern:{
      padding:20,
  },
  head1:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  profile:{
    borderRadius:200,
    width:50,
    height:50
  },
  icon:{
    top:15,
  },
  search:{
    display:'flex',
    justifyContent:'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    top:20,
    marginHorizontal: 2,
    marginBottom:30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2
  },
  input: {
    flex: 1, 
    paddingVertical: 13,
    fontSize: 16,
  },
  searchicon: {
    marginRight: 10,
  },
  menus:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    top:10
  },  
  button: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth:2,
  },
  desactive: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header