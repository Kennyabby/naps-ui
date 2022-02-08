import React,{Component} from 'react';
import {BasicInfo} from './Signup/BasicInfo.jsx'
export class Signup extends Component{

    constructor(){
        super();
        this.state = {
            lastName: "",
            otherName: ""
        }
    }

    getlastName=(e)=>{
        console.log("last Name:", e.target.value);
        this.setState({
            lastName: e.target.value
        })
    }
    getotherName=(e)=>{
        console.log("other Name:", e.target.value)
        this.setState({
            otherName: e.target.value
        })
    }
    getGender=(gender)=>{
        console.log("gender:", gender)
    }
    render(){
        return(
            <div className='signinpage'>
                <div className='leftCover'>

                </div>
                <div className='cover'>
                    <div className='content'>
                        <ul className='sideBar'>
                            <li className='side'>Basic Info</li>
                            <li className='side'>School Info</li>
                            <li className='side'>Contact Address</li>
                            <li className='side'>Signin Info</li>
                            <li className='side'>Finish</li>
                        </ul>
                        <div className='infoview'>
                            <BasicInfo getlastName={this.getlastName} getotherName={this.getotherName}
                            getGender={this.getGender}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}