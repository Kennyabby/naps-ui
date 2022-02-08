import React,{Component} from 'react';
import {Validate} from './Validate.jsx';
export class BasicInfo extends Component{
    
    constructor(){
        super();
        this.state = {
            count:0,
            gender:"Male",
            basicInfo:"Loading...",
            
        }
    }
    valueList=[];
    infoList=[];
    basicInfo1="";
    basicInfo2=""
    onClickChange=(e)=>{
        this.setState({
            gender:e.target.value
        })
        this.props.getGender(e.target.value);
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
            <p><input className='input' type="text" placeholder='Enter Last Name' onChange={this.props.getlastName}/></p>
            <p><input className='input' type="text" placeholder='Enter Other Names' onChange={this.props.getotherName}/></p>
            <div style={{textAlign:"center"}} onChange={this.onClickChange}>
                <p>Male<input type="radio"  value="Male" name="gender" checked={this.state.gender === "Male"}/>
                    Female<input type="radio" value="Female" name="gender" checked={this.state.gender === "Female"}/></p>
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