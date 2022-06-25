import React from "react";
import classes from "./classes1.css"

class Class1 extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className= "props">
                THis is the first component class component-{this.props.title}
            </div>



        )
    }
    
}

export default Class1;