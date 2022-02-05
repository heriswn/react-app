import React, { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = () => {
        this.props.onCounterChange()
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
            this.handleCounterChange(this.state.order)
        })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb">
                    <img src="https://image.freepik.com/free-photo/front-view-pile-towels-with-iron_23-2148251764.jpg?w=740" alt="product-img" />
                </div>
                <p className="product-title">Cuci + Setrika</p>
                <p className="product-price">Rp7000/kg</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct