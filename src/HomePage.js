import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import {domainUrl} from "./config"


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data : this.props.data };
}
handleUpload = () => {
  console.log("clicked")
  const that = this
  let url = domainUrl + "/news"
  let request = new XMLHttpRequest();
  request.open('GET',url,true)
  request.onload = function(){
          if(this.status=== 200){
              that.setState({
                data : JSON.parse(request.response)
              })
          }
          else{
              alert("Invalid Input");
          }
          
  }
  request.send();
}
componentDidMount(){
  this.handleUpload();
}
  render() {
    return (
      <div className="mt-4">
        <div className="container">
        <ReactJson src={this.state.data} />

        </div>
      </div>
    );
  }
}

export default HomePage;
