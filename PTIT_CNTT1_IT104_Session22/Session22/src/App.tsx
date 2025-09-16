import {Route, Routes} from 'react-router-dom';
import Header from '../Header/Header.tsx'

import Ex1 from "../component/Ex1.tsx";
import Ex2 from "../component/Ex2.tsx";
import Ex3 from "../component/Ex3.tsx";
import Ex4 from "../component/Ex4.tsx";
import Ex5 from "../component/Ex5.tsx";
import Ex6 from "../component/Ex6.tsx";
import Ex7 from "../component/Ex7.tsx";
import Ex8 from "../component/Ex8.tsx";
function App() {


    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/ex1" element={<Ex1 />} />
                    <Route path="/ex2" element={<Ex2 />} />
                    <Route path="/ex3" element={<Ex3 />} />
                    <Route path="/ex4" element={<Ex4 />} />
                    <Route path="/ex5" element={<Ex5 />} />
                    <Route path="/ex6" element={<Ex6 />} />
                    <Route path="/ex7" element={<Ex7 />} />
                    <Route path="/ex8" element={<Ex8 />} />

                    <Route path="*" element={<h2>Trang không tồn tại</h2>} />
                </Routes>

            </main>
        </>
    )
}

export default App