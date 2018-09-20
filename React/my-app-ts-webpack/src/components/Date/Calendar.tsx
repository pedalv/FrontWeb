import * as moment from 'moment';
import 'moment-timezone';
import * as React from 'react';
import './Calendar.css';
import calendarLogo from'./calendar.png';

//https://www.npmjs.com/package/react-date-picker
import DatePicker from 'react-date-picker'
//https://ourcodeworld.com/articles/read/535/top-10-best-open-source-reactjs-datepicker-components

class Calendar extends React.Component<{}, { value: Date } > {

  constructor(props: any) {
    super(props)
    this.state = {
      value: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  public componentDidUpdate(){
    // tslint:disable-next-line:no-console
    console.log(this.state.value);
    // tslint:disable-next-line:no-console
    console.log(moment(this.state.value).locale("NO").format("DD.MM.YYYY"));
  }

  public handleChange(value:any) {
    this.setState({
      value 
    });
  }
  
  public render() {
    return (
        <div className="calendar-img-datepicker">
            <img src="./calendar.png" alt={calendarLogo} width={250} /> 
            <DatePicker className="calendar-datepicker" 
                onChange={this.handleChange} value={this.state.value}/>
        </div>      
    );
  }
  
}

export default Calendar;
