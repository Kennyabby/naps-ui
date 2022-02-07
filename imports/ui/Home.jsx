import React, {Component} from 'react';
export class Home extends Component{

    constructor(){
        super();
        this.state = {
            page:"Home",
            homeColor:"white",
            currentColor:"rgb(231, 221, 221)",
            aboutColor:"rgb(231, 221, 221)",
            eventsColor:"rgb(231, 221, 221)",
            signinColor:"rgb(231, 221, 221)"
        }
    }

    setToDefault(){
        this.setState({
            homeColor:"rgb(231, 221, 221)",
            currentColor:"rgb(231, 221, 221)",
            aboutColor:"rgb(231, 221, 221)",
            eventsColor:"rgb(231, 221, 221)",
            signinColor:"rgb(231, 221, 221)"
        }) 
    }
    toggleBar=(e)=>{
        if (e.target.innerHTML==="Home"){
            this.setToDefault();
            this.setState({
                homeColor:"white",
            })
            this.props.gotohome();
        }
        else if (e.target.innerHTML==="Current"){
            this.setToDefault();
            this.setState({
                currentColor:"white",
            })
            this.props.gotocurrent();
        }
        else if (e.target.innerHTML==="About"){
            this.setToDefault();
            this.setState({
                aboutColor:"white",
            })
            this.props.gotoabout();
        }
        else if (e.target.innerHTML==="Events"){
            this.setToDefault();
            this.setState({
                eventsColor:"white",
            })
            this.props.gotoevents();
        }
        else if (e.target.innerHTML==="Sign in"){
            this.setToDefault();
            this.setState({
                signinColor:"white"
            })
            this.props.gotosignin();
        }
    }

    signup=()=>{
        this.props.signup();
    }
    render(){
        return(
            <div>
                <div className="bar">
                    <ul className="topbar">
                        <div className='top-left'>
                            NapsUI
                        </div>
                        <li className="top" style={{color:this.state.homeColor}} onClick={this.toggleBar}>
                            Home
                        </li>
                        <li className="top" style={{color:this.state.currentColor}} onClick={this.toggleBar}>
                            Current
                        </li>
                        <li className="top" style={{color:this.state.aboutColor}} onClick={this.toggleBar}>
                            About
                        </li>
                        <li className="top" style={{color:this.state.eventsColor}} onClick={this.toggleBar}>
                            Events
                        </li>
                        <div className='top-right' style={{color:this.state.signinColor}} onClick={this.toggleBar}>
                            Sign in
                        </div>
                    </ul>
                    
                    <div className='info'>
                        <p>This page is strictly for members of the National Association of Physics Students University of Ibadan Division <b>(NAPS UI)</b>, as only members can access its priviledges. The Registration process requires that all members provide their University of Ibadan student <b>MATRIC NUMBER</b>. Click the button below to proceed.</p>    
                    </div>
                    <img className="ui-logo" style={{opacity:"0.7"}} src="UI-logo.png" height="300px"/> 
                    <button className='signup' onClick={this.signup}>Sign Up</button>
                    
                </div>
            </div>
            
        )
    }
}