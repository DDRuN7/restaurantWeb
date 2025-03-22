import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Notice from './pages/Notice';
import './css/Head.css'
import './css/Foot.css'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/notice" element={<Notice />} />
            </Routes>
        </Router>
    );
}

export default App;
