import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, MapType } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, Image, Animated, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native'; 




const { width, height } = Dimensions.get('window');


const pontosDeColeta = [
  
 
 
  {
    id: 1,
    titulo: 'Praia Grande',
    latitude: -24.0081,
    longitude: -46.5499,
    localidade: 'São Paulo',
   
   
    foto: {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg/800px-GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg'}, 
   
   
    descricao: 'Praia movimentada com opções de lazer e restaurantes.'
  },
  {
  
  
    id: 2,
    titulo: 'Guarujá',
    latitude: -24.0206,
    longitude: -46.4274,
    localidade: 'São Paulo',
   
   
    foto: {uri: 'https://magazine.zarpo.com.br/wp-content/uploads/2017/02/Praias-no-Guaruja_praia-da-enseada.jpg'},
  
    descricao: 'Praia com paisagens exuberantes e opções de esportes aquáticos.'
  },
  {
  
  
    id: 3,
    titulo: 'Santos',
    latitude: -23.9639,
    longitude: -46.3322,
    localidade: 'São Paulo',
   
   
    foto: {uri: 'https://www.costacruzeiros.com/content/dam/costa/costa-magazine/article-images/santos-beaches/spiagge-santos-praia-guaiuba.jpg.image.1296.974.high.jpg'},
  
  
    descricao: 'Cidade histórica com praia e porto, ideal para quem gosta de cultura.'
  },
  {
   
   
    id: 4,
    titulo: 'Itanhaém',
    latitude: -24.2076,
    longitude: -47.0592,
    localidade: 'São Paulo',
   
    foto: {uri: 'https://www.baalbek.com.br/wp-content/uploads/2020/11/11.jpg'},
    
    
    descricao: 'Praia tranquila com dunas e natureza preservada.'
  },
  {
   
   
    id: 5,
    titulo: 'Ubatuba',
    latitude: -23.5075,
    longitude: -45.1771,
    localidade: 'São Paulo',
  
    foto: {uri: 'https://www.voltologo.net/wp-content/uploads/2017/03/roteiro-pelas-praias-de-ubatuba-sp.jpg.webp'},
  
  
    descricao: 'Destino com diversas praias, cachoeiras e natureza exuberante.'
  },
 


  {
    id: 6,
    titulo: 'Copacabana',
    latitude: -22.9715,
    longitude: -43.1724,
    localidade: 'Rio de Janeiro',
    
    foto: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ8C4Nkhi9Ax9Nx15Ztp2-xMcX08zAa3SgA&s'},
    
    
    descricao: 'Famosa praia com areia clara e vista para o Pão de Açúcar.'
  },
  {
    
    
    
    id: 7,
    titulo: 'Ipanema',
    latitude: -22.9813,
    longitude: -43.1951,
    localidade: 'Rio de Janeiro',
   
    foto: {uri: 'https://media-manager.noticiasaominuto.com.br/1920/naom_65f987076c86f.jpeg'},
   
   
    descricao: 'Praia elegante com atmosfera vibrante e opções de restaurantes.'
  },
  {
   
   
   
    id: 8,
    titulo: 'Leblon',
    latitude: -22.9915,
    longitude: -43.2061,
    localidade: 'Rio de Janeiro',
   
    foto: {uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/78/70/da/20151104-141516-largejpg.jpg?w=1200&h=1200&s=1'},
  
  
    descricao: 'Praia com atmosfera sofisticada e vista para o Morro Dois Irmãos.'
  },
  {
    
    
    id: 9,
    titulo: 'Barra da Tijuca',
    latitude: -23.0038,
    longitude: -43.3359,
    localidade: 'Rio de Janeiro',
   
    foto: {uri: 'https://nabarradatijuca.com.br/wp-content/uploads/2022/11/313268773_190504056801771_7917375232128557278_n-e1668854837548.jpg'},
   
   
    descricao: 'Praia extensa com ondas fortes, ideal para surfar.'
  },
  {
    
    
    
    id: 10,
    titulo: 'Praia do Recreio',
    latitude: -23.0440,
    longitude: -43.4561,
    localidade: 'Rio de Janeiro',
    
    foto: {uri: 'https://cdn-clkff.nitrocdn.com/eCUsSRygPySlWmyNNHnSuXAhykqBSMth/assets/static/optimized/rev-87041cc/wp-content/uploads/2018/02/recreio_dos_bandeirantes.png'},
   
   
    descricao: 'Praia tranquila com natureza preservada e ideal para caminhadas.'
  },
  
  {
   
   
    id: 11,
    titulo: 'Baía dos Golfinhos',
    latitude: -7.1076,
    longitude: -34.8880,
    localidade: 'Nordeste',
    
    
  foto: {uri: 'https://www.vivepipa.com//data/imagenes/2019/01/08/1861/lg_1546982868-lg_1546892233-DSC_9160.JPG'},
    
    
    descricao: 'Praia com águas cristalinas e beleza natural exuberante.'
  },
  {
   
   
    id: 12,
    titulo: 'Praia de Pipa',
    latitude: -6.3296,
    longitude: -35.0904,
    localidade: 'Nordeste',
    
    foto: {uri: 'https://imgmd.net/images/v1/guia/1926143/praia-da-pipa.jpg'},
    
    
    descricao: 'Praia com falésias e piscinas naturais, ideal para mergulho.'
  },
  {
    
    
    id: 13,
    titulo: ' Praia de Jericoacoara',
    latitude: -2.8803,
    longitude: -40.2207,
    localidade: 'Nordeste',
    
    foto: {uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Anderps_067.JPG'},
   
   
    descricao: 'Praia paradisíaca com dunas, lagoas e pôr do sol espetacular.'
  },
  {
    
    
    id: 14,
    titulo: 'Praia de Carneiros',
    latitude: -8.1248,
    longitude: -35.0056,
    localidade: 'Nordeste',
    
    foto: {uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/09/praia-carneiros-2.jpeg'},
    
    
    descricao: 'Praia com piscinas naturais e coqueiros, ideal para relaxar.'
  },
  {
    
    
    id: 15,
    titulo: 'Praia do Morro Branco',
    latitude: -7.3236,
    longitude: -34.9119,
    
    localidade: 'Nordeste',
   
    foto: {uri: 'https://i.pinimg.com/736x/40/02/56/40025648688516c07df6678903b77915.jpg'},
   
   
    descricao: 'Praia com falésias brancas e piscinas naturais, ideal para caminhadas.'
  },
  // 


];


const localidades = [
  {
    nome: 'São Paulo',
    pontos: [
      {
        
        
        id: 1,
        titulo: 'Praia Grande',
        latitude: -24.0081,
        longitude: -46.5499,
        localidade: 'São Paulo',
   
    foto: {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg/800px-GUILHERMINA_-_DEZ_2010_-_panoramio_%282%29.jpg'}, 
    
        
        
        descricao: 'Praia movimentada com opções de lazer e restaurantes.'
      },
      {
        
        
        id: 2,
        titulo: 'Guarujá',
        latitude: -24.0206,
        longitude: -46.4274,
        localidade: 'São Paulo',
    
    foto: {uri: 'https://magazine.zarpo.com.br/wp-content/uploads/2017/02/Praias-no-Guaruja_praia-da-enseada.jpg'},
    
        
        
        descricao: 'Praia com paisagens exuberantes e opções de esportes aquáticos.'
      },
      {
        
        
        
        id: 3,
        titulo: 'Santos',
        latitude: -23.9639,
        longitude: -46.3322,
        localidade: 'São Paulo',
       
        foto: {uri: 'https://www.costacruzeiros.com/content/dam/costa/costa-magazine/article-images/santos-beaches/spiagge-santos-praia-guaiuba.jpg.image.1296.974.high.jpg'},
        
        
        descricao: 'Cidade histórica com praia e porto, ideal para quem gosta de cultura.'
      },
      {
       
       
       
        id: 4,
        titulo: 'Itanhaém',
        latitude: -24.2076,
        longitude: -47.0592,
        localidade: 'São Paulo',
        
        foto: {uri: 'https://www.baalbek.com.br/wp-content/uploads/2020/11/11.jpg'},
       
       
        descricao: 'Praia tranquila com dunas e natureza preservada.'
      },
      {
        
        
        
        id: 5,
        titulo: 'Ubatuba',
        latitude: -23.5075,
        longitude: -45.1771,
        localidade: 'São Paulo',
       
        foto: {uri: 'https://www.voltologo.net/wp-content/uploads/2017/03/roteiro-pelas-praias-de-ubatuba-sp.jpg.webp'},
        
        
        descricao: 'Destino com diversas praias, cachoeiras e natureza exuberante.'
      },
    ]
  },
  {
   
   
    nome: 'Rio de Janeiro',
    pontos: [
      {
        
        
        
        
        id: 6,
        titulo: 'Copacabana',
        latitude: -22.9715,
        longitude: -43.1724,
        localidade: 'Rio de Janeiro',
        
        foto: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ8C4Nkhi9Ax9Nx15Ztp2-xMcX08zAa3SgA&s'},
        
        descricao: 'Famosa praia com areia clara e vista para o Pão de Açúcar.'
      },
      {
       
       
        id: 7,
        titulo: 'Ipanema',
        latitude: -22.9813,
        longitude: -43.1951,
        localidade: 'Rio de Janeiro',
        
        foto: {uri: 'https://media-manager.noticiasaominuto.com.br/1920/naom_65f987076c86f.jpeg'},
        
        
        descricao: 'Praia elegante com atmosfera vibrante e opções de restaurantes.'
      },
      {
       
       
       
        id: 8,
        titulo: 'Leblon',
        latitude: -22.9915,
        longitude: -43.2061,
        localidade: 'Rio de Janeiro',
        
        
        foto: {uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/78/70/da/20151104-141516-largejpg.jpg?w=1200&h=1200&s=1'},
       
       
        descricao: 'Praia com atmosfera sofisticada e vista para o Morro Dois Irmãos.'
      },
      {
        
        
        
        id: 9,
        titulo: 'Barra da Tijuca',
        latitude: -23.0038,
        longitude: -43.3359,
        localidade: 'Rio de Janeiro',
        
        foto: {uri: 'https://nabarradatijuca.com.br/wp-content/uploads/2022/11/313268773_190504056801771_7917375232128557278_n-e1668854837548.jpg'},
        
        
        descricao: 'Praia extensa com ondas fortes, ideal para surfar.'
      },
      {
       
       
       
        id: 10,
        titulo: 'Praia do Recreio',
        latitude: -23.0440,
        longitude: -43.4561,
        localidade: 'Rio de Janeiro',
    
    
    foto: {uri: 'https://cdn-clkff.nitrocdn.com/eCUsSRygPySlWmyNNHnSuXAhykqBSMth/assets/static/optimized/rev-87041cc/wp-content/uploads/2018/02/recreio_dos_bandeirantes.png'},
       
       
        descricao: 'Praia tranquila com natureza preservada e ideal para caminhadas.'
      },
    ]
  },
  {
   
   
   
   
    nome: 'Nordeste',
    pontos: [
      {
        
        id: 11,
        titulo: 'Baía dos Golfinhos',
        latitude: -7.1076,
        longitude: -34.8880,
        localidade: 'Nordeste',
       
        foto: {uri: 'https://www.vivepipa.com//data/imagenes/2019/01/08/1861/lg_1546982868-lg_1546892233-DSC_9160.JPG'},
       
       
       
        descricao: 'Praia com águas cristalinas e beleza natural exuberante.'
      },
      {
       
       
        id: 12,
        titulo: 'Praia de Pipa',
        latitude: -6.3296,
        longitude: -35.0904,
        localidade: 'Nordeste',
        
        foto: {uri: 'https://imgmd.net/images/v1/guia/1926143/praia-da-pipa.jpg'},
       
       
        descricao: 'Praia com falésias e piscinas naturais, ideal para mergulho.'
      },
      {
        
        
        
        id: 13,
        titulo: 'Praia de Jericoacoara',
        latitude: -2.8803,
        longitude: -40.2207,
        localidade: 'Nordeste',
        
        foto: {uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Anderps_067.JPG'},
        
        
        descricao: 'Praia paradisíaca com dunas, lagoas e pôr do sol espetacular.'
      },
      {
        
        
        id: 14,
        titulo: 'Praia de Carneiros',
        latitude: -8.1248,
        longitude: -35.0056,
        localidade: 'Nordeste',
       
        foto: {uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/09/praia-carneiros-2.jpeg'},
       
       
        descricao: 'Praia com piscinas naturais e coqueiros, ideal para relaxar.'
      },
      {
        
        
        id: 15,
        titulo: 'Praia do Morro Branco',
        latitude: -7.3236,
        longitude: -34.9119,
        localidade: 'Nordeste',
        
        foto: {uri: 'https://i.pinimg.com/736x/40/02/56/40025648688516c07df6678903b77915.jpg'},
       
       
        descricao: 'Praia com falésias brancas e piscinas naturais, ideal para caminhadas.'
      },
    ]
  },

];


export default function Mapa() {
 
  const navigation = useNavigation(); 
 
  const [regiao, setRegiao] = useState({
    latitude: -24.0081, 
    longitude: -46.5499, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

 
  const [selectedMarcador, setSelectedMarcador] = useState(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [currentLocalidade, setCurrentLocalidade] = useState(null);
  const [selectedPonto, setSelectedPonto] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 
  const cardY = useRef(new Animated.Value(height)).current;

 
  const handleRegiaoChange = (novaRegiao) => {
    setRegiao(novaRegiao);
  };

  
  const handleMarcadorPress = (marcador) => {
    setSelectedMarcador(marcador);
    setSelectedPonto(marcador); 
  };

  
  const toggleCard = () => {
    
   if (cardVisible) {

    Animated.timing(cardY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCardVisible(false)); 

  } else { 
    Animated.timing(cardY, {
      toValue: height - 250,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCardVisible(true)); 
  }

};

  
  
  const renderCards = () => {
    
    return localidades.map((localidade, index) => (
      
      <TouchableOpacity
        key={index}
        style={[
          style.rotaCard,
          {
            backgroundColor:
              currentLocalidade === localidade.nome ? '#ccc' : '#ddd',
          },
        ]}
        
        onPress={() => {
         
          setCurrentLocalidade(localidade.nome);
          
          setRegiao({
            ...regiao,
            latitude: localidade.pontos[0].latitude,
            longitude: localidade.pontos[0].longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });
        }}>
        
        <Text style={style.cardTitulo}>{localidade.nome}</Text>
      </TouchableOpacity>
    ));
  };

  
  const renderDetalhes = () => {
    if (!selectedPonto) {
      return null;
    }

    
    return (
      <TouchableWithoutFeedback onPress={() => setCardVisible(false)}>
        <View style={style.marcadorDetalhes}>
        

          <View style={style.headerDetalhes}>
          

            <Text style={style.marcadorTitulo}>{selectedPonto.titulo}</Text>
            

            <TouchableOpacity onPress={toggleCard}>
              
              <Icon
                name={cardVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={30}
                color="#fff"
              />
            
            
            </TouchableOpacity>
          
          </View>
          
          <Image source={selectedPonto.foto} style={style.fotoMarcador} />
          
          <Text style={style.marcadorInfo}>
          
            Endereço: {selectedPonto.endereco}
          
          </Text>
          
          <Text style={style.marcadorInfo}>
          
            Descrição: {selectedPonto.descricao}
        
          </Text>
          
          <TouchableOpacity
            style={style.botaoDetalhes}
            onPress={() => {
              

              navigation.navigate('Pontos de Coletas', {
                pontoSelecionado: selectedPonto,
              });
            }}>
            
            <Text style={style.textoBotao}>Ver Coletas</Text>
          
          </TouchableOpacity>
        
        </View>

      </TouchableWithoutFeedback>

    );
  };





  const handleSearch = () => {
    
    
    const filteredPontos = pontosDeColeta.filter((ponto) =>
      ponto.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );

   
    if (filteredPontos.length > 0) {
      
      setRegiao({
        ...regiao,
        latitude: filteredPontos[0].latitude,
        longitude: filteredPontos[0].longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

 
  return (
    
    <View style={style.container}>
      
      <View style={style.header}>
        
        <View style={style.inputContainer}>
          
          <TextInput
            style={style.input}
            placeholder="Pesquisa de coleta"
           
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          
          
          <TouchableOpacity onPress={handleSearch} style={style.pesquisarIcon}>
            
            <Image
              source={{
                uri: 'https://img.icons8.com/forma-regular/96/000000/search.png',
              }}
              style={{ width: 20, height: 20 }}
            />
          
          </TouchableOpacity>
       
        </View>
      
      </View>

      
      <MapView
        style={style.mapa}   
        provider={PROVIDER_GOOGLE}
        initialRegion={regiao}
        onRegionChangeComplete={handleRegiaoChange}
        customMapStyle={style.darkMapStyle}
      >
        {pontosDeColeta.map((marcador) => ( 
         
          <Marker
            key={marcador.id}
            coordinate={{
            
              latitude: marcador.latitude,
              longitude: marcador.longitude,
            }}
            
            titulo={marcador.titulo}
            onPress={() => handleMarcadorPress(marcador)}>
            
            <Image
              source={{uri: 'https://img.icons8.com/keek/100/star.png' }} 
              style={style.marcadorIcon}
            />
          
          </Marker>
        ))}
      
      </MapView>

      <Animated.View
        style={[style.fundo, { transform: [{ translateY: cardY }] }]}>
       
       
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style.scrollRotas}>
          {renderCards()}
        
        
        </ScrollView>
      
      
      </Animated.View>

      
      
      {renderDetalhes()}
    </View>
  );
}



const style = StyleSheet.create({
 
 
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  
  
  mapa: {
    width: '100%',
    height: '100%',
    position: 'absolute', 
    top: 0,
    left: 0,
    zIndex: -1, 
  },
  
  
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1, 
  },
  
  
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  
  
  
  input: {
    flex: 1,
    height: 45,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 16,
    marginRight: 10,
    color: '#70757A',
  },
  
  
  pesquisarIcon: {
    position: 'absolute',
    right: 35,
    top: '50%',
    width: 20,
    height: 20,
  },
  
  
  fundo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#111',
    padding: 10,
    height: 250,
    zIndex: 1, 
  },
  
  
  scrollRotas: {
    flex: 1,
    padding: 10,
  },
  
  
  rotaCard: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    margin: 5,
  },
  
  
  cardTitulo: {
    fontWeight: 'bold',
    fontFamily: 'WhyteRegular',
    fontSize: 14,
    marginBottom: 5,
    color: '#E9E9E9',
  },
  
  
  marcadorDetalhes: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    zIndex: 1, 
  },
  
  
  headerDetalhes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
 
  marcadorTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'WhyteRegular',
    marginBottom: 10,
    color: '#fff',
  },
  
  
  fotoMarcador: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  
  
  marcadorInfo: {
    color: '#fff',
  },
  
  
  marcadorIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

 
 
  botaoDetalhes: {
    backgroundColor: '#10343C',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  
  
  
  textoBotao: {
    color: '#E9E9E9',
    textAlign: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
    
    
    darkMapStyle: [
    {
      
      
      elementType: 'geometry',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      
      
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      
      
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          
          visibility: 'off',
        },
      ],
    },
    {
      
      featureType: 'administrative.locality',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      featureType: 'poi',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      
      featureType: 'poi',
      
      elementType: 'labels.text.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      featureType: 'road',
      
      elementType: 'geometry',
      
      stylers: [
        {
          color: '#333333',
        },
      ],
    },
    {
     
     
      featureType: 'road',
      
      elementType: 'geometry.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      featureType: 'road',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      featureType: 'road.highway',
      
      elementType: 'geometry',
      
      stylers: [
        {
          color: '#333333',
        },
      ],
    },
    {
     
      featureType: 'road.highway',
      
      elementType: 'geometry.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      featureType: 'road.highway',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#f2f2f2',
        },
      ],
    },
    {
      
      featureType: 'road.highway.controlled_access',
      
      elementType: 'geometry',
     
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      
      
      featureType: 'road.highway.controlled_access',
      
      elementType: 'geometry.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      featureType: 'road.local',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#999999',
        },
      ],
    },
    {
      
      
      featureType: 'transit.line',
      
      elementType: 'geometry',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
    
    featureType: 'transit.line',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      
      
      featureType: 'transit.line',
      
      
      elementType: 'labels.text.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      featureType: 'water',
      
      elementType: 'geometry',
      
      stylers: [
        {
          color: '#1a1a1a',
        },
      ],
    },
    {
      
      
      featureType: 'water',
      
      elementType: 'geometry.fill',
      
      stylers: [
        {
          color: '#1a1a1a',
        },
      ],
    },
    {
      
      
      featureType: 'water',
      
      elementType: 'geometry.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      
      
      
      featureType: 'water',
      
      elementType: 'labels.text.fill',
      
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      
      
      featureType: 'water',
      
      elementType: 'labels.text.stroke',
      
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
  ],
});
