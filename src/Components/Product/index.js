import React from 'react';
import ProductDetail from "./ProductDetail";
import { Table, Row, Col } from 'reactstrap';
import CustomButton from "../../Common/Button";
import { connect } from "react-redux";
import { addProduct } from "../../Redux/Actions/ProductActions";

function Product(props) {
    const onAddProduct = () => {
        console.log("Add Product Clicked");
        props.addProduct();
    }
    const onSaveClicked = () => {
        console.log("Save Button Clicked");
    }
    return (
        <div>
            {
                //console.log("From Redux Data Fetched is",props.productData.productData)
            }
            <Row>
                <Col lg="11" md="11">
                    <Table>

                        <thead>
                            <tr className="row">
                                <th className = "col-md-2" style={{ textAlign: 'left' }}>
                                    Product Id
                                </th>
                                <th className = "col-md-3" style={{ textAlign: 'left' }}>
                                    Product Name
                                </th>
                                <div className = "col-md-4">
                                <div className="row">
                                <th className = "col-md-4" style={{ textAlign: 'left' }}>
                                    Qty
                                </th>
                                <th className = "col-md-4"style={{ textAlign: 'left' }}>
                                    Unit Price
                                </th>
                                <th className = "col-md-4" style={{ textAlign: 'left' }}>
                                    Total Price
                                </th>
                                </div>
                                </div>
                                <th className = "col-md-2" style={{ textAlign: 'left' }}>
                                    Notes
                                </th>
                                <th className = "col-md-1" style={{ textAlign: 'left' }}>
                                    
                                </th>
                                

                              
                            </tr>

                        </thead>

                        <tbody>
                            {
                                props.productData.map((product,index) => (
                                    <ProductDetail
                                        data={product}
                                        index={index}
                                    />
                                )
                                )
                            }
                            <div className="alignLeft">
                            <CustomButton
                                ButtonClicked={onAddProduct}
                                Text={"ADD PRODUCT"}
                                SizeForButton={"sm"}
                                ButtonColor = {"primary"}
                            />
                            </div>
                        </tbody>
                    </Table>

                    <div className="row">
                        <div className="col-md-11">
                           
                         </div>
                         <CustomButton
                                ButtonClicked={onSaveClicked}
                                Text={"SAVE"}
                                SizeForButton={"lg"}
                                ButtonColor = {"primary"}
                        />
                    </div>
                     
                </Col>
            </Row>
        </div>
    )
}
const mapStateToProps = state =>{
    console.log("Inside mapStatetoprops only  STate ",state);
    console.log("Inside mapStatetoprops STate.pro ",state.productData);
    console.log("Inside mapStatetoprops STate.pro2 ",state.productData.productData);
    return {
        productData : state.productData
    }
}
const mapDispatchToProps = {
    addProduct : addProduct
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);
