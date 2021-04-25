import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { Header, Left, Right, Body } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import SellerSet from './src/SellerSet';
import AddProduct from './src/AddProduct';
import AddProduct2 from './src/AddProduct2';
import ServiceSet from './src/ServiceSet';
import NotFinishOrder from './src/NotFinishOrder';
import CheckOrders from './src/CheckOrders';
import FinishOrder from './src/FinishOrder';
import TransportOrder from './src/TransportOrder';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn'

const Drawer = createDrawerNavigator();
function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="登入">
          <Drawer.Screen
            name="賣場設定"
            component={SellerSet}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="賴皮客服"
            component={ServiceSet}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="新增商品"
            component={AddProduct}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="訂單詳細資訊"
            component={CheckOrders}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="未出貨訂單"
            component={NotFinishOrder}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="運送中訂單"
            component={TransportOrder}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="已完成訂單"
            component={FinishOrder}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="註冊"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="登入"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;