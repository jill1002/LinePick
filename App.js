import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProductLaunch from './src/ProductLaunch';
import AddProduct from './src/AddPrudoct';
import MyActivity from './src/MyActivity';
import ActivitySet from './src/ActivitySet';
import { Header, Left, Right, Body, Thumbnail, Container, Content, Subtitle, Item } from 'native-base';
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerPage from './src/DrawerPage';
import { createStackNavigator } from '@react-navigation/stack';

function MyHeader() {
  // <SafeAreaProvider style={{flex: 1, justifyContent: 'space-between', marginTop:20}}>
  // <View style={{flex:1}}>

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
}
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
      <Stack.Navigator initialRouteName="上方導覽列" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="上方導覽列" component={MyHeader} />
        <Stack.Screen name="整面導覽列" component={DrawerPage} />
        <Stack.Screen name="上架商品" component={ProductLaunch} />
        <Stack.Screen name="新增商品" component={AddProduct} />
        <Stack.Screen name="新增活動" component={ActivitySet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//Jill branch push test