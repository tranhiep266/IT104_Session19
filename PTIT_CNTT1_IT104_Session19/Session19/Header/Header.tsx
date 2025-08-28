import { Link } from "react-router-dom";
import "./Header.css";


export default function Headers(){
    return (
        <header className="header">
            <nav className="btn">
                <Link to="/ex1"><button>Ex1</button></Link>
                <Link to="/ex2"><button>Ex2</button></Link>
                <Link to="/ex3"><button>Ex3</button></Link>
                <Link to="/ex4"><button>Ex4</button></Link>
                <Link to="/ex5"><button>Ex5</button></Link>
                <Link to="/ex6"><button>Ex6</button></Link>
                <Link to="/ex7"><button>Ex7</button></Link>
                <Link to="/ex8"><button>Ex8</button></Link>
                <Link to="/ex9"><button>Ex9</button></Link>
                <Link to="/ex10"><button>Ex10</button></Link>
            </nav>
        </header>
    )
}