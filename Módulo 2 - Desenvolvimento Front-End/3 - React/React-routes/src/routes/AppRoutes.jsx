import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Contato from '../pages/Contato.jsx';
import Sobre from '../pages/Sobre.jsx';
import Produto from '../pages/Produto.jsx';
import NotFound from '../pages/NotFound.jsx';

export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}