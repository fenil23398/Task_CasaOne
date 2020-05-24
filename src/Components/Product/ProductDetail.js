import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';

//Internal Files
import  InputAddons  from "../../Common/InputHandlers/InputAdons";
import InputValidator from "../../Common/InputHandlers";
import CustomButton from "../../Common/Button";
import { customValidations } from "../Data/GeneralMethods";


export default class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : {
                productId : props.data.productId,
                price : props.data.price,
                productName : props.data.productName,
                qty : props.data.qty,
                notes : props.data.notes,
                totalPrice : props.data.qty * props.data.price
            },
            touched : {
                productId : false,
                price : false,
                productName : false,
                qty : false,
            }
        }
    }
    onDelete = () => {
        console.log("Inside Delete");
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

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        let finalPrice;
        //console.log("Inside HandleInputChnage name ",name,"Value ",value);
        if(name === 'price' || name === 'qty'){
            if(value === '')
                finalPrice = 0;
            else if(name === 'price')
                finalPrice = value *  this.state.product.qty;
            else
                finalPrice = this.state.product.price * value;
        }
        if(isNaN(finalPrice))
            finalPrice=0;
        this.setState({
            product : {
                ...this.state.product,
                [name] : value,
                totalPrice : finalPrice
            }
        })
    }

    validate = (productObj) => {
        console.log("Inside Validate Product",this.state.touched);
        const errors = {
            productId : '',
            price : '',
            productName : '',
            qty : ''
        }
        const touched = { ...this.state.touched }
        if (touched.productId)
            errors.productId = customValidations(productObj.productId,1,1,0,0);
        if (touched.price)
            errors.price = customValidations(productObj.price,1,1,0,1);
        if(touched.productName)
            errors.productName = customValidations(productObj.productName,1,1,0,0,1);
        if(touched.qty)
            errors.qty = customValidations(productObj.qty,1,1,0,1);
        return errors;
    }

    render() {
        const errors = this.validate(this.state.product)
        const productDetail = {...this.state.product}
        return (
           
           <tr className = "row">
             <td className = "col-md-2" >
                <InputAddons
                    Type = {"text"}
                    Name = {"productId"}
                    PlaceHolder = {"Enter Product Id"}
                    Value = {productDetail.productId}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.productId}
                />
            </td>
           
            <td  className = "col-md-3" style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"productName"}
                    PlaceHolder = {"Enter Product Name"}
                    Value = {productDetail.productName}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.productName}
                 />
            </td>
            <div className="col-md-4">
                <div className="row">
            <td className = "col-md-4" style={{ textAlign: 'left' }}>
                 <InputValidator 
                    Type = {"text"}
                    Name = {"qty"}
                    PlaceHolder = {"Enter Quantity"}
                    Value = {productDetail.qty}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.qty}
                 />
            </td>
            <td className = "col-md-4" style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"price"}
                    PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.price}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {errors.price}
                 />
            </td>

            <td className = "col-md-4" style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"totalPrice"}
                    PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.totalPrice}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    ReadOnly = {"1"}
                    Error = {''}
                 />
            </td>
            </div>
            </div>
            <td className = "col-md-2" >
                <InputValidator 
                    Type = {"textarea"}
                    Name = {"notes"}
                    //PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.notes}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    Error = {''}
                 />
            </td>

            <td  className="col-md-1" style={{ textAlign: 'left' }}>
                <CustomButton
                        ButtonClicked={this.onDelete}
                        Text={"Delete"}
                        ButtonColor = {"danger"}
                />
            </td>
            
          </tr>
        )
    }
}
