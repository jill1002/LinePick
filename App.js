import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SellerSet from './src/SellerSet';
import AddProduct2 from './src/AddProduct2';
import ServiceSet from './src/ServiceSet';
import CheckOrders from './src/CheckOrders';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn'
//import Test from './src/Test';

  // <NavigationContainer>
  //   <Drawer.Navigator initialRouteName="賣場設定2">
  const navigation = useNavigation();

  return (
    <View>
      <Container>
        <Header style={{ backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' }}>
          <Left style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('整面導覽列')}>
              <Icon name='ios-menu' color='#000' size={30} style={{ paddingLeft: 15, width: 50 }} />
            </TouchableOpacity>
          </Left>
          <Body >
            <Text style={{ fontSize: 22 }}>覽得看</Text>
          </Body>
          <Right />
        </Header>
        <Content>
        </Content>
      </Container>
    </View>

  );

/*
    <Container>

  

      <Header style={{ backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' }}>
        <Left style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('整面導覽列')}>
            <Icon name='ios-menu' color='#000' size={30} style={{ paddingLeft: 15, width: 50 }} />
          </TouchableOpacity>
        </Left>
        <Body >
          <Text style={{ fontSize: 22 }}>覽得看</Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text style={{ fontSize: 22 }}>覽得看</Text>
      </Content>
        </Container>
*/


function App() {
  //const Drawer = createDrawerNavigator();
  //const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  /*
  {!isLoading ?
    <FlatList
      data={events}
      renderItem={renderItem}
      keyExtractor={(item, index) => "" + index}
    >
    </FlatList>
    :
    <View style={{flex:1}}>
      <ActivityIndicator color="red" size="large" animating={isLoading} />
    </View>
  }
  */


  // <Drawer.Screen
  //   name="test"
  //   component={DrawerPage}
  //   options={{
  //     headerShown: "test"
  //   }}
  // />

  // <Drawer.Screen
  //   name="上架商品"
  //   component={ProductLaunch}
  //   options={{
  //     headerShown: "上架商品"
  //   }}
  // />

  // <Drawer.Screen
  //   name="新增商品"
  //   component={AddProduct}
  //   options={{ headerShown: "新增商品" }}
  // />

  // <Drawer.Screen
  //   name="我的活動"
  //   component={MyActivity}
  //   options={{ headerShown: "我的活動" }}
  // />

  // <Drawer.Screen
  //   name="活動設定"
  //   component={ASet}
  //   options={{ headerShown: "活動設定" }}
  // />
  //    </Drawer.Navigator>

  //  </NavigationContainer> 

  // </View>
  // </SafeAreaProvider> 




  const Stack = createStackNavigator();
  return (
    <NavigationContainer>


      <Drawer.Navigator initialRouteName="登入">
        <>
          {/* <View style={{ flexDirection: 'column', padding: 3 }}>
              <Text style={{ color: "gray", fontSize: 20, fontWeight: '500', alignContent: 'flex-end' }}></Text>
            </View>
            <Text style={{ padding: 8, fontSize: 15 }}>我的賣場</Text>
  <Drawer.Screen*/}
          <Drawer.Screen
            name="賣場設定"
            component={SellerSet}
            options={{ headerShown: "設定賣場" }}
          />
          <Drawer.Screen
            name="新增商品"
            component={AddProduct2}
            options={{ headerShown: "新增商品" }}
          />
          <Drawer.Screen
            name="設定常見問題"
            component={ServiceSet}
            options={{ headerShown: "設定常見問題" }}
          />
          <Drawer.Screen
              name="查看訂單狀況"
              component={CheckOrders}
              options={{ headerShown: "查看訂單狀況" }}
            />
            <Drawer.Screen
              name="註冊"
              component={SignUp}
              options={{ headerShown: "註冊" }}
            />
            <Drawer.Screen
              name="登入"
              component={SignIn}
              options={{ headerShown: "登入" }}
            />
          {/*  <Drawer.Screen
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

export default App;
//Jill branch push test