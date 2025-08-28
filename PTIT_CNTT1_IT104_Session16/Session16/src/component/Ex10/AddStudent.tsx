import { Component, type ChangeEvent, type FormEvent } from "react";

export interface StudentInput {
    code: string;
    name: string;
    dob: string;
    email: string;
    active: boolean;
}

interface Props {
    onClose: () => void;
    onSubmit: (s: StudentInput) => void;
}

type State = StudentInput

const overlay: React.CSSProperties = {
    position: "fixed", inset: 0, background: "rgba(0,0,0,.4)",
    display: "flex", alignItems: "center", justifyContent: "center",
};
const modal: React.CSSProperties = {
    background: "#fff", padding: 16, borderRadius: 12, minWidth: 360, display: "flex", gap: 8, flexDirection: "column",
};
const inputStyle: React.CSSProperties = { padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 8, width: "100%" };
const row: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8 };

export default class AddStudentModal extends Component<Props, State> {
    state: State = { code: "", name: "", dob: "", email: "", active: true };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        this.setState({ ...(this.state as State), [name]: type === "checkbox" ? checked : value } as State);
    };

    submit = (e: FormEvent) => {
        e.preventDefault();
        const { code, name, dob, email } = this.state;
        if (!code || !name || !dob || !email) return;
        this.props.onSubmit(this.state);
        this.props.onClose();
    };

    render() {
        return (
            <div style={overlay}>
                <form style={modal} onSubmit={this.submit}>
                    <h3 style={{ margin: 0 }}>Thêm mới sinh viên</h3>

                    <label>
                        <div>Mã SV</div>
                        <input name="code" value={this.state.code} onChange={this.handleChange} style={inputStyle} />
                    </label>

                    <label>
                        <div>Họ tên</div>
                        <input name="name" value={this.state.name} onChange={this.handleChange} style={inputStyle} />
                    </label>

                    <label>
                        <div>Ngày sinh</div>
                        <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} style={inputStyle} />
                    </label>

                    <label>
                        <div>Email</div>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} style={inputStyle} />
                    </label>

                    <label style={row}>
                        <input type="checkbox" name="active" checked={this.state.active} onChange={this.handleChange} />
                        Đang hoạt động
                    </label>

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                        <button type="button" onClick={this.props.onClose}>Hủy</button>
                        <button type="submit">Lưu</button>
                    </div>
                </form>
            </div>
        );
    }
}