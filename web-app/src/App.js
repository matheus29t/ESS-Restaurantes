import './App.css';
import AddPage from "./pages/addPage";
import DashPage from "./pages/dashPage";
import LoginPage from "./pages/loginPage";
import {Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path = "/" element={<LoginPage />} />
        <Route exact path = "/dash" element={<DashPage />} />
        <Route exact path = "/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
