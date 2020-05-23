import React, { Component } from 'react';

//Dependency
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
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
    render() {

        return (
            <div>
                <header className="App-header">
                                     
                        <div className="card-content">
                            <Card body>
                                <CardText>
                                    <Row>
                                        <Col lg="4" md="6">
                                            <h6>Billing Address</h6>
                                            <Address
                                                title={"Billing Address"}
                                                addressDetails={BillingData[0]}
                                            />
                                        </Col>
                                        <Col lg="4" md="6">
                                            <h6>Shipping Address</h6>
                                            <Address
                                                title={"Shipping Address"}
                                                addressDetails={ShippingData[0]}
                                            />
                                        </Col>
                                        <Col lg="4" md="6">

                                        </Col>
                                    </Row>
                                </CardText>
                            </Card>
                        </div>

                        <Row>
                            <Col lg="12" md="12">
                                asdfghjkl;'sdfghjkl;sdfghjklsadfghjklsdfghjksdfghjksdfghjklsdfghjklsdfghj'
                            </Col>
                        </Row>
                </header>
            </div>
        )
    }
}
