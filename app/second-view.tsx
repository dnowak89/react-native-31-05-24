import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams  } from 'expo-router';


export default function SecondView() {
    const params = useLocalSearchParams();
    const { login, password } = params;
      
  return (
    <View style={styles.container}>
      <Text>Ekran 2</Text>
      <View>
        <Text>Login {login}</Text>
      </View>
      <View>
        <Text>Hasło {password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});