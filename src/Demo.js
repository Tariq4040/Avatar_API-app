import React, { Component } from 'react';
import DomReact from 'react-dom';
import './demo_css.css';
class Demo extends Component{
    render(){
        return <div className='democss'>
            <h1>Hello world this is Custom Page Demo and my Name is {this.props.name},used for the Testing Purpose</h1>
        <p>this is testing Paragraph for the testing Purpose</p>
        </div>
    }
}
export default Demo;