import { StatusBar, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

  container1: {
    backgroundColor: '#FFFCEC',
    flex: 1,
    flexDirection: 'row',
    
  },
  block:{
    backgroundColor: '#FFFFFF',
  },
  homecontainer: {
    backgroundColor: '#FFFCEC',
    flex: 10,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0, //若無值則||or 0(置頂)
  },
  baseText1: {
    color: '#AE8F00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  drawerText:{
    flex:1,
    color: '#AE8F00',
    fontSize: 18,
    justifyContent: "center",
  },
  innerText: {
    color: 'gray',
    fontSize: 15,
  },
  borderStyle: {
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin:10,
  },
  tipStyle:{
    borderStyle:'solid',
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderBottomWidth:0,
    margin:10,
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#AE8F00',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whitebutton:{
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#AE8F00',
    borderWidth: 2,
    margin:10,
  },
  buttonText1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonTextAE: {
    color: '#AE8F00',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addbutton:{ 
    color: '#AE8F00',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#AE8F00',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addbuttonText:{
    color: '#AE8F00',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
  
  },
  ProductUpload:{
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 8,
  },
  uploadarea1: {
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 8,
  },
  frame:{
    backgroundColor:'#FFFFFF',
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginHorizontal: 8,

  },
  icon: {
    color:'#2C384A',
    fontSize: 28,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputStyle: {
    width: 150,
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  underLine:{
    textDecorationLine: 'underline',
    color:'#AE8F00',
  }
})
export default styles;