const numberRegExp = /^\d+$/;
const stringRegEx = /^[a-zA-Z]+$/;
const stringSpaceRegEx = /^[a-zA-Z ]*$/;
const convertString = (property) => {
    return property+"";
}

//To Check Null
export const isNull = (property) => {
   property = convertString(property);
   if(property.length === 0 )
      return true;
   return false;
}

//To validate Min Length
export const minLength = (property,min) => {
    property = convertString(property);
    if(property.length < min)
        return true;
    return false;
}

//To validate Max Length
export const maxLength = (property,max) => {
    property = convertString(property);
    if(property.length > max)
        return true;
    return false;
}

//To Validate Numbers
export const validateNumbers = (property) => {
    if(!numberRegExp.test(property))
        return true;
    return false;
}

//To Validate String
export const validateString = (property) => {
    if(stringRegEx.test(property))
        return false;
    return true;
}

export const validateStringWithSpace = (property) => {
    if(stringSpaceRegEx.test(property))
        return false;
    return true;
}
//Arg 1 Property Name to check For
//Arg2 Required Or not
//Arg3 Min Length Required if not dn pass 0
//Arg4 Max Length Required if not dn pass 0
//Arg5 1 if want to check only Numbers else 0
//Arg6 1 if want to checkonly string else 0
//Arg7 If want to check String and space only 
export const  customValidations = (property,nullCheck,minLen,maxLen,isNumber,isString,
    isStringWithSpace) => {
    console.log("inside Custome Validations ",property)
    if(nullCheck && isNull(property))
        return "Field is required"
    else if(minLen && minLength(property,minLen))
        return "Length must be Greater than " + minLen;
    else if(maxLen && maxLength(property,maxLen))
        return "Length must be Less than " + maxLen;
    else if(isNumber && validateNumbers(property))
        return "Only Numbers are Valid";
    else if(isString && validateString(property))
        return "Only Characters Allowed"
    else if(isStringWithSpace && validateStringWithSpace(property))
        return "Illegal Values"
    else 
        return "";
}