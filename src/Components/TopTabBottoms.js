import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Seg from '../Views/ScreenWeek/TelaSeg';
import Ter from '../Views/ScreenWeek/TelaTer';
import Qua from '../Views/ScreenWeek/TelaQua';
import Qui from '../Views/ScreenWeek/TelaQui';
import Sex from '../Views/ScreenWeek/TelaSex';
import Sab from '../Views/ScreenWeek/TelaSab';
import Dom from '../Views/ScreenWeek/TelaDom';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="SEG">
      <Tab.Screen name="SEG" component={Seg} />
      <Tab.Screen name="TER" component={Ter} />
      <Tab.Screen name="QUA" component={Qua} />
      <Tab.Screen name="QUI" component={Qui} />
      <Tab.Screen name="SEX" component={Sex} />
      <Tab.Screen name="SAB" component={Sab} />
      <Tab.Screen name="DOM" component={Dom} />
    </Tab.Navigator>
  );
}