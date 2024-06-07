import { Camera, CameraType } from 'expo-camera/legacy';
import { useState, useRef } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function CameraReconhecimento() {
  const [type, setType] = useState(CameraType.back);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  const cameraRef = useRef(null);

  
  const navigation = useNavigation();

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const cameraHeight = (screenWidth * 4) / 3;

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  
  const gerarPontos = () => {
    const pontosAleatorios = Math.floor(Math.random() * 10000) + 1; 
    return pontosAleatorios;
  };

  

  const takePicture = async () => {
    setIsTakingPhoto(true);
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo:', photo);

      
      const pontosGanhos = gerarPontos();
      Alert.alert(
        'Parabéns!',
        `Você ganhou ${pontosGanhos} pontos!`,
        [{ text: 'OK', onPress: navigation.goBack()}], 
        { cancelable: false }
      );
    }
    setIsTakingPhoto(false);
  };

  
  
  return (
    <View style={style.container}>
      <View style={[style.cameraContainer, { height: cameraHeight }]}> 
        <Camera
          ref={cameraRef}
          style={style.camera}
          type={type}
          ratio="3:4"
          cropToFill={true}
        />
      </View>

      
      
      <View style={style.controlContainer}> 
        <View style={style.controlBar}>
          <TouchableOpacity
            style={style.controlBotao}
            onPress={takePicture}
            disabled={isTakingPhoto}>
            <View style={style.controlBotaoInterno} />
          
          </TouchableOpacity>

          
          
          <TouchableOpacity
            style={style.iconBotao}
            onPress={toggleCameraType}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/100/000000/synchronize.png',
              }}
              style={style.icon}
            />
          
          
          
          </TouchableOpacity>


        </View>
      </View>
    </View>


  );
}



const style = StyleSheet.create({


  
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
 
 
  cameraContainer: { 
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 80, 
    marginBottom: 20, 
  },
  
  
  camera: {
    width: '100%', 
    height: '100%',
  },
  
  
  controlContainer: { 
    flex: 1, 
    backgroundColor: '#000', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 20,
    top: -70,
  },
 
 
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  
  controlBotao: {
    padding: 16,
    borderRadius: 50,
  },
  
  
  controlBotaoInterno: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  
  iconBotao: {
    padding: 16,
    backgroundColor: 'transparent',
    borderRadius: 50,
    left: 80
  },
  
  
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});