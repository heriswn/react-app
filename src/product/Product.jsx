import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct";
import "./product.css";

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        {/* <img src="https://image.freepik.com/free-photo/eucalyptus-silver-dollar-white-marble-banner_53876-129661.jpg?w=826" alt="logo-img" /> */}
                    </div>
                    <div className="trolley">
                        <img src="https://image.freepik.com/free-vector/illustration-shopping-online_53876-5906.jpg?w=740" alt="trolley-img" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={() => this.handleCounterChange()} />
            </Fragment>
        )
    }
}

export default Product