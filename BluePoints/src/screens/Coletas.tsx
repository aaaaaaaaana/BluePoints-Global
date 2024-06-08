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
        imagem:{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg/800px-GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg'}, 
        endereco: 'Solemar, Praia Grande - State of São Paulo',
        latitude: -24.0081, 
        longitude: -46.5499 
      },
      {
       
       
        nome: 'Guarujá',
        imagem:{uri: 'https://magazine.zarpo.com.br/wp-content/uploads/2017/02/Praias-no-Guaruja_praia-da-enseada.jpg'}, 
        endereco: 'Jardim Guaiuba, Guarujá - State of São Paulo',
        latitude: -24.0206, 
        longitude: -46.4274 
      },
      {
        
        
        nome: 'Santos',
        imagem:{uri: 'https://www.costacruzeiros.com/content/dam/costa/costa-magazine/article-images/santos-beaches/spiagge-santos-praia-guaiuba.jpg.image.1296.974.high.jpg'}, 
        endereco: 'Av. Ana Costa, 443 - Gonzaga, Santos - SP, 11060-003',
        latitude: -23.9639, 
        longitude: -46.3322 
      },
      {


        nome: 'Itanhaém',
        imagem:{uri: 'https://www.baalbek.com.br/wp-content/uploads/2020/11/11.jpg'}, 
        endereco: 'Av. Eng. José de Barro Saraíva - Nova Itanhaém - Praia, Itanhaém - SP, 11740-000',
        latitude: -24.2076, 
        longitude: -47.0592 
      },
      {
       
       
        nome: 'Ubatuba',
        imagem:{uri: 'https://www.voltologo.net/wp-content/uploads/2017/03/roteiro-pelas-praias-de-ubatuba-sp.jpg.webp'}, 
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
        imagem: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ8C4Nkhi9Ax9Nx15Ztp2-xMcX08zAa3SgA&s'}, 
        endereco: 'Av. Atlântica - Copacabana, Rio de Janeiro - RJ.',
        latitude: -22.9715, 
        longitude: -43.1724 
      },
      {
       
       
        nome: 'Ipanema',
        imagem:{uri: 'https://media-manager.noticiasaominuto.com.br/1920/naom_65f987076c86f.jpeg'}, 
        endereco: 'R. Saint Roman, 112-138 - Copacabana, Rio de Janeiro - RJ.',
        latitude: -22.9813, 
        longitude: -43.1951
      },
      {
        
        
        nome: 'Leblon',
        imagem:{uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/78/70/da/20151104-141516-largejpg.jpg?w=1200&h=1200&s=1'}, 
        endereco: 'Av. Delfim Moreira, 710 - Leblon, Rio de Janeiro - RJ.',
        latitude: -22.9915, 
        longitude: -43.2061
      },
      {
       
       
        nome: 'Barra da Tijuca',
        imagem:{uri: 'https://nabarradatijuca.com.br/wp-content/uploads/2022/11/313268773_190504056801771_7917375232128557278_n-e1668854837548.jpg'}, 
        endereco: 'Av. Rosalina Coelho Lisboa, 128-312 - Barra da Tijuca, Rio de Janeiro - RJ.',
        latitude: -23.0038, 
        longitude: -43.3359
      },
      {
        
        
        nome: 'Praia do Recreio',
        imagem:{uri: 'https://cdn-clkff.nitrocdn.com/eCUsSRygPySlWmyNNHnSuXAhykqBSMth/assets/static/optimized/rev-87041cc/wp-content/uploads/2018/02/recreio_dos_bandeirantes.png'}, 
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
        imagem:{uri: 'https://www.vivepipa.com//data/imagenes/2019/01/08/1861/lg_1546982868-lg_1546892233-DSC_9160.JPG'}, 
        endereco: 'Av. João Paulo Pinto, Tibau do Sul - RN.',
        latitude: -7.1076, 
        longitude: -34.8880 
      },
      {
       
       
        nome: 'Praia de Pipa',
        imagem:{uri: 'https://imgmd.net/images/v1/guia/1926143/praia-da-pipa.jpg'}, 
        endereco: 'PRAIA DA PIPA - Rua da praia, Largo São Sebastião, SN - Centro, Tibau do Sul - RN.',
        latitude: -6.3296, 
        longitude: -35.0904 
      },
      {
       
       
        nome: 'Praia de Jericoacoara',
        imagem:{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Anderps_067.JPG'}, 
        endereco: 'Rua Principal, 21 - 348, Jijoca de Jericoacoara - CE.',
        latitude: -2.8803, 
        longitude: -40.2207 
      },
      {
        
        
        nome: 'Praia de Carneiros',
        imagem:{uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/09/praia-carneiros-2.jpeg'}, 
        endereco: 'R. da Pe, 72 - Tamandaré, PE.',
        latitude: -8.1248, 
        longitude: -35.0056 
      },
      {
        
        
        nome: 'Praia do Morro Branco',
        imagem:{uri: 'https://i.pinimg.com/736x/40/02/56/40025648688516c07df6678903b77915.jpg'}, 
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
