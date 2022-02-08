import React,{Component} from 'react';
import {Validate} from './Validate.jsx';

valueList=[];
infoList=[];
basicInfo1="";
basicInfo2=""
export class BasicInfo extends Component{
    
    constructor(){
        super();
        this.state = {
            count:0,
            gender:"Male",
            basicInfo:"Loading...",
            
        }
    }
    
    onClickChange=(e)=>{
        this.setState({
            gender:e.target.value
        })
        this.props.getGender(e.target.value);
    }
    getlastName=(e)=>{
        this.props.getlastName(e);
    }
    getotherName=(e)=>{
        this.props.getotherName(e);
    }
    render(){
        
        return(
            <div className='basicinfo'>
                <div className='usercover'>
                    <img className='user' src="user.png" height="120px"/>
                </div>
                {this.state.basicInfo}
                <Validate/>
            </div>
        )
    }

    componentDidMount(){
        basicInfo1 = <div>
            <p><input className='input' type="text" placeholder='Enter Last Name' onChange={this.getlastName}/></p>
            <p><input className='input' type="text" placeholder='Enter Other Names' onChange={this.getotherName}/></p>
            <div style={{textAlign:"center"}} onChange={this.onClickChange}>
                <p>Male<input type="radio"  value="Male" name="gender" defaultChecked={this.state.gender === "Male"}/>
                    Female<input type="radio" value="Female" name="gender" defaultChecked={this.state.gender === "Female"}/></p>
            </div>
        </div>
        basicInfo2 = <div>

        </div>
        infoList=[basicInfo1,basicInfo2]
        this.setState({
            basicInfo:infoList[this.state.count]
        })
    }
    
}