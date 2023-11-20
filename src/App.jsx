import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AllDoct from './Components/AllDoct';
import ViewDoct from './Components/ViewDoct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<AllDoct/>} />
        <Route path='/View-Doctor/:id' element={<ViewDoct/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
