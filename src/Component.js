import React from 'react';
import DatePicker from 'react-native-datepicker';

export default class Component extends Component {
    constructor(props) {
        super(props);
    this.state = {
        date: '',
        time: '20:00',
        datetime: '2016-05-05 20:00',
        datetime1: '2016-05-05 20:00'
      };
    }

render(){
    return (
      <View style={styles.container}>
        
        <DatePicker
          style={{width: 200}}
          date='2021-05-05'
          mode="date"
          placeholder="placeholder"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="确定"
          cancelBtnText="取消"
          iconSource={require('./google_calendar.png')}
          onDateChange={(date) => {this.setState({date: date});}}
        />
        </View>
         )
    }
        };