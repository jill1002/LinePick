import React, {useState} from 'react';

import { Button , TextInput, Modal,View,Text } from 'react-native';

import styles from '../styles';

import axios from 'axios';

export default function QAAdd(props) {



  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [seller, setSeller] = useState(1);
  
  


  function addQA(){
    const QAInfo={
        replyQuestion: question,
        replyAnswer: answer,
        sellerId: 1

    }

    axios.post("http://0e2dceb73099.ngrok.io/QAadd/", QAInfo)
    .then(res => {
        console.log(res);
        console.log(res.data);
        setQuestion("");
        setAnswer(""),
        setSeller(1);
      });

    props.hide();

  }



  function cancel(){

    setQuestion("");
    setAnswer(""),
    setSeller(1);
    props.hide();

  }



  return (

    <Modal visible={props.modalVisible}>
    <View style={{marginTop:30, backgroundColor:'#f4f3eb', paddingBottom:20, paddingStart:30}}>
    <TextInput placeholder="請輸入問題" value={question} style={{marginTop:20, fontSize:20}} onChangeText={text=>setQuestion(text)}/>
    
    <TextInput placeholder="請輸入答案" value={answer} style={{marginTop:30, fontSize:20}} onChangeText={text=>setAnswer(text)}/>
    {/* <TextInput placeholder="賣家編號" value={seller} style={styles.textInput} onChangeText={text=>setSeller(text)}/> */}
    <View style={{flexDirection:"row", marginLeft: 90, marginTop:30}}>
    <Button onPress={addQA} title="新增"/>
<Text>{"   "}</Text>
    <Button onPress={cancel} title="取消"/>
    </View>
    </View>
    </Modal>

  );

}