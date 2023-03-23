import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { useNavigation, NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, ScrollView,Button, Modal} from 'react-native';
import styles from '../styles.js'
import { IconButton, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, CardTitle, CardContent } from 'react-native-material-cards'
import { Divider, Avatar } from 'react-native-elements';

export default function QAAdd(props) {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [seller, setSeller] = useState(1);

  function addQA() {
    const QAInfo = {
      replyQuestion: question,
      replyAnswer: answer,
      sellerId: 1
    }
    axios.post("http://a8324ec7c82c.ngrok.io/QAadd/", QAInfo)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    props.update();
  }

  function cancel() {
    setQuestion("");
    setAnswer(""),
      setSeller(1);
    props.hide();
  }

  return (
    <Modal visible={props.modalVisible}>
      {/* <View style={{ marginTop: 30, backgroundColor: '#f4f3eb', paddingBottom: 20, paddingStart: 30 }}>
        <TextInput placeholder="請輸入問題" value={question} style={{ marginTop: 20, fontSize: 20 }} onChangeText={text => setQuestion(text)} />
        <TextInput placeholder="請輸入答案" value={answer} style={{ marginTop: 30, fontSize: 20 }} onChangeText={text => setAnswer(text)} />
        <View style={{ flexDirection: "row", marginLeft: 90, marginTop: 30 }}>
          <Button onPress={addQA} title="新增" />
          <Text>{"   "}</Text>
          <Button onPress={cancel} title="取消" />
        </View>
      </View> */}
      <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
        <Appbar.Header
          style={{ backgroundColor: '#f9e7d2' }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Text style={styles.baseText}>新增賴皮客服</Text>
        </Appbar.Header>
        <View>
          <Card style={{ marginLeft: 30, marginRight: 30, marginTop: 50, backgroundColor: '#f4f3eb' }}>
            <CardContent>
              <View style={{ margin: 25, flexDirection: 'column', alignItems: 'center' }}>
                <Avatar rounded icon={{ name: 'add' }} size={70} overlayContainerStyle={{ backgroundColor: '#b5c4b1' }} />
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
                      onChangeText={text => setQuestion(text)}
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
                      onChangeText={text => setAnswer(text)}
                    />
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 20, margin: 25 }}>
          <TouchableOpacity style={[styles.button, { width: 100, flexDirection: "row" }]} onPress={addQA}>
            <Icon name='ios-checkmark-circle-outline' color='#FFFFFF' size={20} />
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>新增</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { width: 100, flexDirection: "row" }]} onPress={cancel}>
            <Icon name='ios-close-circle-outline' color='#FFFFFF' size={20} />
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>取消</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
}