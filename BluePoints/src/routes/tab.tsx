



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from '../screens/Home';
import Mapa from '../screens/Mapa';
import Reconhecimento from '../screens/Reconhecimento';
import Perfil from '../screens/Perfil';
import Recompensa from '../screens/Recompensa';



import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'; 
import RedefinirSenha from '../screens/RedefinirSenha'; 
import EditarPerfil from '../screens/EditarPerfil'; 
import NovaSenha from '../screens/NovaSenha'; 
import Coleta from '../screens/Coletas'



const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');


export function TabRotas() {


  return (



    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: '#061D26', 
          height: height * 0.09,
          borderTopWidth: 0,
        },
        tabBarIndicatorStyle: { 
          backgroundColor: 'transparent'
        },
        tabBarLabelStyle: { display: 'none' },
        tabBarShowLabel: false,
        headerShown: false
      }}>



      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{ alignItems: 'center' }}>

              <Image
                style={{ 
                  width: 28, 
                  height: 28 
                }}
                source={{ 
                  uri: 'https://img.icons8.com/material-sharp/96/647C8C/address.png' 
                }} 

                resizeMode="contain"
              />

              {focused && (
                <View style={[style.barraTab, { width: width / 11 }]} />
              )}

            </View>
          ),
        }}
      />




      <Tab.Screen
        name="Recompensa"
        component={Recompensa}
        options={{
          tabBarLabel: 'Recompensa',
           tabBarIcon: ({ focused }) => (

            <View style={{ alignItems: 'center' }}>

              <Image
                style={{ 
                  width: 32, 
                  height: 32 
                }}

                source={{ 
                  uri: 'https://img.icons8.com/fluency-systems-filled/96/647C8C/star.png' 
                }}

                resizeMode="contain"
              />

              {focused && (
                <View style={[style.barraTab, { width: width / 11 }]} /> 
              )}
            </View>

          ),
        }}
      />




      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={[style.iconContainer, focused && style.iconFundo, { alignItems: 'center' }]}>

              <Image
                style={{
                  width: 44,
                  height: 44,
                }}

                source={{
                  uri: 'https://img.icons8.com/material/96/647C8C/whale.png',
                }}
                
                resizeMode="contain"
              />

              {focused && (
                <View style={[style.barraTab, { width: width / 9 }]} /> 
              )}

            </View>

          ),
        }}
      />


      <Tab.Screen
        name="Reconhecimento"
        component={Reconhecimento}
        options={{
          tabBarLabel: 'Reconhecimento',
          tabBarIcon: ({ focused }) => (

            <View style={{ alignItems: 'center' }}>

              <Image
                style={{ 
                  width: 30, 
                  height: 30 
                }}

                source={{ 
                  uri: 'https://img.icons8.com/fluency-systems-filled/96/647C8C/camera.png' 
                }}

                resizeMode="contain"
              />

              {focused && (
                <View style={[style.barraTab, { width: width / 11 }]} /> 
              )}
            </View>

          ),
        }}
      />


      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (

            <View style={{ alignItems: 'center' }}>

              <Image
                style={{ 
                  width: 30, 
                  height: 30 
                }}

                source={{ 
                  uri: 'https://img.icons8.com/fluency-systems-filled/96/647C8C/user.png' 
                }}

                resizeMode="contain"
              />

              {focused && (
                <View style={[style.barraTab, { width: width / 11 }]} /> 
              )}
            </View>

          ),
        }}
      />




    </Tab.Navigator>



  );


}





const style = StyleSheet.create({


  barraTab: {
    backgroundColor: '#2C4454', 
    height: 3,
    borderRadius: 20, 
    position: 'relative',
    bottom: -8,
    margin: 'auto', 
  },

  iconContainer: {
      width: 50, 
      height: 50, 
      borderRadius: 36, 
      backgroundColor: '#2C4454', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative',
    },


    iconFundo: {
      backgroundColor: '#1A3B48', 
    },


});







