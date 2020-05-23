import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';

//Internal Files
import  InputAddons  from "../../Common/InputHandlers/InputAdons";
import InputValidator from "../../Common/InputHandlers";


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
    render() {
        console.log("Props For More Product Detail ",this.props)
        const productDetail = {...this.state.product}
        return (
           
            <tr>
                
            <td style={{ textAlign: 'left' }}>
                <InputAddons
                    Type = {"text"}
                    Name = {"productId"}
                    PlaceHolder = {"Enter Product Id"}
                    Value = {productDetail.productId}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.firstName}
                />
            </td>
           
            <td  style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"productName"}
                    PlaceHolder = {"Enter Product Name"}
                    Value = {productDetail.productName}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.lastName}
                 />
            </td>
            <td  style={{ textAlign: 'left' }}>
                 <InputValidator 
                    Type = {"text"}
                    Name = {"qty"}
                    PlaceHolder = {"Enter Quantity"}
                    Value = {productDetail.qty}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.lastName}
                 />
            </td>
            <td  style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"price"}
                    PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.price}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.lastName}
                 />
            </td>

            <td  style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"text"}
                    Name = {"totalPrice"}
                    PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.totalPrice}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.lastName}
                 />
            </td>

            <td  style={{ textAlign: 'left' }}>
                <InputValidator 
                    Type = {"textarea"}
                    Name = {"notes"}
                    //PlaceHolder = {"Enter UnitPrice"}
                    Value = {productDetail.notes}
                    BlurEvent = {this.handleBlur}
                    ChangeEvent = {this.handleInputChange}
                    // Error = {errors.lastName}
                 />
            </td>
          </tr>
          
        )
    }
}
