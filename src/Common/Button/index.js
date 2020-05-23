import React from 'react';
import { Button } from 'reactstrap';


function CustomButton(props) {
  return (
    <Button
        onClick = {() => props.ButtonClicked()} 
        color={props.ButtonColor}
        size={props.SizeForButton}
    >
    {props.Text}
    </Button>
  );
}

export default CustomButton;
