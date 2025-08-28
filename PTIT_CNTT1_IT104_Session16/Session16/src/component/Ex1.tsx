import { Component } from 'react';

interface State {
    studentList: string[];
}

class Ex1 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            studentList: ["Toán", "Lí", "Hóa", "Anh", "Văn"]
        };
    }

    render() {
        return (
            <div style={{textAlign:"center",maxWidth:"700px"}}>
                <h2>Danh sách môn học</h2>
                <ul style={{listStyle:"none"}}>
                    {this.state.studentList.map((subject, index) => (
                        <li
                            key={index}
                            style={{
                                backgroundColor:"lightblue",
                                height:"50px",
                                alignContent:"center",
                                margin:"20px"
                        }}
                        >
                            {subject}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Ex1;