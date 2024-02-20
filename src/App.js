import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Team from './components/Team/Team';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
     
    </div>
  );
}

export default App;