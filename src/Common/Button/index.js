import React from 'react';
import { Button } from 'reactstrap';


function CustomButton(props) {
  return (
    <Button
        onClick = {() => props.buttonClicked()} 
        color="primary"
    >primary</Button>
  );
}

export default CustomButton;
