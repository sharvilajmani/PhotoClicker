import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from "@expo/vector-icons";

export default function CameraScreen({navigation}) {
    const [hasCameraPermission,setCameraPermission] = useState(); 
    const [type,setType] = useState(Camera.Constants.Type.back);
    const [flashLight,setFlashLight] = useState(Camera.Constants.FlashMode.off);
    const [cameraRef, setCameraRef] = useState(null)

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setCameraPermission(status === 'granted');
      })();
    }, []);

    var flipCamera = () => {
      setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
    }

    var flashLightOnOff = () => {
      setFlashLight(flashLight === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);
    }

    var takePicture = async () => {
      if (cameraRef) {
        let photo = await cameraRef.takePictureAsync();
        navigation.navigate("Home",photo)
      }
    };
    
    if (hasCameraPermission === null) {
      return (
        <View>
          <Text>Testing</Text>
        </View>
      );
    } else if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>
        </View>
      );
    } 
    return (
        <View style={styles.container}>
          <Camera
            style={styles.cameraView}
            type={type}
            flashMode={flashLight}
            ref={ref => {
              setCameraRef(ref);
            }}
          >
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => flipCamera()}
                style={styles.iconHolder}
              >
                <FontAwesome name="camera" size={35} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => takePicture()}
                style={styles.iconHolder}
              >
                <FontAwesome name="circle" size={35} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => flashLightOnOff()}
                style={styles.iconHolder}
              >
                <FontAwesome name="flash" size={35} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cameraView: {
      flex: 1
    },
    actionContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "transparent"
    },
    iconHolder: {
      flex: 1,
      alignItems: "center",
      alignSelf: "flex-end"
    },
    icon: {
      marginBottom: 10,
      color: "#fff"
    }
  });
  
