import Home from 'pages/Home';
import './App.css';
import ImageGenerator from './pages/ImageGenerator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/navbar/Layout';
import GreetingsGenius from 'pages/GreetingsGenius';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='image-generator' element={<ImageGenerator/>} />
          <Route path='greetings-genius' element={<GreetingsGenius/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
