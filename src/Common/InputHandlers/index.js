import React from 'react';

//Dependency
import { 
        FormGroup, 
        Input, 
        FormFeedback
    }from 'reactstrap';

const InputValidator = (props) => {
    const {Value,PlaceHolder,Name,Type,Error,ReadOnly} = props;
    return (
        <div className="App">
           <FormGroup>
              <Input 
                   type={Type}
                   name={Name}
                   required
                   placeholder={PlaceHolder}
                   value={Value}
                   onChange={(e) => props.ChangeEvent(e)}
                   onBlur={() => props.BlurEvent(Name)}
                   invalid = {Error !== ''}
                   readOnly = {ReadOnly}
               />
               <FormFeedback invalid>
                  {Error}
                </FormFeedback>  
           </FormGroup>
        </div>
    );
}
      
export default InputValidator;

