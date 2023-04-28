import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"haha",
            address:"banepa",
            number:11,
        };
        }
        render(){
            return(

                <div>
                <h1>helllooooo{this.state.address}{this.state.number}</h1>
                {/* <button onClick={()=> this.setState({address:"kathmandu",number:number+1})}>click me</button> */}
                <button onClick={()=> this.setState({address:"kathmandu",number:this.state.number+1})}>click me</button>
                </div>
            )
        }
    }
    export default Clock;
