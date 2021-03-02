import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SellerSet from './src/SellerSet';
import SignUp from './src/SignUp';
import ProductLaunch from './src/ProductLaunch';




const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      
        
        <Drawer.Navigator initialRouteName="賣場設定2">
          <>
           {/* <View style={{ flexDirection: 'column', padding: 3 }}>
              <Text style={{ color: "gray", fontSize: 20, fontWeight: '500', alignContent: 'flex-end' }}></Text>
  </View>*/}
             {/*<Text style={{ padding: 8, fontSize: 15 }}>我的賣場</Text>*/}
            <Drawer.Screen
              name="上架商品"
              component={ProductLaunch}
              options={{ headerShown: "上架商品" }}
            />
            {/*
            <Drawer.Screen
              name="新增活動"
              component={AddActivity}
              options={{ headerShown: "新增活動" }}
            />
            
            <Drawer.Screen
              name="我的活動"
              component={MyActivity}
              options={{ headerShown: "我的活動" }}
            />
            <Drawer.Screen
              name="查看訂單狀況"
              component={CheckOrders}
              options={{ headerShown: "查看訂單狀況" }}
            />
            <Drawer.Screen
              name="待出貨"
              component={TBDelivered}
              options={{ headerShown: "待出貨" }}
            />
            <Drawer.Screen
              name="運送中"
              component={Delivering}
              options={{ headerShown: "運送中" }}
            />
            <Drawer.Screen
              name="已完成"
              component={Completed}
              options={{ headerShown: "已完成" }}
            />
            <Drawer.Screen
              name="新增商品"
              component={AddProduct}
              options={{ headerShown: "新增商品" }}
            />
            <Drawer.Screen
              name="商品庫存"
              component={Inventory}
              options={{ headerShown: "商品庫存" }}
            />
            <Drawer.Screen
              name="重新上架商品"
              component={Reinstock}
              options={{ headerShown: "重新上架商品" }}
            />
            <Drawer.Screen
              name="設定常見問題"
              component={SetRegularQA}
              options={{ headerShown: "設定常見問題" }}
            />
            <Drawer.Screen
              name="關鍵字回覆"
              component={SetKeywords}
              options={{ headerShown: "設定關鍵字" }}
            />
            <Drawer.Screen
              name="歡迎訊息"
              component={SetWelcome}
              options={{ headerShown: "設定歡迎訊息" }}
            />
            */}
          </>

        </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
//Jill branch push test