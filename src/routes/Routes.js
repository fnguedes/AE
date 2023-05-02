import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TI from '../Views/TelaInicial'
import TC from '../Views/TelaCaderno'
import TM from '../Views/TelaMaterias';
import TT from '../Views/TelaTarefa';
import TP from '../Views/TelaPerfil'
import { TabButtonCaderno, TabButtonHome, TabButtonMateria, TabButtonPerfil, TabButtonTarefa } from '../Components/TabButton'

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Cadernos" component={TC}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButtonCaderno ativo={focused} />
          )
        }}
      />

      <Tab.Screen name="Matérias" component={TM}
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
          )
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

/*const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (

    <Drawer.Navigator initialRouteName='Aulas'
      screenOptions={{
        drawerStyle: { backgroundColor: "#181818", width: 180,marginBottom:-20},
        drawerActiveTintColor: "#0BF0FF",
        drawerInactiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#1818ff",
        drawerHideStatusBarOnOpen: true,
        drawerLabelStyle:{fontSize:17,fontWeight:'bold',height:19},
      }}>

      <Drawer.Screen name="Aulas" component={TI}
        options={{
          drawerIcon: ({ focused }) => (
            focused ? <IHA width={25} height={25} style={{ marginRight: -23 }} /> :
              <IH width={25} height={25} style={{ marginRight: -23 }} />
          )
        }} />

      <Drawer.Screen name="Matérias" component={TM}
        options={{
          drawerIcon: ({ focused }) => (
            focused ? <IMA width={25} height={25} style={{ marginRight: -23 }} /> :
              <IM width={25} height={25} style={{ marginRight: -23 }} />
          )
        }} />

      <Drawer.Screen name="Cadernos" component={TC}
        options={{
          drawerIcon: ({ focused }) => (
            focused ? <ICA width={25} height={25} style={{ marginRight: -23 }} /> :
              <IC width={25} height={25} style={{ marginRight: -23 }} />
          ),
        }} />

      <Drawer.Screen name="Tarefas" component={TT}
        options={{
          drawerIcon: ({ focused }) => (
            focused ? <ITA width={25} height={25} style={{ marginRight: -23 }} /> :
              <IT width={25} height={25} style={{ marginRight: -23 }} />
          )
        }} />

    </Drawer.Navigator>
  );
}
*/