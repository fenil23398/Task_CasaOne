import React, { Component } from 'react';
import InputValidator from "../../Common/InputHandlers";
import { customValidations } from "../Data/GeneralMethods";
import { Form } from 'reactstrap';

export default class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address:
            {
                firstName: '',
                lastName: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
                country: '',
                date : ''
            },
            touched : {
                firstName: false,
                lastName: false,
                addressLine1: false,
                addressLine2: false,
                city: false,
                state: false,
                zipCode: false,
                country: false,
                date: false
            }
        }
    }
    validateValues = (value) => {
        if (value === undefined || value === null || value == '')
            return '';
        else
            return value
    }
    validateDate = (value) => {
        if (value === undefined || value === null || value == '')
            return 'Select Date';
        else
            return value
    }

    handleBlur = (field) => {
        console.log("handleBlur field", field, "event ");
        //Need to copy old Touched state first and dn update field
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        })
    }

    
    validate = (addressObj) => {
        console.log("Inside Validate ",this.state.touched);
        const errors = {
            firstName: '',
            lastName: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            date : ''
        }
        const touched = { ...this.state.touched }
        if (touched.firstName)
            errors.firstName = customValidations(addressObj.firstName,1,3,10,0,1);
        if (touched.lastName)
            errors.lastName = customValidations(addressObj.lastName,1,3,10,0,1);
        if(touched.state)
            errors.state = customValidations(addressObj.state,1,1,0,0,1);
        if(touched.city)
            errors.city = customValidations(addressObj.city,1,2,0,0,1);
        if(touched.zipCode)
            errors.zipCode = customValidations(addressObj.zipCode,1,2,0,1);
        if(touched.country)
            errors.country = customValidations(addressObj.country,1,2,0,0,1);
        if(touched.addressLine1)
            errors.addressLine1 = customValidations(addressObj.addressLine1,1,4,0,0,0);
        if(touched.addressLine2)
            errors.addressLine2 = customValidations(addressObj.addressLine2,1,4,0,0,0);
        
        return errors;
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        //console.log("Inside HandleInputChnage name ",name,"Value ",value);
        this.setState({
            address : {
                ...this.state.address,
                [name] : value
            }
        })
    }
    componentDidMount() {
        const addressDetails = { ...this.props.addressDetails };
        console.log("Address Details Compo ", addressDetails);
        addressDetails.firstName = this.validateValues(addressDetails.firstName);
        addressDetails.lastname = this.validateValues(addressDetails.lastName);
        addressDetails.addressLine1 = this.validateValues(addressDetails.addressLine1);
        addressDetails.addressLine2 = this.validateValues(addressDetails.addressLine2);
        addressDetails.city = this.validateValues(addressDetails.city);
        addressDetails.state = this.validateValues(addressDetails.state);
        addressDetails.zipCode = this.validateValues(addressDetails.zipCode);
        addressDetails.country = this.validateValues(addressDetails.country);
        addressDetails.date = this.validateDate(addressDetails.date);
        console.log("First name ",addressDetails.firstName)
        this.setState({
            address : addressDetails
        })
    }
    render() {
        const errors = this.validate(this.state.address)
        const address = {...this.state.address}
        console.log("Errors Object ",errors)
        console.log("Touched Object Inside ",this.state.touched)
        return (
           <Form>
               {/* FirstName */}
                 <InputValidator 
                    Type = {"text"}
                    Name = {"firstName"}
                    PlaceHolder = {"Enter FirstName"}
                    Value = {address.firstName}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.firstName}
                 />

                  {/* LasttName */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"lastName"}
                    PlaceHolder = {"Enter LastName"}
                    Value = {address.lastName}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.lastName}
                 />

                 {/* AddressLine1 */}
                 <InputValidator 
                    Type = {"text"}
                    Name = {"addressLine1"}
                    PlaceHolder = {"Enter AddressLine1"}
                    Value = {address.addressLine1}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.addressLine1}
                 />

                  {/* AddressLine2 */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"addressLine2"}
                    PlaceHolder = {"Enter AddressLine2"}
                    Value = {address.addressLine2}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.addressLine2}
                 />

                  {/* City */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"city"}
                    PlaceHolder = {"Enter city"}
                    Value = {address.city}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.city}
                 />

                  {/* state */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"state"}
                    PlaceHolder = {"Enter state"}
                    Value = {address.state}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.state}
                 />

                  {/* ZipCode */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"zipCode"}
                    PlaceHolder = {"Enter ZipCode"}
                    Value = {address.zipCode}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.zipCode}
                 />

                  {/* Country */}
                  <InputValidator 
                    Type = {"text"}
                    Name = {"country"}
                    PlaceHolder = {"Enter Country"}
                    Value = {address.country}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.country}
                 />
           </Form>
        )
    }
}
