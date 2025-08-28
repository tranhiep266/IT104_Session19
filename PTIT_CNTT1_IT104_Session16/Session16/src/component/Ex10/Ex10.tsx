import { Component, type ChangeEvent } from "react";
import TableStudent , {type Student } from "./TableStudent.tsx";
import AddStudent, { type StudentInput } from "./AddStudent.tsx";

type SortMode = "age_asc" | "age_desc" | "none";

interface State {
    students: Student[];
    search: string;
    sort: SortMode;
    page: number;
    showModal: boolean;
    pageSize: number;
}

const seed: Student[] = [
    { id: 1, code: "SV001", name: "Nguyễn Văn A", dob: "2023-12-21", email: "nva@gmail.com", active: true },
    { id: 2, code: "SV002", name: "Nguyễn Thị B", dob: "2022-11-21", email: "ntb@gmail.com", active: false },
    { id: 3, code: "SV003", name: "Trần Minh C", dob: "2001-06-10", email: "tmc@gmail.com", active: true },
    { id: 4, code: "SV004", name: "Phạm D",       dob: "2000-08-05", email: "pd@gmail.com",  active: true },
    { id: 5, code: "SV005", name: "Lê E",         dob: "2002-01-30", email: "le@gmail.com",  active: false },
    { id: 6, code: "SV006", name: "Đỗ F",         dob: "1999-03-12", email: "df@gmail.com",  active: true },
];

export default class Ex10 extends Component<object, State> {
    state: State = {
        students: seed,
        search: "",
        sort: "none",
        page: 1,
        showModal: false,
        pageSize: 5,
    };

    get filtered(): Student[] {
        const kw = this.state.search.trim().toLowerCase();
        const list = this.state.students.filter(
            s => !kw || s.name.toLowerCase().includes(kw) || s.email.toLowerCase().includes(kw)
        );

        return list;
    }

    handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ search: e.target.value, page: 1 });
    };

    handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ sort: e.target.value as SortMode, page: 1 });
    };

    addStudent = (s: StudentInput) => {
        const id = Math.max(0, ...this.state.students.map(x=>x.id)) + 1;
        this.setState({ students: [{ id, ...s }, ...this.state.students ] });
    };

    blockToggle = (id: number) => {
        this.setState({
            students: this.state.students.map(s => s.id===id ? { ...s, active: !s.active } : s)
        });
    };

    editStudent = (id: number) => {
        alert("Demo: mở modal sửa — tạm thời alert ID = " + id);
    };

    deleteStudent = (id: number) => {
        if (confirm("Xóa sinh viên này?")) {
            this.setState({ students: this.state.students.filter(s => s.id !== id) });
        }
    };

    render() {
        const wrap: React.CSSProperties = { maxWidth: 980, margin: "40px auto", padding: "0 12px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" };
        const toolbar: React.CSSProperties = { display: "flex", gap: 10, alignItems: "center", marginBottom: 12 };
        const input: React.CSSProperties = { flex: 1, padding: "8px 10px", border: "1px solid #dcdcdc", borderRadius: 6 };
        const select: React.CSSProperties = { padding: "8px 10px", border: "1px solid #dcdcdc", borderRadius: 6, minWidth: 180 };
        const primaryBtn: React.CSSProperties = { background: "#2563eb", color: "#fff", borderColor: "#2563eb", borderRadius: 8, padding: "8px 14px", border: "1px solid #2563eb", cursor: "pointer" };

        const list = this.filtered;

        return (
            <div style={wrap}>
                <h2 style={{ margin: "8px 0 16px" }}>Quản lý sinh viên</h2>

                <div style={toolbar}>
                    <button style={primaryBtn} onClick={()=>this.setState({showModal:true})}>Thêm mới sinh viên</button>
                    <select value={this.state.sort} onChange={this.handleSort} style={select}>
                        <option value="none">Sắp xếp</option>
                        <option value="age_asc">Sắp xếp theo tuổi ↑</option>
                        <option value="age_desc">Sắp xếp theo tuổi ↓</option>
                    </select>
                    <input placeholder="Tìm kiếm từ khóa theo tên hoặc email" value={this.state.search} onChange={this.handleSearch} style={input}/>
                </div>

                <TableStudent
                    data={list}
                    page={this.state.page}
                    pageSize={this.state.pageSize}
                    onBlockToggle={this.blockToggle}
                    onEdit={this.editStudent}
                    onDelete={this.deleteStudent}
                    onPageChange={(p)=>this.setState({page:p})}
                />

                {this.state.showModal && (
                    <AddStudent onClose={()=>this.setState({showModal:false})} onSubmit={this.addStudent} />
                )}

                <p style={{ textAlign: "center", color: "#6b7280", marginTop: 12 }}>Danh sách sinh viên</p>
            </div>
        );
    }
}