import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo1.css';

const Demo1=(props)=>{
    return <div className='extercss'>
            <h1>Welcome to My Website</h1>
            <h2> ADDRESS: {props.address}</h2>
            <p>
                this is pargraph for the testing Purpose
            </p>
        </div>
}
export default Demo1;