import React, { Component } from 'react';
import FormGenerator from './FormGenerator'
import HomePage from './HomePage';

let data = {}
class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type : "A320",
            home : true
        };
    }
    handleHome = (e) => {
        e.preventDefault();
        this.setState({
            home : true
        })
    }
    handleInput = (e,format) => {
        e.preventDefault();
        console.log("hey we are here");
        
        this.setState({
            type : format,
            home : false
        })
        data = require(`../format-json/${format}`)
    }
    componentDidMount(){
        data = require(`../format-json/${this.state.type}`);
    }
    componentDidUpdate(){
        
    }
    render() {
        return (
            <div class="mt-4">
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand" style={{ color : "white"}}>Airbus</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div  style={ {background : "#ced4dd"}} class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" onClick={(e) => this.handleHome(e)} >Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link"  onClick={(e) => this.handleInput(e,"A320")}>A320</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link"  onClick={(e) => this.handleInput(e,"A330")}>A330</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" onClick={(e) => this.handleInput(e,"A350")}>A350</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" >Search</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={"mt-4"}>
                { this.state.home ? "" : <FormGenerator type={this.state.type} key={this.state.type} data={data}/>}
                { this.state.home ? <HomePage/> : ""}
                </div>
            </div>
        );
    }
}

export default NavigationBar;
