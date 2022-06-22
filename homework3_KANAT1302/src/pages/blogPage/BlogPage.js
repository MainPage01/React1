import React from "react";

class BlogPage extends React.Component {
        // constructor(props) {
        //     super(props);
        // }

    sayHello () {
        alert("hello world")
    }

    //
    // changeText (e) {
    //     console.log(e.target.value)
    // }

    render() {
        return (
            <div>
                I am class Components - {this.props.title} - {this.test}
                <input type="text" onChange={this.changeText}/>
                <button onClick={this.sayHello}>Say hello</button>
            </div>
        );
    }
}

export default BlogPage
