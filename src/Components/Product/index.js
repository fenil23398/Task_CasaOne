import React from 'react';
import ProductDetail from "./ProductDetail";
import { Table,Row,Col } from 'reactstrap';

function Product(props) {
    return (
        <div>
            <Row>
                <Col lg="11" md="11">
            <Table>
               
                        <thead>
                            <tr>
                            <th style={{ textAlign: 'left' }}>Product Id</th>
                            <th style={{ textAlign: 'left' }}>Product Name</th>
                            <th style={{ textAlign: 'left' }}>Qty</th>
                            <th style={{ textAlign: 'left' }}>Unit Price</th>                               
                            <th style={{ textAlign: 'left' }}>Total Price</th>
                            <th style={{ textAlign: 'left' }}>Notes</th>
                            <th></th>

                                {/* <Col lg="2" md="2">

                                </Col>
                                <Col lg="3" md="3">
                                    <th>Product Name</th>
                                </Col>
                                <Col lg="1" md="1">
                                    <th>Qty</th>
                                </Col>
                                <Col lg="1" md="1">
                                    <th>Unit Price</th>
                                </Col>
                                <Col lg="1" md="1">
                                    <th>Total Price</th>
                                </Col>
                                <Col lg="2" md="2">
                                    <th>Notes</th>
                                </Col>
                                <Col lg="1" md="1">
                                    <th>Total Price</th>
                                </Col> */}
                            </tr>
                            
                        </thead>
                       
                <tbody>
                    {
                        props.data.map(product => (
                            <ProductDetail
                             data={product}
                            />
                            )
                        )
                    }
                </tbody>
            </Table>
            </Col>
            </Row>
        </div>
    )
}
export default Product;
