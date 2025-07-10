import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom"
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          
           <Route path='/' element={<HomePage />} />
           <Route path='/dashboard' element={<DashboardPage />} />

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
