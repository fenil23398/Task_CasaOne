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
    if(!numberRegExp(property))
        return true;
    return false;
}