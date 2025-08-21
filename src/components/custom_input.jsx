import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 15,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default CustomInput;