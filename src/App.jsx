import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom"
import HomePage from './pages/Home.jsx';
import DashboardPage from './pages/Dashboard.jsx';
import CoinPage from './pages/Coin.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          
           <Route path='/' element={<HomePage />} />
           <Route path='/dashboard' element={<DashboardPage />} />
           <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
