import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFCEC',
    flex: 1,
    flexDirection: 'column',
  },
  homecontainer: {
    backgroundColor: '#FFFCEC',
    flex: 10,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0, //若無值則||or 0(置頂)
  },
  baseText: {
    color: '#AE8F00',
    fontWeight: "bold",
    fontSize: 20,
  },
  innerText: {
    color: "gray",
    fontSize: 15,
  },
  border: {
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadarea: {
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderStyle: 'dashed',
    marginHorizontal: 150,
  },
  icon: {
    color:'#2C384A',
    fontSize: 28,
  },
  textarea:{
    //heght: DP.dp185,
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})
export default styles;