import React, {Component, ChangeEvent, FormEvent} from "react";

interface State{
    name:string;
    email:string;
    age:string;
    error: string;
    submitted: boolean;
}

export default class Ex5 extends Component<object, State>{
    constructor(props: object) {
        super(props);
        this.state = {
            name: "",
            email: "",
            age: "",
            error: "",
            submitted: false,
        };
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value, submitted: false });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, age } = this.state;

        if (!email.includes("@")) {
            return this.setState({ error: "Email không hợp lệ", submitted: false });
        }
        const ageNum = Number(age);
        if (Number.isNaN(ageNum) || ageNum < 0) {
            return this.setState({ error: "Tuổi không được âm", submitted: false });
        }

        this.setState({ error: "", submitted: true, name, email, age });
    };

    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            age: "",
            error: "",
            submitted: false,
        });
    };
    render() {
        const buttonInput:React.CSSProperties={
            padding:5,
            width:"70%"
        }
        const { name, email, age, error, submitted } = this.state;

        return (
            <div style={{
                textAlign:"center",
                margin:"auto",
                width:"30%"
            }}>
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                    textAlign:"center",
                    border:"3px solid black",
                    marginTop:50
                }}
                >
                    <h2>Nhập thông tin người dùng</h2>
                    <input
                        style={buttonInput}
                        name="name"
                        placeholder="Họ tên"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <p></p>
                    <input
                        style={buttonInput}
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <p></p>
                    <input
                        style={buttonInput}
                        name="age"
                        placeholder="Tuổi"
                        value={age}
                        onChange={this.handleChange}
                    />
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <button type="submit" style={{background:"blue",marginTop:15,padding:10,}}>Gửi</button>
                        <button type="button" onClick={this.handleReset} style={{background:"blue",marginTop:15,padding:10}}>Xoá tất cả</button>
                    </div>
                    {error && (
                        <p style={{ color: "red", marginTop: 10 }}>{error}</p>
                    )}
                </form>
                {submitted && !error && (
                    <div
                        style={{
                            marginTop: 16,
                            padding: 16,
                            background: "#dfefff",
                            borderRadius: 10,
                            textAlign: "left",
                        }}
                    >
                        <strong>✅ Thông tin đã nhập:</strong>
                        <p>Họ tên: {name}</p>
                        <p>Email: {email}</p>
                        <p>Tuổi: {age}</p>
                    </div>
                )}
            </div>
        )
    }
}