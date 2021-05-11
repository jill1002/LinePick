import React, { useState, useEffect, Component } from 'react';
import { Button , TextInput, Modal,View,Text, DeviceEventEmitter } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import { useNavigation, NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';


export default function ServiceEdit({route, props}) {
  const [replys, setReplys] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sellerid, setSellerId] = useState("");
  

const replyId = route.params.replyid;
useEffect(() => {
  async function fetchData () {
  console.log("in fetchData");
   
  const orderListCard = await axios.get('http://41d4417b19ff.ngrok.io/ReplyContent/'+replyId);
    //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
    setReplys(orderListCard.data);

  }
  fetchData();
},[]);
    
  function EditQA(){
    setQuestion(replys.replyQuestion);
    setAnswer(replys.replyAnswer);
    setSellerId(1);
    
    const QAEditInfo={
        replyId:replys.replyId,
        replyQuestion: replys.replyQuestion,
        replyAnswer: replys.replyAnswer,
        sellerId: 1
        
    }

    axios.put("http://41d4417b19ff.ngrok.io/ServiceEdit/", QAEditInfo)
        .then(res => {
            console.log(res);
            console.log(res.data);
            route.params.callback();
            navigation.goBack(); 
          });
          
        
  }



 

  const navigation = useNavigation();

  return (

    
    <View style={{marginTop:30, backgroundColor:'#f4f3eb', paddingBottom:20, paddingStart:30}}>
    
    <TextInput placeholder="請輸入問題" value={replys.replyQuestion} style={{marginTop:20, fontSize:20}} onChangeText={text=>setReplys({...replys,replyQuestion:text})}/>
    
    <TextInput placeholder="請輸入答案" value={replys.replyAnswer} style={{marginTop:30, fontSize:20}} onChangeText={text=>setReplys({...replys,replyAnswer:text})}/>
    {/* <TextInput placeholder="賣家編號" value={seller} style={styles.textInput} onChangeText={text=>setSeller(text)}/> */}
    <View style={{flexDirection:"row", marginLeft: 90, marginTop:30}}>
    <Button onPress={EditQA} title="修改"/>
<Text>{"   "}</Text>
    <Button onPress={() => navigation.goBack()} title="取消"/>
    </View>
    </View>


  );

}