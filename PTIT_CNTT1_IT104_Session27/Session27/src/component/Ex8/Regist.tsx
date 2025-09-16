import { Card, Form, Input, Button, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Regist() {
    const navigate = useNavigate();
    const handleSubmit = (values: any) => {
        console.log("Form submitted:", values);
        localStorage.setItem("userData", JSON.stringify(values));
        message.success("Account created! Please log in.");
        navigate("/login");
    };
    return (
        <div style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 16
        }}>
            <Card style={{ width: 420 }}>
                <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
                    Create account
                </Typography.Title>

                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Your email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email!" },
                            { type: "email", message: "Please enter a valid email!" }
                        ]}
                    >
                        <Input placeholder="name@company.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please enter your password!" },
                            { min: 6, message: "Password must be at least 6 characters!" }
                        ]}
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: "Please confirm your password!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Passwords do not match!"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Create an account
                        </Button>
                    </Form.Item>
                </Form>

                <Typography.Paragraph style={{ textAlign: "center", marginBottom: 0 }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography.Paragraph>
            </Card>
        </div>
    );
}