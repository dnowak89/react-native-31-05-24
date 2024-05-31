import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  const [login, setLogin] = useState({
    login: "",
  })
  const [password, setPassword] = useState({
    password: "",
  })

  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={(loginInput) => setLogin((loginInput))}
          value={login}
          placeholder="Login"
        />
      </View>
      <View>
        <Text>Hasło</Text>
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword((password))}
            value={password}
            placeholder="Hasło"
          />
      </View>
      <View>
        <Pressable style={styles.button} onPress={() => {
            router.push({ pathname: "/second-view", params: { login, password } });
          }}>
          <Text>ZALOGUJ</Text>
        </Pressable>
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
  button: {
    backgroundColor: '#CCCCCC',
    color: '#FFFFFF',
    marginTop: 16,
    padding: 16
  },
  link: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    padding: 16,
    width: 300,
    backgroundColor: '#000000',
    color: '#FFFFFF'
  }
});