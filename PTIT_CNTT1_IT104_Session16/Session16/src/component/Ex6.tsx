import React, {Component} from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

interface State{
    isDarkMode: boolean;}

class Ex6 extends Component<object,State> {
    constructor(props:object) {
        super(props);
        this.state = { isDarkMode: false };
    }
    toggleTheme = () => {
        this.setState(prev => ({ isDarkMode: !prev.isDarkMode }));
    };
    render() {
        const { isDarkMode } = this.state;
        return (
            <div style={{
                background: isDarkMode ? "#1f1f1f" : "#f6f6f6",
                color: isDarkMode ? "#ffffff" : "#111111",
                textAlign:"center"
            }}>
                <h2 >
                    {isDarkMode ? " Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}

                </h2>
                <button
                    onClick={this.toggleTheme}
                    style={{
                    backgroundColor:"blue",
                    color:"white"
                }}>Chuyển theme</button>
            </div>
        );
    }
}

export default Ex6;