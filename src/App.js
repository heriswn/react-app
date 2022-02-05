import React, { Component } from "react";
// import LifeCycleComp from "./lifecyclecomp/LifeCycleComp";
// import Product from "./product/Product";
import BlogPost from "./blog/BlogPost";

class Home extends Component {
  // state = {
  //   showComponent: true
  // }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({
  //       showComponent: false
  //     })
  //   }, 15000)
  // }

  render(){
    return(
      <div>
        {/* <Product /> */}
        {/* {
          this.state.showComponent
          ?
          <LifeCycleComp />
          : null
        } */}
        <p>BlogPost</p>
        <hr/>
        <BlogPost />
      </div>
    )
  }
}

export default Home