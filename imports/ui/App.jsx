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

  gotopage=(page)=>{
    if (page==="Signin"){
      this.setState({
        view:<Signin/>
      })
    }
    else if(page==="Events"){
      this.setState({
        view:<Events/>
      })
    }
    else if(page==="About"){
      this.setState({
        view:<About/>
      })
    }
    else if(page==="Current"){
      this.setState({
        view:<Current/>
      })
    }
    else if(page==="Signup"){
      this.setState({
        view:<Signup/>
      })
    }
    else if(page==="Home"){
      this.setState({
        view:<Home gotopage={this.gotopage}/>
      })
    }
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
      view:<Home gotopage={this.gotopage}/>
    })
  }
};
