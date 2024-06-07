


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';



const regioes = [
  {
    nome: 'São Paulo',
    praias: [
      {
        nome: 'Praia Grande',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Solemar, Praia Grande - State of São Paulo',
        latitude: -24.0081, 
        longitude: -46.5499 
      },
      {
       
       
        nome: 'Guarujá',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Jardim Guaiuba, Guarujá - State of São Paulo',
        latitude: -24.0206, 
        longitude: -46.4274 
      },
      {
        
        
        nome: 'Santos',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. Ana Costa, 443 - Gonzaga, Santos - SP, 11060-003',
        latitude: -23.9639, 
        longitude: -46.3322 
      },
      {


        nome: 'Itanhaém',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. Eng. José de Barro Saraíva - Nova Itanhaém - Praia, Itanhaém - SP, 11740-000',
        latitude: -24.2076, 
        longitude: -47.0592 
      },
      {
       
       
        nome: 'Ubatuba',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Rod. Rio-Santos, Km 77 - Maranduba, Ubatuba - SP, 11680-000',
        latitude: -23.5075, 
        longitude: -45.1771 
      }
    ]
  },
  {
    
    
    nome: 'Rio de Janeiro',
    praias: [
      {
        nome: 'Copacabana',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. Atlântica - Copacabana, Rio de Janeiro - RJ.',
        latitude: -22.9715, 
        longitude: -43.1724 
      },
      {
       
       
        nome: 'Ipanema',
        imagem: require('../../assets/download.gif'), 
        endereco: 'R. Saint Roman, 112-138 - Copacabana, Rio de Janeiro - RJ.',
        latitude: -22.9813, 
        longitude: -43.1951
      },
      {
        
        
        nome: 'Leblon',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. Delfim Moreira, 710 - Leblon, Rio de Janeiro - RJ.',
        latitude: -22.9915, 
        longitude: -43.2061
      },
      {
       
       
        nome: 'Barra da Tijuca',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. Rosalina Coelho Lisboa, 128-312 - Barra da Tijuca, Rio de Janeiro - RJ.',
        latitude: -23.0038, 
        longitude: -43.3359
      },
      {
        
        
        nome: 'Praia do Recreio',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Recreio dos Bandeirantes, Rio de Janeiro - State of Rio de Janeiro',
        latitude: -23.0440, 
        longitude: -43.4561
      }
    ]
  },
  {
   
    nome: 'Nordeste',
    praias: [
      {
        nome: 'Baía dos Golfinhos',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Av. João Paulo Pinto, Tibau do Sul - RN.',
        latitude: -7.1076, 
        longitude: -34.8880 
      },
      {
       
       
        nome: 'Praia de Pipa',
        imagem: require('../../assets/download.gif'), 
        endereco: 'PRAIA DA PIPA - Rua da praia, Largo São Sebastião, SN - Centro, Tibau do Sul - RN.',
        latitude: -6.3296, 
        longitude: -35.0904 
      },
      {
       
       
        nome: 'Praia de Jericoacoara',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Rua Principal, 21 - 348, Jijoca de Jericoacoara - CE.',
        latitude: -2.8803, 
        longitude: -40.2207 
      },
      {
        
        
        nome: 'Praia de Carneiros',
        imagem: require('../../assets/download.gif'), 
        endereco: 'R. da Pe, 72 - Tamandaré, PE.',
        latitude: -8.1248, 
        longitude: -35.0056 
      },
      {
        
        
        nome: 'Praia do Morro Branco',
        imagem: require('../../assets/download.gif'), 
        endereco: 'Rua Vicente Matias, 148 - Beberibe, CE, 62840-000',
        latitude: -7.3236, 
        longitude: -34.9119 
      }
    ]
  },
  
];

const PraiaCard = ({ praia }) => {
  const navigation = useNavigation();

  const openGoogleMaps = () =>
   {
    const url = `https://www.google.com/maps/search/?api=1&query=${praia.latitude},${praia.longitude}`;
   
   Linking.openURL(url);
  };

  return (
    <TouchableOpacity 
      style={style.praiaCard} 
      onPress={openGoogleMaps} 
    
    >

      <Image source={praia.imagem} style={style.praiaImagem} />
      <View style={style.praiaInfo}>
        <Text style={style.praiaNome}>{praia.nome}</Text>
        <Text style={style.praiaEndereco}>{praia.endereco}</Text>
      </View>
    </TouchableOpacity>
  );


};

const Coletas = () => {
  const navigation = useNavigation(); 

  return (
    <ScrollView style={style.container}>
      <Header navigation={navigation}/>
     
      {regioes.map((regiao, index) => (
        <View key={index} style={style.regiaoContainer}>
          <View style={style.regiaoTituloContainer}>
            <Text style={style.regiaoTitulo}>{regiao.nome}</Text>
          
          
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {regiao.praias.map((praia, index) => (
              <PraiaCard key={index} praia={praia} />
            ))}
          
          
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#232424'
  },
  
  
  regiaoContainer: {
    marginBottom: 40,
    marginTop: 40,
  },
  
  
  regiaoTituloContainer: { 
    alignItems: 'center' 
  },
 
  
  regiaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'WhyteRegular',
    marginBottom: 40,
    color: '#E9E9E9',
    
  },
  
  praiaCard: {
    width: 200,
    height: '100%',
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#061D26',
    elevation: 5 
  },
  
  praiaImagem: {
    width: '100%',
    height: 150,
  },
  
  praiaInfo: {
    padding: 10
  },
  
  praiaNome: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    marginBottom: 10,
    color: '#E9E9E9',
  },
  
  praiaEndereco: {
    fontSize: 14,
    fontFamily: 'inherit',
    marginBottom: 10,
    color: '#E9E9E9',
  }
});

export default Coletas; 


