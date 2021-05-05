import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SellerSet from './src/SellerSet';
import AddProduct from './src/AddProduct';
import ServiceSet from './src/ServiceSet';
import ProductHome from './src/ProductHome';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn'
import { DrawerContent } from './src/DrawerContent';
import NotFinishOrder from './src/NotFinishOrder';
import TransportOrder from './src/TransportOrder';
import FinishOrder from './src/FinishOrder';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="登入" drawerStyle={{
        backgroundColor: '#f9e7d2',
        width: 240,
      }} drawerContent={props => <DrawerContent {...props} />}>
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
          name="我的商品"
          component={ProductHome}
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;