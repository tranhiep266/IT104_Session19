import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" }
});
export interface Student {
    id: number;
    fullName: string;
    email: string;
    address: string;
    phone: string;
}
export async function getStudents(): Promise<Student[]> {
    const { data } = await http.get<Student[]>("/students");
    return data;
}

export async function getStudentById(id: number): Promise<Student | null> {
    try {
        const { data } = await http.get<Student>(`/students/${id}`);
        console.log("Bản ghi tìm thấy:", data);
        return data;
    } catch (err: any) {
        console.log("Không tìm thấy bản ghi");
        return null;
    }
}

export async function createStudent(stu: Omit<Student, "id">): Promise<Student> {
    const { data } = await http.post<Student>("/students", stu);
    console.log("Kết quả server trả về:", data);
    return data;
}

export async function deleteStudent(id: number): Promise<void> {
    await http.delete(`/students/${id}`);
}