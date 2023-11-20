import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Menu from "../pages/Menu/Menu.jsx";
import Produtos from "../pages/Produtos/Produtos.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path={"/produtos"} element={<Produtos />} />
            </Routes>
        </Router>
    );
};

export default App;
