import React,{Component} from 'react';
import {BasicInfo} from './Signup/BasicInfo.jsx';
import {BasicInfo1} from './Signup/BasicInfo1.jsx';
import {BasicInfo2} from './Signup/BasicInfo2.jsx';

var count=0;
var cot=0;
var basicInfo="";
export class Signup extends Component{

    constructor(){
        super();
        this.state = {
            lastName: "",
            otherName: "",
            gender:"Male",
            basicBottom: "none",
            schoolBottom: "none",
            contactBottom: "none",
            signinBottom: "none",
            finishBottom: "none",
            currentInfo:"Basic Info",
            infosCount:0,
            infoView:"Loading View...",
            currentBasicInfo:this.basicInfoList[count]
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
    basicInfoList=[<BasicInfo1 getGender={this.getGender} getlastName={this.getlastName}
        getotherName={this.getotherName}/>, <BasicInfo2/>]
    setInfoToDefault=()=>{
        this.setState({
            basicBottom: "none",
            schoolBottom: "none",
            contactBottom: "none",
            signinBottom: "none",
            finishBottom: "none"
        })
    }
    gotoNext=(count,currentInfo)=>{
        if (currentInfo==="Basic Info")
        console.log(count);
        this.setState({
            currentInfo:currentInfo,
            currentBasicInfo:this.basicInfoList[count],
        
        })
        
    }
    gotoPrev=(infosCount,count,currentInfo)=>{
        count--
        this.setState({
            count:0,
        })
    }
    
    gotoFinish=()=>{

    }
    
    updateInfo(info){
        this.setInfoToDefault();
        this.setState({
            currentInfo:info
        })
        if (info==="Basic Info"){
            this.setState({
                infoView:basicInfo,
                infosCount:0,
                basicBottom: "solid rgb(76, 241, 76) 2px"
            })
        }
        else if (info==="School Info"){
            this.setState({
                infosCount:1,
                schoolBottom: "solid rgb(76, 241, 76) 2px"
            })
        }
        else if (info==="Contact Address"){
            this.setState({
                infosCount:2,
                contactBottom: "solid rgb(76, 241, 76) 2px"
            })
        }
        else if (info==="Signin Info"){
            this.setState({
                infosCount:3,
                signinBottom: "solid rgb(76, 241, 76) 2px"
            })
        }
        else if (info==="Finish"){
            this.setState({
                infosCount:4,
                finishBottom: "solid rgb(76, 241, 76) 2px"
            })
        }
        
    }
    detectInfoClick=(e)=>{
        var info = e.target.innerHTML;
        this.updateInfo(info);
        
        
    }
    
    render(){
        
        return(
            <div className='signinpage'>
                <div className='leftCover'>

                </div>
                <div className='cover'>
                    <div className='content'>
                        <ul className='sideBar' onClick={this.detectInfoClick}>
                            <li className='side' style={{borderBottom: this.state.basicBottom}} value="Basic Info">Basic Info</li>
                            <li className='side' style={{borderBottom: this.state.schoolBottom}} value="School Info">School Info</li>
                            <li className='side' style={{borderBottom: this.state.contactBottom}} value="Contact Address">Contact Address</li>
                            <li className='side' style={{borderBottom: this.state.signinBottom}} value="Signin Info">Signin Info</li>
                            <li className='side' style={{borderBottom: this.state.finishBottom}} value="Finish">Finish</li>
                        </ul>
                        <div className='infoview'>
                            {this.state.infoView}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount(){
        basicInfo=<BasicInfo infosCount={this.state.infosCount} 
        currentBasicInfo={this.state.currentBasicInfo} gotoNext={this.gotoNext} gotPrev={this.gotoPrev}
        gotoFinish={this.gotoFinish}/>
        if (this.state.currentInfo==="Basic Info"){
            this.updateInfo("Basic Info");
            this.setState({
                infoView: basicInfo
            }); 
        }
        else{
            this.setState({
                infoView:"Loading Next Info..."
            })
        }
        console.log(this.state.currentInfo);
         
    }
}