const numberRegExp = /^\d+$/;

const convertString = (property) => {
    return property+"";
}
export const isNull = (property) => {
   property = convertString(property);
   if(property.length === 0 )
      return true;
   return false;
}

export const minLength = (property,min) => {
    property = convertString(property);
    if(property.length < min)
        return true;
    return false;
}

export const maxLength = (property,max) => {
    property = convertString(property);
    if(property.length > max)
        return true;
    return false;
}

export const validateNumbers = (property) => {
    if(!numberRegExp.test(property))
        return true;
    return false;
}


//Arg 1 Property Name to check For
//Arg2 Required Or not
//Arg3 Min Length Required if not dn pass 0
//Arg4 Max Length Required if not dn pass 0
//Arg5 1 if want to check only Numbers else 0
export const  customValidations = (property,nullCheck,minLen,maxLen,isNumber) => {
    console.log("inside Custome Validations ",property)
    if(nullCheck && isNull(property))
        return "Field is required"
    else if(minLen && minLength(property,minLen))
        return "Length must be Greater than " + minLen;
    else if(maxLen && maxLength(property,maxLen))
        return "Length must be Less than " + maxLen;
    else if(isNumber && validateNumbers(property))
        return "Only Numbers are Valid";
    else 
        return "";
}