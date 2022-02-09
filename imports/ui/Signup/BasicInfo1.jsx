import React, {Component} from 'react';

export class BasicInfo1 extends Component{

    constructor(){
        super();
        this.state={
            gender: "Male",
            lastBottom:"solid blue 1px",
            otherBottom:"solid black 1px",
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
    focusInput=(e)=>{
        // console.log(e.target===document.activeElement);
        var input = e.target.getAttribute("name")
        if (input==="Last Name"){
            this.setState({
                lastBottom:"solid blue 1px",
                otherBottom:"solid black 1px"
            })
        }
        else if (input==="Other Name"){
            this.setState({
                lastBottom:"solid black 1px",
                otherBottom:"solid blue 1px"
            })
        }
    }
    render(){
        const lastBottom={
            borderBottom: this.state.lastBottom
        }
        const otherBottom={
            borderBottom: this.state.otherBottom
        }
        return(
            <div>
                <div onClick={this.focusInput}>
                    <p><input className='input' type="text" name="Last Name" style={lastBottom} placeholder='Enter Last Name' onChange={this.getlastName}/></p>
                    <p><input className='input' type="text" name="Other Name" style={otherBottom} placeholder='Enter Other Names' onChange={this.getotherName}/></p>
                </div>
                <div style={{textAlign:"center"}} onChange={this.onClickChange}>
                    <p>Male<input style={{cursor:"pointer"}} type="radio"  value="Male" name="gender" defaultChecked={this.state.gender==="Male"}/>
                        Female<input style={{cursor:"pointer"}} type="radio" value="Female" name="gender" defaultChecked={this.state.gender==="Female"}/></p>
                </div>
            </div>
        )
    }
}