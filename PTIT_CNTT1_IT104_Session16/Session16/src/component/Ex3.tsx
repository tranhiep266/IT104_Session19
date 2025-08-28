import React, {Component} from 'react';

class Ex3 extends Component {
    render() {

        return (
            <div style={{background:"#323234",
                display:"flex",
                justifyContent:"center",
                marginTop:"30px",
                    }}>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#0d6efd",
                    color:"white"}}>Primary</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#6c757d",
                    color:"white"}}>Secondary</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#1a8754",
                    color:"white"}}>Success</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#ffc008",
                    color:"black"}}>Warning</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#dc3545",
                    color:"white"}}>Danger</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#11caf0",
                    color:"black"}}>Info</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#f8f9fa",
                    color:"black"}}>Light</button>
                <button style={{
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: 12,
                    background: "#212529",
                    color:"white"}}>Dark</button>
            </div>
        );
    }
}

export default Ex3;