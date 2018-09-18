import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Calendar.css';

import * as moment from 'moment'
import 'moment-timezone';

//https://www.npmjs.com/package/react-date-picker
import DatePicker from 'react-date-picker'

//https://ourcodeworld.com/articles/read/535/top-10-best-open-source-reactjs-datepicker-components

class Calendar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state.value);
    console.log(moment(this.state.value).locale("NO").format("DD.MM.YYYY"));
  }

  handleChange(value) {
    this.setState({
      value: value 
    });
  }

  render() {
    return (
        <div className="AppDate-datepicker">
          <DatePicker id="example-datepicker" 
            placeholder='Date' 
            value={this.state.value} 
            onChange={this.handleChange} />            
        </div>      
    );
  }
}

export default Calendar;
ReactDOM.render(<Calendar />, document.getElementById('calendar'));
