

import {createNativeStackNavigator} from '@react-navigation/native-stack'



import Home from '../screens/Home';
import Login from '../screens/Login';
import Mapa from '../screens/Mapa';
import Recompensa from '../screens/Recompensa';
import Perfil from '../screens/Perfil';
import Reconhecimento from '../screens/Reconhecimento'; 
import Cadastro from '../screens/Cadastro'; 
import RedefinirSenha from '../screens/RedefinirSenha'; 
import EditarPerfil from '../screens/EditarPerfil'; 
import NovaSenha from '../screens/NovaSenha'; 
import Coletas from '../screens/Coletas'; 
import Camera from '../screens/Camera'; 
import { TabRotas } from './tab'


const Stack = createNativeStackNavigator();


export function StackRotas(){

    return(

        <Stack.Navigator
          initialRouteName="Login"
        >

          <Stack.Screen
            name='Tab'
            component={TabRotas}
            options={{
              headerShown: false
            }}  
          />

            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                headerShown: false
              }}  
            />


            <Stack.Screen
              name="Cadastro" 
              component={Cadastro}
              options={{
                headerShown: false
              }} 
            />


            <Stack.Screen
              name="RedefinirSenha" 
              component={RedefinirSenha} 
              options={{
                headerShown: false
              }} 
            />



            <Stack.Screen
              name="EditarPerfil" 
              component={EditarPerfil} 
              options={{
                headerShown: false
              }} 
            />



            <Stack.Screen
              name="NovaSenha" 
              component={NovaSenha} 
              options={{
                headerShown: false
              }} 
            />

            <Stack.Screen
              name="Pontos de Coletas" 
              component={Coletas} 
              options={{
                headerShown: false
              }} 
            />


            <Stack.Screen
              name="Camera" 
              component={Camera} 
              options={{
                headerShown: false
              }} 
            />

            
          

        </Stack.Navigator>

    )

    
}




