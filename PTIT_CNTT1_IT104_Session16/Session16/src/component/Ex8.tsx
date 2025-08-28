import { Component } from "react";

interface State {
    count: number;
}

class Ex8 extends Component<object, State> {
    private timerId?: number;

    constructor(props: object) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.timerId = window.setInterval(() => {
            this.setState(({ count }) => ({
                count: count === 10 ? 0 : count + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerId !== undefined) {
            window.clearInterval(this.timerId);
        }
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: 30, fontSize: 24 }}>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default Ex8;