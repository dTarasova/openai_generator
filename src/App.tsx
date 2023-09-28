import './App.css';
import ImageGenerator from './components/scenes/ImageGenerator';
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
