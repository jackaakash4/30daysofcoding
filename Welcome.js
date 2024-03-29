import React, { Component } from "react";

class Welcome extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'

        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return(
            <>
                <h1>{ this.state.message }</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>
        );
    }
}

export default Welcome;