import React from 'react';
import {Home} from './Home.jsx';
import {Signup} from './Signup.jsx';
import {Signin} from './Signin.jsx';
import {About} from './About.jsx';
import {Current} from './Current.jsx';
import {Events} from './Events.jsx';

export class App extends React.Component{
  constructor(){
    super();
    this.state = {
      view:"Loading Page...."

    }
  }

  signup=()=>{
    this.setState({
      view:<Signup/>
    })
  }

  gotohome=()=>{
    this.setState({
      view:<Home signup={this.signup} gotoevents={this.gotoevents} 
      gotocurrent={this.gotocurrent} gotoabout={this.gotoabout} 
      gotosignin={this.gotosignin}/>
    })
  }

  gotocurrent=()=>{
    this.setState({
      view:<Current/>
    })
  }
  gotoabout=()=>{
    this.setState({
      view:<About/>
    })
  }
  gotoevents=()=>{
    this.setState({
      view:<Events/>
    })
  }
  gotosignin=()=>{
    this.setState({
      view:<Signin/>
    })
  }
  render(){
    return(
      <div>
        {this.state.view}
      </div>
      
    )
  }
  componentDidMount(){
    this.setState({
      view:<Home signup={this.signup} gotoevents={this.gotoevents} 
      gotocurrent={this.gotocurrent} gotoabout={this.gotoabout} 
      gotosignin={this.gotosignin}/>
    })
  }
};
