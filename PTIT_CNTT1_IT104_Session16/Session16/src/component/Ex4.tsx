import { Component } from "react";

interface State {
    count: number;
}

class Ex4 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick=()=>{
        this.setState(prev => ({ count: prev.count + 1 }));
    }
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: 30, fontSize: 24 }}>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick} style={{background:"lightblue"}}>Click me</button>
            </div>
        );
    }
}

export default Ex4;