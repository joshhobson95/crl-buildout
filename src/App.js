import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import History from './components/History/History';
import RelationaLearning from './components/RelationaLearning/RelationaLearning';
import Resources from './components/Resources/Resources';
import Contact from './components/Contact/Contact';
import RelationaLeadership from './components/RelationaLeadership/RelationaLeadership';
import Podcast from './components/Podcast/Podcast';
import Publications from './components/Publications/Publications';
import Coaching from './components/Coaching/Coaching';
import Videos from './components/Videos/Videos';
import Courses from './components/Courses/Courses';
import Programs from './components/Programs/Programs';
import History3 from './components/History2/History3';
import Blog from './components/Blog/Blog';
import SingleBlog from './components/Blog/SingleBlog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/history3' element={<History3 />}/>
        <Route path='/relationalearning' element={<RelationaLearning/>}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/relationaleadership' element={<RelationaLeadership />}/>
        <Route path='/podcast' element={<Podcast />}/>
        <Route path='/publications' element={<Publications />}/>
        <Route path='/coaching' element={<Coaching />}/>
        <Route path='/videos' element={<Videos />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/programs' element={<Programs />}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/singleblog' element={<SingleBlog/>}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
