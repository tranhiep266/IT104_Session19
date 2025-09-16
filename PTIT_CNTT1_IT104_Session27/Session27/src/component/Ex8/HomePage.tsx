import {Link} from "react-router-dom";
import {Button} from "antd";

export default function HomePage() {
    return (
        <div style={{textAlign:"center",marginTop:"40px"}}>
            <Button style={{marginRight:"12px"}}>
                <Link to="/login">Login</Link>
            </Button>
            <Button>
                <Link to="/regist">Register</Link>
            </Button>
        </div>
    );
}