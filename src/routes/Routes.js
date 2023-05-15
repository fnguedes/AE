import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TI from '../Views/TelasIniciais/TelaInicial'
import TCs from '../Views/TelasIniciais/TelaCadernos'
import TC from '../Views/TelasCamada2/TelaDoCaderno'
import TCC from '../Views/TelasDeCadastro/CadastrarCaderno'
import TMs from '../Views/TelasIniciais/TelaMaterias';
import TM from '../Views/TelasCamada2/TelaDaMateria'
import TCM from '../Views/TelasDeCadastro/CadastrarMateria'
import TT from '../Views/TelasIniciais/TelaTarefa';
import TP from '../Views/TelasIniciais/TelaPerfil'
import TCT from '../Views/TelasDeCadastro/CadastrarTarefa'
import { TabButtonCaderno, TabButtonHome, TabButtonMateria, TabButtonPerfil, TabButtonTarefa } from '../Components/TabButton'
import TelaCaderno from '../Views/TelasIniciais/TelaCadernos';

const Tab = createBottomTabNavigator();

const CadernoStack= createStackNavigator();

function Caderno(){
  return (
    <CadernoStack.Navigator initialRouteName="Tela Cadernos" screenOptions={{headerShown:false}}>
      <CadernoStack.Screen name="Tela Cadernos" component={TCs}  />
      <CadernoStack.Screen name="Tela Caderno" component={TC} />
      <CadernoStack.Screen name="Tela Cadastrar Caderno" component={TCC} />
    </CadernoStack.Navigator>
  );
}

const MateriaStack= createStackNavigator();

function Materia(){
  return (
    <MateriaStack.Navigator initialRouteName="Tela Materias" screenOptions={{headerShown:false}}>
      <MateriaStack.Screen name="Tela Materias" component={TMs} />
      <MateriaStack.Screen name="Tela Materia" component={TM} />
      <MateriaStack.Screen name="Tela Cadastrar Materia" component={TCM}  />
    </MateriaStack.Navigator>
  );
}



export default function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Aulas"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#312f2f",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Cadernos" component={Caderno}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonCaderno ativo={focused} />
          )
        }}
      />

      <Tab.Screen name="Matérias" component={Materia}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonMateria ativo={focused} />
          )
        }}
      />

      <Tab.Screen name="Aulas" component={TI}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonHome ativo={focused} />
          )
        }}
      />

      <Tab.Screen name="Tarefas" component={TT}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonTarefa ativo={focused} />
          ),
          tabBarBadge:'!'
        }}
      />

      <Tab.Screen name="Perfil" component={TP}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonPerfil ativo={focused} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

