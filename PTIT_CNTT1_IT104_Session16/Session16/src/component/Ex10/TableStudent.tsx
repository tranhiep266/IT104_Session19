import { Component } from "react";

export interface Student {
    id: number;
    code: string;
    name: string;
    dob: string;   // yyyy-mm-dd
    email: string;
    active: boolean;
}

interface Props {
    data: Student[];
    page: number;
    pageSize: number;
    onBlockToggle: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onPageChange: (p: number) => void;
}

const card: React.CSSProperties = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 4 };
const thtd: React.CSSProperties = { padding: 12, borderBottom: "1px solid #f0f0f0", fontSize: 14.5, textAlign: "left" };
const badge = (ok: boolean): React.CSSProperties => ({
    padding: "4px 10px", borderRadius: 999, fontSize: 12, color: ok ? "#0a7a24" : "#d93025",
    background: ok ? "#e6f6e6" : "#fdecec",
});
const chip = (bg: string, color: string): React.CSSProperties => ({
    fontSize: 12.5, padding: "6px 10px", borderRadius: 8, background: bg, color, border: "none", cursor: "pointer",
});

export function ageOf(dob: string) {
    const d = new Date(dob), t = new Date();
    let age = t.getFullYear() - d.getFullYear();
    const m = t.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && t.getDate() < d.getDate())) age--;
    return age;
}
export function formatVN(dob: string) {
    const [y, m, d] = dob.split("-");
    return `${d}/${m}/${y}`;
}

export default class StudentTable extends Component<Props> {
    render() {
        const { data, page, pageSize } = this.props;
        const start = (page - 1) * pageSize;
        const view = data.slice(start, start + pageSize);
        const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

        return (
            <div style={card}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead style={{ background: "#fafafa", color: "#111827" }}>
                    <tr>
                        {["STT","Mã sinh viên","Tên sinh viên","Ngày sinh","Email","Trạng thái","Chức năng"].map(h=>(
                            <th key={h} style={thtd}>{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {view.map((s, idx) => (
                        <tr key={s.id}>
                            <td style={thtd}>{start + idx + 1}</td>
                            <td style={thtd}>{s.code}</td>
                            <td style={thtd}>{s.name}</td>
                            <td style={thtd}>
                                {formatVN(s.dob)}{" "}
                                <span style={{ color: "#6b7280", fontSize: 12, marginLeft: 6 }}>({ageOf(s.dob)}t)</span>
                            </td>
                            <td style={thtd}>{s.email}</td>
                            <td style={thtd}><span style={badge(s.active)}>{s.active ? "Đang hoạt động" : "Ngừng hoạt động"}</span></td>
                            <td style={{ ...thtd, display: "flex", gap: 6 }}>
                                <button style={chip("#ede9fe", "#6d28d9")} onClick={() => this.props.onBlockToggle(s.id)}>
                                    {s.active ? "Chặn" : "Bỏ chặn"}
                                </button>
                                <button style={chip("#fff7ed", "#b45309")} onClick={() => this.props.onEdit(s.id)}>Sửa</button>
                                <button style={chip("#fee2e2", "#b91c1c")} onClick={() => this.props.onDelete(s.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                    {view.length === 0 && (
                        <tr><td style={{ ...thtd, textAlign: "center" }} colSpan={7}>Không có dữ liệu</td></tr>
                    )}
                    </tbody>
                </table>

                <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: 12 }}>
                    <button disabled={page===1} onClick={() => this.props.onPageChange(page-1)} style={{ width: 34, height: 34, borderRadius: 999 }}>‹</button>
                    {Array.from({length: totalPages}).map((_,i)=>(
                        <button
                            key={i}
                            onClick={()=>this.props.onPageChange(i+1)}
                            style={{ width: 34, height: 34, borderRadius: 999, background: page===i+1 ? "#2563eb" : undefined, color: page===i+1 ? "#fff" : undefined, borderColor: page===i+1 ? "#2563eb" : undefined }}
                        >
                            {i+1}
                        </button>
                    ))}
                    <button disabled={page===totalPages} onClick={() => this.props.onPageChange(page+1)} style={{ width: 34, height: 34, borderRadius: 999 }}>›</button>
                </div>
            </div>
        );
    }
}