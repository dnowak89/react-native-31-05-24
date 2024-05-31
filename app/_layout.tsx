import { Stack } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';


export default function RootLayout() {
  const router = useRouter();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Stack
        screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
        <Stack.Screen name="index" options={{ title: 'Strona główna' }} />
        <Stack.Screen name="second-view" options={{ 
          title: 'Drugi widok', 
          headerRight: () => (
            <View>
              <TouchableOpacity onPress={() => setMenuIsVisible(!menuIsVisible)}>
                <View>
                  <View style={styles.hamburger}></View>
                  <View style={styles.hamburger}></View>
                  <View style={styles.hamburger}></View>
                </View>
              </TouchableOpacity>
              {
                menuIsVisible && <View style={styles.menu}>
                <View><Text onPress={() => router.push('/third-view')}>KAMERA</Text></View>
              </View>
              }
            </View>
          ), }}  />
          <Stack.Screen name="third-view" options={{ title: 'Widok kamera' }} />
      </Stack>

    </>
  );
}

const styles = StyleSheet.create({
  hamburger: {
    width: 20,
    height: 2,
    backgroundColor: '#000000',
    marginBottom: 6,
  },
  menu: {
    position: 'absolute',
    top: 10,
    right: 0,
    marginTop: 10,
    width: 100,
    backgroundColor: '#CCCCCC',
    color: '#FFFFFF',
    height: 200
  }
});
