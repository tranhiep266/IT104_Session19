import { Component} from "react";

interface State {
    isLoggedIn: boolean;
}

class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleToggle = () => {
        this.setState((prev) => ({ isLoggedIn: !prev.isLoggedIn }));
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div>
                <div style={{maxWidth: 520,
                    margin: "32px auto",
                    background: "lightblue",
                    borderRadius: 18,
                    padding: "36px 28px",
                    textAlign: "center",}}>
                    <div style={{marginBottom: 20}}>
                        {isLoggedIn ? "Xin chào, User!" : " Vui lòng đăng nhập để tiếp tục."}
                    </div>

                    <button style={{padding: "12px 28px",
                        border: "none",
                        borderRadius: 12,
                        background: "darkblue",
                        color: "white",}} onClick={this.handleToggle}>
                        {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginStatus;