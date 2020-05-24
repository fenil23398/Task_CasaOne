import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,FormFeedback } from 'reactstrap';

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
          <InputGroupText className="bg-primary text-white">$</InputGroupText>
        </InputGroupAddon>
        <FormFeedback invalid>
                  {Error}
                </FormFeedback>  
      </InputGroup>
    )
};

export default InputAddons;