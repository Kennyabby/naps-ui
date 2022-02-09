import React, {Component} from 'react';

view="";
export class Validate extends Component{

    constructor(){
        super();
        this.state={
            view:"Loading...",
            showprev:"block",
            shownext:"block",
            showfinish:"block"
        }
    }

    render(){
        return(
            <div>
                <p><button style={{display:this.state.showprev, float:"left"}} className='butt' onClick={this.props.gotoPrev}>Prev</button> 
                <button style={{display:this.state.shownext, float:"right"}} className='butt' onClick={this.props.gotoNext}>Next</button> 
                <button style={{display:this.state.showfinish, float:"right"}} className='butt' onClick={this.props.gotoFinish}>Finish</button></p>
            </div>
        )
    }
    componentDidMount(){
        
        if (this.props.infosCount===0){
            this.setState({
                shownext:"block",
                showprev:"none",
                showfinish:"none"
            })
            if (this.props.count>0){
                this.setState({
                    shownext:"block",
                    showprev:"block",
                    showfinish:"none"
                }) 
            }
            if (this.props.count>0){
                this.setState({
                    shownext:"block",
                    showprev:"block",
                    showfinish:"none"
                }) 
            }
        }
        else if (this.props.infosCount===5){
            this.setState({
                shownext:"none",
                showprev:"block",
                showfinish:"block"
            })
        }
        else{
           
            this.setState({
                shownext:"block",
                showprev:"block",
                showfinish:"none"
            })
        }
        
    }
}