import React, { Component } from 'react';
// import './App.css';


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
    list = (data) => {
        const form = []
        console.log(data)
        Object.keys(data).forEach( (key) => {
            form.push(
            <li>
                {`${key} :`}
                <br></br>
                <input onChange={(e) => this.handleInput(e,data,key)} value={this.state.data[`${key}`]}></input>
            </li>)
        })
        return form
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                {this.list(this.props.data)}
            </div>
        );
    }
}

export default FormGenerator;
