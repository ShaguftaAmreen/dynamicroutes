//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
// import User from './User'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/users' element={<Users />} /> */}
      <Route path='/users/:id/:name/:lname' element={<Users  />} />
     </Routes>
    </div>
  );
}

export default App;
