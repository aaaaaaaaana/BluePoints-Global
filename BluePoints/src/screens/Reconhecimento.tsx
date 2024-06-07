


import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 




export default function Reconhecimento() {
  const navigation = useNavigation();

  const [imageUri, setImageUri] = useState(null); 


  const handleCameraPress = () => {
    
    navigation.navigate('Camera'); 
  };

 
  return (
    
    
    <View style={styles.container}>
     
      <Header navigation={navigation} />
     
     
      <View style={styles.content}> 
        
        <View style={styles.headerContent}>
         
         
          <Text style={styles.titulo}>Transforme a coleta de lixo em recompensas com o BluePoints!</Text>
          
          
         
          <Text style={styles.descricao}>Basta tirar uma foto do seu lixo com o nosso aplicativo inovador e a IA identifica o material com precisão. Você ganha pontos por cada item reciclado e contribui para um futuro mais verde, enquanto desfruta de recompensas motivadoras.</Text>
        
        
        </View>
        
        <View style={styles.passosContainer}>
         
         
          <Text style={styles.passos}>• Basta tirar a foto apertando a aréa de abaixo.</Text>
         
         
          <Text style={styles.passos}>• Nosso sistema analisa o tipo de lixo, quantidade e tempo que esse reisuduo demora para se decompor. </Text>
         
          <Text style={styles.passos}>• Receba seus pontos e recolha suas recompensas!!. </Text>
        
        </View>
        
        <View style={styles.uploadSecao}>
         
          <Text style={styles.uploadTitulo}>Tire a foto e insira aqui</Text>

         
          <TouchableOpacity onPress={handleCameraPress} style={styles.uploadContainer}>
            {imageUri ? (
             
             
              <Image source={{ uri: imageUri }} style={styles.imagemSelecionada} />
            ) : (
              
              <View style={styles.uploadPlaceholder}>
                
                <Image
                  source={{ uri: 'https://img.icons8.com/fluency-systems-filled/96/000000/image.png' }}
                  style={{ width: 20, height: 20 }}
                />
                
                <Text style={styles.uploadPlaceholderTxt}>Browse or drop image</Text>
              
              </View>
            )}
          
          </TouchableOpacity>
        
        </View>

      
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#232424',
  },
 
 
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: '10%'
  },
 
 
  headerContent: {
    alignItems: 'center',
  },
  
  
  titulo: {
    fontFamily: 'WhyteRegular',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginBottom: 40,
  },
 
 
  descricao: {
    fontFamily: 'inherit',
    fontSize: 12,
    color: '#E9E9E9',
    textAlign: 'justify',
    marginBottom: 20,
  },
  
  
  passosContainer: {
    marginBottom: 20,
  },
 
 
  passos: {
    fontFamily: 'inherit',
    fontSize: 12,
    color: '#E9E9E9',
    alignItems: 'center',
    textAlign: 'justify',
    marginBottom: 5,
  },
  
  
  uploadSecao: {
    padding: 16,
    backgroundColor: '#FBF9F7',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
  },
  
  
  uploadTitulo: {
    fontSize: 18,
    
    fontFamily: 'WhyteRegular',
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  
  
  
  uploadContainer: {
    borderWidth: 2,
   
    borderColor: '#D9D9D9',
    borderRadius: 8,
    padding: 16,
    
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    
    borderStyle: 'dashed',
    overflow: 'hidden',
    width: '90%'
  },
  
  
  uploadPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  
  
  uploadPlaceholderTxt: {
    color: '#D9D9D9',
    marginTop: 10,
  },
  
  
  imagemSelecionada: {
    width: '100%',
    height: '100%',
  },

});



