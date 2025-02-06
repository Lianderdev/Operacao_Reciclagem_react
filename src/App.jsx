import { Routes, Route } from 'react-router-dom';
import { Welcome } from "./pages/Welcome/index.jsx"
import { Menu } from "./pages/Menu/index.jsx"
import { Level } from './pages/Level/index.jsx';

export function App() {
  return <>
   <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/menu" element={<Menu />} />
      <Route path='/level' element={<Level/>} />
    </Routes>
  </>
}






