import React from 'react';

//Dependency
import { 
        FormGroup, 
        Input, 
        FormFeedback
    }from 'reactstrap';

const InputValidator = (props) => {
    console.log("Props Values r ",props);
    const {Value,PlaceHolder,Name,Type,Error} = props;
    return (
        <div className="App">
            {console.log("Value ",PlaceHolder )}
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

               />
               <FormFeedback invalid>
                  {Error}
                </FormFeedback>  
           </FormGroup>
        </div>
    );
}
      
export default InputValidator;

