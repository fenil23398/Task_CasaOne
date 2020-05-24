import React from 'react';

//Dependency
import DatePicker from "react-datepicker";
 
//CSS
import "react-datepicker/dist/react-datepicker.css";


function DatePickerComponent(props) {
  return (
    <DatePicker
      selected = {props.DateSelected !== '' && props.DateSelected}
      onChange = {(e) => props.DateChange(e)}
      placeholderText = "Select Date"
    />
  );
}

export default DatePickerComponent;
