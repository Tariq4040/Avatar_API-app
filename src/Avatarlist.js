import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Avatar_list extends Component{
    render(){
        return(
        <section className="tc pa3 dib grow shadow-5">
            <article className="hide-child relative ba b--black-20 mw5 center">
            {/* //random pics lene k lea hm,tilt sign k andr destructing krte h like below */}
              <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} className='img_design' alt="Photo Not Show" /> 
              <div className="pa2 bt b--black-20">
                <a className="f6 db link dark-blue hover-blue" href="https://www.google.com">{this.props.name}</a>
                <p className="f6 gray mv1">{this.props.work}</p>
                <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://www.google.com">Add Friend</a>
              </div>
              <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="https://www.google.com">×</a>
            </article>
          </section>
          )
    }
}
export default Avatar_list;