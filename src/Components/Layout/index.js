import React, { Component } from 'react';

//Dependency
import {
    Row,
    Col,
    Card,
    CardText
} from 'reactstrap';

//Components
import Address from "../AddressBillingShipping";
import Product from "../Product";

//Data
import { BillingData } from "../Data/BillingData";
import { ProductData } from "../Data/ProductData";
import { ShippingData } from "../Data/ShippingData";

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            productData : ProductData 
        }
    }
    render() {

        return (
            <div>
                <header className="App-header">

                    <div className="card-content">
                        <Card body>
                            <CardText>
                                <Row>
                                    <Col lg="4" md="6">
                                        <h6 className="alignLeft">Billing Address</h6>
                                        <Address
                                            title={"Billing"}
                                            addressDetails={BillingData[0]}
                                        />
                                    </Col>
                                    <Col lg="4" md="6">
                                        <h6 className="alignLeft">Shipping Address</h6>
                                        <Address
                                            title={"Shipping"}
                                            addressDetails={ShippingData[0]}
                                        />
                                    </Col>
                                    <Col lg="4" md="6">

                                    </Col>
                                </Row>
                            </CardText>
                        </Card>
                    </div>

                    <div className="card-content-two">
                        <Card body className="card-height">
                            {/* <CardTitle>Special Title Treatment</CardTitle> */}
                            <CardText>
                                <Row>
                                    <Col lg="12" md="12">
                                        <Product
                                            data={ProductData} 
                                        />                                   
                                    </Col>
                                </Row>
                            </CardText>
                        </Card>
                    </div>

                </header>
            </div>
        )
    }
}
