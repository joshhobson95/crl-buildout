import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import History from './components/History/History';
import RelationaLearning from './components/RelationaLearning/RelationaLearning';
import Resources from './components/Resources/Resources';
import Contact from './components/Contact/Contact';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/relationalearning' element={<RelationaLearning/>}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
     
    </div>
  );
}

export default App;
