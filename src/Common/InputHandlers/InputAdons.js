import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const InputAddons = (props) => {
    const {Value,PlaceHolder,Name,Type,Error} = props;
    return (
        <InputGroup>
        <Input 
            type={Type}
            name={Name}
            required
            placeholder={PlaceHolder}
            value={Value}
            onChange={(e) => props.ChangeEvent(e)}
            onBlur={() => props.BlurEvent(Name)}
            invalid = {Error !== ''}

        />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )
};

export default InputAddons;