import './App.css';
import Homepage from './Layouts/Homepage';
import Register from './Layouts/Register.Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Layouts/Login';
import Owner from './Layouts/Owner';
import Inspector from './Layouts/Inspector';
import User from './Layouts/User';
function App() {
     return (
          <div className="App">
               <Router>
                    <Routes>
                         <Route path="/" element={<Homepage />} />
                         <Route path="/register" element={<Register />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/owner" element={<Owner />} />
                         <Route path="/inspector" element={<Inspector />} />
                         <Route path="/user" element={<User />} />
                    </Routes>
               </Router>
          </div>
     );
}

export default App;
