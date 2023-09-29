import './App.css';
import ImageGenerator from './pages/ImageGenerator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' />
          <Route path='image-generator' element={<ImageGenerator/>} />
      </Routes>
    </div>
  );
}

export default App;
