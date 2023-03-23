import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { useNavigation, NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from '../styles.js'
import { IconButton, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, CardTitle, CardContent } from 'react-native-material-cards'
import { Divider, Avatar } from 'react-native-elements';

export default function ServiceEdit({ route, props }) {
  const [replys, setReplys] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sellerid, setSellerId] = useState("");

  const replyId = route.params.replyid;
  useEffect(() => {
    async function fetchData() {
      console.log("in fetchData");

      const orderListCard = await axios.get('http://a8324ec7c82c.ngrok.io/ReplyContent/' + replyId);
      //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
      setReplys(orderListCard.data);

    }
    fetchData();
  }, []);

  function EditQA() {
    setQuestion(replys.replyQuestion);
    setAnswer(replys.replyAnswer);
    setSellerId(1);
    const QAEditInfo = {
      replyId: replys.replyId,
      replyQuestion: replys.replyQuestion,
      replyAnswer: replys.replyAnswer,
      sellerId: 1

    }
    axios.put("http://a8324ec7c82c.ngrok.io/ServiceEdit/", QAEditInfo)
      .then(res => {
        console.log(res);
        console.log(res.data);
        route.params.callback();
        navigation.goBack();
      });
  }

  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
      <Appbar.Header
        style={{ backgroundColor: '#f9e7d2' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text style={styles.baseText}>修改賴皮客服</Text>
      </Appbar.Header>
      <View>
        <Card style={{ marginLeft: 30, marginRight: 30, marginTop: 50, backgroundColor: '#f4f3eb' }}>
          <CardContent>
            <View style={{ margin: 25, flexDirection: 'column', alignItems: 'center' }}>
              <Avatar rounded icon={{ name: 'edit' }} size={70} overlayContainerStyle={{ backgroundColor: '#b5c4b1' }} />
            </View>
            <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 18, marginTop: 10 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
              <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
                  <Text style={[styles.baseText, { paddingBottom: 10 }]}>Q請輸入問題:</Text>
                </View>
                <View style={[styles.textInputStyle, { marginBottom: 30 }]}>
                  <TextInput
                    placeholder="請輸入問題"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#8C7599"
                    style={{ padding: 10 }}
                    value={replys.replyQuestion}
                    onChangeText={text => setReplys({ ...replys, replyQuestion: text })}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
                  <Text style={[styles.baseText, { paddingBottom: 10 }]}>A請輸入答案:</Text>
                </View>
                <View style={styles.textInputStyleLarge}>
                  <TextInput
                    placeholder="請輸入答案"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#8C7599"
                    style={{ padding: 10 }}
                    value={replys.replyAnswer}
                    onChangeText={text => setReplys({ ...replys, replyAnswer: text })}
                  />
                </View>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 20, margin:25}}>
        <TouchableOpacity style={[styles.button, { width: 100, flexDirection: "row" }]} onPress={EditQA}>
          <Icon name='ios-checkmark-circle-outline' color='#FFFFFF' size={20} />
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>修改</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: 100, flexDirection: "row" }]} onPress={() => navigation.goBack()}>
          <Icon name='ios-close-circle-outline' color='#FFFFFF' size={20} />
          <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>取消</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}