import { useEffect, useMemo, useState, type SetStateAction} from "react";
// @ts-ignore
import type {ColumnsType} from "antd/es/table";
// @ts-ignore
import {Button, Card, Form, Input, Modal, Popconfirm, Space, Table, Typography, message} from "antd";
// @ts-ignore
import {DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined} from "@ant-design/icons";
import type {Student} from "../api/Ex3.ts";
import {createStudent, deleteStudent, getStudentById, getStudents} from "../api/Ex3.ts";

export default function StudentsPage() {
    const [data, setData] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [openAdd, setOpenAdd] = useState(false);
    const [form] = Form.useForm<Omit<Student, "id">>();
    const [keyword, setKeyword] = useState("");

    async function load() {
        setLoading(true);
        try {
            const res = await getStudents();
            setData(res);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
        getStudentById(1);
    }, []);

    const onAdd = async () => {
        try {
            const values = await form.validateFields();
            await createStudent(values);
            message.success("Thêm sinh viên thành công");
            setOpenAdd(false);
            form.resetFields();
            await load();
        } catch {
        }
    };

    const onDelete = async (id: number) => {
        await deleteStudent(id);
        message.success("Đã xoá");
        await load();
    };

    const filtered = useMemo(
        () =>
            keyword.trim()
                ? data.filter(
                    s =>
                        s.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
                        s.email.toLowerCase().includes(keyword.toLowerCase())
                )
                : data,
        [data, keyword]
    );

    const tableData = useMemo(() => (
        filtered.map((record) => ({
            ...record,
            // Modal xoá hay
            actions: (
                <Space>
                    <Button type="text" icon={<EditOutlined/>}/>
                    <Popconfirm
                        title="Xóa sinh viên"
                        description={
                            <>
                                Bạn chắc chắn muốn xóa <b>{record.fullName}</b> (ID:
                                ST{String(record.id).padStart(3, "0")})?
                            </>
                        }
                        okText="Xóa"
                        cancelText="Hủy"
                        okButtonProps={{danger: true}}
                        onConfirm={() => onDelete(record.id)}
                    >
                        <Button danger type="text" icon={<DeleteOutlined/>}/>
                    </Popconfirm>
                </Space>
            )
        }))
    ), [filtered]);

    const columns: ColumnsType<Student> = [
        {title: "Tên sinh viên", dataIndex: "fullName", key: "fullName"},
        {title: "Email", dataIndex: "email", key: "email"},
        {title: "Địa chỉ", dataIndex: "address", key: "address"},
        {title: "Số điện thoại", dataIndex: "phone", key: "phone"},
        {
            title: "Lựa chọn",
            key: "actions",
            width: 130,
            dataIndex: "actions"
        }
    ];

    return (
        <div style={{maxWidth: 1000, margin: "24px auto", padding: 16}}>
            <Card
                title={
                    <Space style={{color: "white"}}>
                        <Typography.Title level={4} style={{margin: 0, color: "white"}}>
                            Quản lý <b>sinh viên</b>
                        </Typography.Title>
                    </Space>
                }
                styles={{
                    header: { background: "#334155", borderBottom: 0 },
                    body: { padding: 0 }
                }}
                extra={
                    <Space>
                        <Input
                            allowClear
                            placeholder="Tìm tên hoặc email…"
                            prefix={<SearchOutlined/>}
                            style={{width: 260}}
                            value={keyword}
                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setKeyword(e.target.value)}
                        />
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpenAdd(true)}>
                            Thêm mới sinh viên
                        </Button>
                    </Space>
                }
            >
                <Table<Student>
                    rowKey="id"
                    columns={columns}
                    dataSource={tableData}
                    loading={loading}
                    pagination={{ pageSize: 5, showSizeChanger: false, position: ["bottomRight"] }}
                    rowSelection={{}}
                />
            </Card>

            <Modal
                title="Thêm mới sinh viên"
                open={openAdd}
                onCancel={() => setOpenAdd(false)}
                onOk={onAdd}
                okText="Lưu"
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên sinh viên" name="fullName" rules={[{ required: true, message: "Nhập tên" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Nhập email" }, { type: "email", message: "Email không hợp lệ" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: "Nhập địa chỉ" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Nhập số điện thoại" }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}