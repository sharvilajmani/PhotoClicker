import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Home({navigation,route}) {
  let photo = route.params;
  console.log(photo);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="center"
        style={styles.imageHolder}
        source = {
            photo === undefined ? require("../assets/email.png") : photo
        }
      />
      <Button 
          title = "Take Photo"
          style = {styles.button}
          onPress = {() => navigation.navigate('CameraScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder: {
    alignSelf: "center",
    height: 500,
    margin: 20,
  },
  button: {
    margin: 20,
  }
});
