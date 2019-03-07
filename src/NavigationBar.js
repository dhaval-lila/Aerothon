import React, { Component } from 'react';
import FormGenerator from './FormGenerator'

let data = {}
class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { type : "A320" };
    }
    handleInput = (e,format) => {
        e.preventDefault();
        console.log("hey we are here");
        
        this.setState({
            type : format
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
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Airbus</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  onClick={(e) => this.handleInput(e,"A320")}>A320</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  onClick={(e) => this.handleInput(e,"A330")}>A330</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={(e) => this.handleInput(e,"A350")}>A350</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" >Search</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <FormGenerator type={this.state.type} key={this.state.type} data={data}/>
            </div>
        );
    }
}

export default NavigationBar;
