import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './avatar.css';
import 'tachyons';
import Avatar_list from'./Avatarlist.js';

class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name:"Welcome to My Channel"
        }
    }

    change_text(){
        this.setState({
            name:"Thanks For Clicking And for Subscribing My Channel."
        })
    }
    render(){
        return (
            <div>
            <h1 className='tc'>Welcome to My Channel</h1>
            <Avatar_list name='M.Tariq Ahmad' work='Python Django Developer' id='1'/>
            <Avatar_list name='Haider Bilal' work='C# Developer' id='2'/>
            <Avatar_list name='Sadiq Jafri' work='C++ Developer' id='3'/>
            <Avatar_list name='Maqsood Ali' work='PHP Developer' id='4'/>
          <button className='cls_btn' onClick={() => this.change_text()}>Subcibe My Channel</button>
          {/* <a className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue cls_btn" href="#0"
           onClick={() => this.change_text()}>Subcibe My Channel</a> */}
          </div>
        )
    }
}

export default Avatar;