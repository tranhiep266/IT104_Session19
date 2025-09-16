import { Link } from "react-router-dom";
import "./Header.css";


export default function Header(){
    return (
        <header className="header">
            <nav className="btn">
                <Link to="/homepageEx1"><button>Ex1</button></Link>
                <Link to="/productListEx2"><button>Ex2</button></Link>
                <Link to="/taskEx3"><button>Ex3</button></Link>
                <Link to="/productListEx4"><button>Ex4</button></Link>
                <Link to="/blog"><button>Ex5</button></Link>
                <Link to="/ex6"><button>Ex6</button></Link>
                <Link to="/teams"><button>Ex7</button></Link>
                <Link to="/ex8"><button>Ex8</button></Link>
                <Link to="/ex9"><button>Ex9</button></Link>
                <Link to="/ex10"><button>Ex10</button></Link>
            </nav>
        </header>
    )
}