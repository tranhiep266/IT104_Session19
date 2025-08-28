import { Component } from "react";

interface State {
    time: Date;
}

class Clock extends Component<object, State> {
    private timerID?: number;

    constructor(props: object) {
        super(props);
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if (this.timerID !== undefined) {
            window.clearInterval(this.timerID);
        }
    }

    private tick() {
        this.setState({ time: new Date() });
    }

    render() {
        const { time } = this.state;
        return (
            <div style={{ textAlign: "center", marginTop: 30, fontSize: 18 }}>
                <p>Thời gian hiện tại: {time.toLocaleTimeString("vi-VN", { hour12: false })}</p>
            </div>
        );
    }
}

export default Clock;