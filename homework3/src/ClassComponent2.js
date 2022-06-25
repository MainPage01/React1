import React from "react";

class ClassComponent extends React.Component{

    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                This is the second component-{this.props.text}
            </div>
        )
    }
}
export default ClassComponent;