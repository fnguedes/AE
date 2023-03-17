import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import TI from '../Views/TelaInicial'
import TC from '../Views/TelaCaderno'
import TM from '../Views/TelaMaterias';
import TT from '../Views/TelaTarefa';
import IH from '../../assets/IconeHome.svg'
import IHA from '../../assets/IconeHomeAtivo.svg'
import IM from '../../assets/IconeMateria.svg'
import IMA from '../../assets/IconeMateriaAtivo.svg'
import IC from '../../assets/IconeCaderno.svg'
import ICA from '../../assets/IconeCadernoAtivo.svg'
import IT from '../../assets/IconeTarefas.svg'
import ITA from '../../assets/IconeTarefasAtivo.svg'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Aulas' 
      screenOptions={{drawerStyle:{backgroundColor:"#181818"}, 
                      drawerActiveTintColor:"#0BF0FF",
                      drawerInactiveTintColor:"#fff",
                      drawerActiveBackgroundColor:"#181818"
                      
                      }}>
      <Drawer.Screen name="Aulas" component={TI} 
                     options={{drawerIcon:({focused})=>(
                      focused ? <IHA width={20} height={20} style={{marginRight:-23}} /> :
                                <IH width={20} height={20} style={{marginRight:-23}}/>
                     )

                    }}/>
      <Drawer.Screen name="Cadernos" component={TC} 
                     options={{drawerIcon:({focused})=>(
                      focused ? <ICA width={20} height={20} style={{marginRight:-23}} /> :
                                <IC width={20} height={20} style={{marginRight:-23}}/>
                     )

                    }}/>
      <Drawer.Screen name="Matérias" component={TM} 
                     options={{drawerIcon:({focused})=>(
                      focused ? <IMA width={20} height={20} style={{marginRight:-23}} /> :
                                <IM width={20} height={20} style={{marginRight:-23}}/>
                     )

                    }}/>
      <Drawer.Screen name="Tarefas" component={TT} 
                     options={{drawerIcon:({focused})=>(
                      focused ? <ITA width={20} height={20} style={{marginRight:-23}} /> :
                                <IT width={20} height={20} style={{marginRight:-23}}/>
                     )

                    }}/>
    </Drawer.Navigator>
  );
}