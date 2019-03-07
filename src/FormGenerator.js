import React, { Component } from 'react';
// import './App.css';
import {domainUrl} from "./config"


class FormGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { data : this.props.data };
    }
    handleInput = (e,data,key) =>{
        e.preventDefault();
        console.log("inside handleInput")
        data[`${key}`] = e.target.value
        let copy = JSON.parse(JSON.stringify(data));
        this.setState({
            data : copy
        })
    }
    handleConvert = (data) => {
        let temp = {}
        temp.msn = data["MSN"]
        temp.harness = data["Harness Length"]
        temp.grossWeight = data["Gross Weight"]
        temp.atmosphericPressure = data["Atmospheric Pressure"]
        temp.roomTemperature = data["Room Temperature"]
        temp.airport = data["Airport"]
        temp.leftWingFuelCapacity = data["Fuel Capacity on Left Wing"]
        temp.rightWingFuelCapacity = data["Fuel Capacity on Right Wing"]
        temp.leftWingFuelQuantity = data["Fuel Quantity on Left Wing"]
        temp.rightWingFuelQuantity = data["Fuel Quantity on Right Wing"]
        temp.maxAltitudeToBeReached = data["Maximum Altitude to be reached"]
        temp.flightNumber = data["Flight number"]
        return temp
    }
    handleUpload = (e) => {
        console.log("clicked")
        const that = this
        let url = domainUrl + "/aircrafts/"+this.props.type
        let request = new XMLHttpRequest();
        request.open('POST',url,true)
        request.withCredentials = true;
        request.setRequestHeader('Content-type','application/json')
        request.onload = function(){
                if(this.status=== 200){
                    alert("success")
                }
                else{
                    alert("Invalid Input");
                }
                
        }
        request.send(JSON.stringify(this.handleConvert(this.state.data)));
    }
    list = (data) => {
        const form = []
        console.log(data)
        Object.keys(data).forEach( (key) => {
            form.push(
            <div className={""}>
                {`${key} :`}
                <br></br>
                <input style={{ width : "400px"}} onChange={(e) => this.handleInput(e,data,key)} value={this.state.data[`${key}`]}></input>
                <br></br>
                <br></br>
            </div>)
        })
        return form
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
            <div>
                {this.list(this.props.data)}
            </div >
            <button class="btn btn-outline-success mb-4" onClick={(e) => this.handleUpload(e)}>Submit</button>
            </div>
        );
    }
}

export default FormGenerator;
