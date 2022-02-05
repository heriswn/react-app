import React, { Component } from "react";
import "./LifeCycleComp.css"

class LifeCycleComp extends Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('get derived')
        return null;
    }

    componentDidMount(){
        console.log('did mount')
        setTimeout(()=>{
            this.setState({
                count: 2
            })
        }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('should update')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('get snap')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('did update')
    }

    componentWillUnmount(){
        console.log('will unmount')
    }

    render(){
        console.log('render')
        return(
            <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp