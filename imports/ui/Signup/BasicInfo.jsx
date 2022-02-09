import React,{Component} from 'react';
import {Validate} from './Validate.jsx';

valueList=[];
infoList=[];
count=0;
export class BasicInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            infos:0,
            count:0,
            gender:"Male",
            basicInfo:"Loading..."
            
        }
        
    }
    
    getGender=(gender)=>{
        this.setState({
            gender:gender
        })
        this.props.getGender(gender);
    }
    getlastName=(e)=>{
        this.props.getlastName(e);
    }
    getotherName=(e)=>{
        this.props.getotherName(e);
    }
    
    gotoNext=()=>{
        count++;
        if(count>1){
            this.props.gotoNext(0,"School Info");
            count=1
        }else{
            this.props.gotoNext(count,"Basic Info");
            this.setState({
                count:count
            })
        }
        
    }
    gotoPrev=()=>{
        count--;
        this.setState({
            count:count
        }) 
    }
    gotoFinish=()=>{
      
    }
    
    render(){
    
        return(
            <div className='basicinfo'>
                <div className='usercover'>
                    <img className='user' src="user.png" height="120px"/>
                </div>
                {this.state.basicInfo}
                <Validate infosCount={this.props.infosCount} infoList={infoList} 
                count={this.state.count} gotoNext={this.gotoNext} gotoPrev={this.gotoPrev}
                gotoFinish={this.gotoFinish}/>
            </div>
        )
        
    }

    componentDidMount(){
        
        this.setState({
            basicInfo:this.props.currentBasicInfo
        })
    }
    
}