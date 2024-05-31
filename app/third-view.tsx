import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

export default function ThirdView() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View/>;
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Należy wyrazić zgodę na używanie kamery podczas działania aplikaji</Text>
        <Button onPress={requestPermission} title="WYRAŹ ZGODĘ" />
      </View>
    );
  }
      
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Text style={styles.text}>Odwróć kamerę</Text>
            </TouchableOpacity>
            </View>
        </CameraView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});