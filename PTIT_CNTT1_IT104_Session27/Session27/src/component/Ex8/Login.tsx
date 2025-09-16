import { Card, Form, Input, Button, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (values: any) => {
        console.log("Login submitted:", values);
        const stored = localStorage.getItem("userData");
        if (!stored) {
            message.error("No account found. Please register first.");
            return;
        }
        const userData = JSON.parse(stored);
        if (userData.email === values.email && userData.password === values.password) {
            message.success("Login successful!");
            navigate("/dashboard");
        } else {
            message.error("Invalid email or password!");
        }
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
                    Login account
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

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login an account
                        </Button>
                    </Form.Item>
                </Form>

                <Typography.Paragraph style={{ textAlign: "center", marginBottom: 0 }}>
                    Already have an account? <Link to="/regist">Register here</Link>
                </Typography.Paragraph>
            </Card>
        </div>
    );
}